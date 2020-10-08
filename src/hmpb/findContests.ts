import makeDebug from 'debug'
import { Corners, Point, Rect } from '../types'
import { PIXEL_BLACK } from '../utils/binarize'
import { rectCorners } from '../utils/geometry'
import { getImageChannelCount } from '../utils/imageFormatUtils'
import { VisitedPoints } from '../utils/VisitedPoints'
import { findShape, Shape } from './shapes'

const debug = makeDebug('hmpb-interpreter:findContests')

export interface ContestShape {
  bounds: Rect
  corners: Corners
}

export interface Options {
  /**
   * How many pixels in from the edge does the content appear?
   */
  inset?: number
  /**
   * How many pixels separate contest boxes from each other?
   */
  separation?: number

  /**
   * How many columns are there, and which ones should we scan?
   */
  columns?: readonly boolean[]

  /**
   * How wide is a contest box expected to be?
   */
  expectedWidth?: number

  /**
   * What is the minimum number of pixels tall a contest box should be?
   */
  minExpectedHeight?: number

  /**
   * What is the maximum number of pixels tall a contest box should be?
   */
  maxExpectedHeight?: number

  /**
   * How off do you want to allow each of these values to be?
   */
  errorMargin?: number
}

export default function* findContests(
  ballotImage: ImageData,
  {
    inset = Math.round(0.035 * ballotImage.width),
    separation = Math.round(0.0175 * ballotImage.width),
    columns = [true, true, true],
    expectedWidth = Math.floor(
      (ballotImage.width - 2 * inset - (columns.length - 1) * separation) /
        columns.length
    ),
    minExpectedHeight = Math.floor(0.1 * ballotImage.height),
    maxExpectedHeight = Math.ceil(0.9 * ballotImage.height),
    errorMargin = Math.ceil(0.025 * ballotImage.width),
  }: Options = {}
): Generator<ContestShape> {
  const visitedPoints = new VisitedPoints(ballotImage.width, ballotImage.height)

  for (const [columnIndex, column] of columns.entries()) {
    if (!column) {
      continue
    }
    debug('begin scanning column %d', columnIndex)

    const columnMidX = Math.round(
      inset + columnIndex * (expectedWidth + separation) + expectedWidth / 2
    )

    let lastShape: Shape | undefined
    const expectedContestTop =
      findTopBorderInset(ballotImage, columnMidX, {
        yMax: inset - errorMargin,
      }) + inset

    debug(
      'starting to look for contest in column %d at x=%d,y=%d',
      columnIndex,
      columnMidX,
      Math.max(expectedContestTop - errorMargin, 0)
    )

    for (
      let y = Math.max(expectedContestTop - errorMargin, 0);
      y < ballotImage.height - inset - minExpectedHeight + errorMargin;
      y++
    ) {
      if (!lastShape && y > expectedContestTop + errorMargin) {
        debug(
          'abandoning column %d because no top contest was found by y=%d',
          columnIndex,
          y
        )
        break
      }

      if (
        lastShape &&
        y >
          lastShape.bounds.y +
            lastShape.bounds.height +
            separation +
            errorMargin
      ) {
        debug(
          'abandoning the rest of column %d because we should have found another contest box by y=%d',
          columnIndex,
          y
        )
        break
      }

      const shape = findShape(ballotImage, { x: columnMidX, y }, visitedPoints)

      if (shape.bounds.width === 0 || shape.bounds.height === 0) {
        continue
      }

      if (
        shape.bounds.height < minExpectedHeight ||
        shape.bounds.height > maxExpectedHeight ||
        shape.bounds.width < expectedWidth - errorMargin ||
        shape.bounds.width > expectedWidth + errorMargin
      ) {
        debug(
          'skipping shape found at x=%d,y=%d because it is the wrong size: bounds=%O, actual=%dˣ%d, min=%dˣ%d, max=%dˣ%d',
          columnMidX,
          y,
          shape.bounds,
          shape.bounds.width,
          shape.bounds.height,
          expectedWidth - errorMargin,
          minExpectedHeight,
          expectedWidth + errorMargin,
          maxExpectedHeight
        )
      } else {
        debug('found contest shape: %O', shape.bounds)
        yield {
          bounds: shape.bounds,
          corners: getCorners(ballotImage, shape),
        }
      }

      y = shape.bounds.y + shape.bounds.height
      lastShape = shape
    }
  }
}

function findTopBorderInset(
  { data, width, height }: ImageData,
  x: number,
  {
    yMax = height - 1,
    minimumConsecutiveWhitePixels = Math.ceil(height * 0.005),
  } = {}
): number {
  debug(
    'looking for top inset at x=%d within %dpx of the top with a run of %d white pixels',
    x,
    yMax + 1,
    minimumConsecutiveWhitePixels
  )
  const channels = getImageChannelCount({ data, width, height })

  // Look for black border within [0, yMax].
  let seen = false
  let y = 0

  while (y <= yMax) {
    const color = data[(y * width + x) * channels]

    if (color === PIXEL_BLACK) {
      seen = true
      break
    }

    y++
  }

  if (!seen) {
    // Didn't find one.
    debug('no border found by x=%d y=%d', x, y)
    return 0
  }

  // Look for a run of white pixels that marks the end of the border.
  let consecutiveWhitePixels = 0

  while (consecutiveWhitePixels < minimumConsecutiveWhitePixels && y < height) {
    const color = data[(y * width + x) * channels]

    if (color === PIXEL_BLACK) {
      consecutiveWhitePixels = 0
    } else {
      consecutiveWhitePixels++
      debug(
        'found a white pixel at x=%d y=%d, count=%d',
        x,
        y,
        consecutiveWhitePixels
      )
    }

    y++
  }

  if (consecutiveWhitePixels < minimumConsecutiveWhitePixels) {
    debug('did not find the end of a border')
    return 0
  }

  debug(
    'end of the border found starting at x=%d y=%d',
    x,
    y - consecutiveWhitePixels
  )
  return y - consecutiveWhitePixels
}

function getCorners(imageData: ImageData, shape: Shape): Corners {
  const [topLeft, topRight, bottomLeft, bottomRight] = rectCorners(shape.bounds)

  return [
    findCorner(imageData, topLeft, { x: 1, y: 1 }),
    findCorner(imageData, topRight, { x: -1, y: 1 }),
    findCorner(imageData, bottomLeft, { x: 1, y: -1 }),
    findCorner(imageData, bottomRight, { x: -1, y: -1 }),
  ]
}

function findCorner(
  { data, width, height }: ImageData,
  { x: startX, y: startY }: Point,
  direction: Point
): Point {
  const channels = getImageChannelCount({ data, width, height })

  for (let step = 0; ; step += 1) {
    {
      const x = startX + step * direction.x
      const y = startY

      if (data[(y * width + x) * channels] === PIXEL_BLACK) {
        return { x, y }
      }
    }
    {
      const x = startX
      const y = startY + step * direction.y

      if (data[(y * width + x) * channels] === PIXEL_BLACK) {
        return { x, y }
      }
    }
  }
}
