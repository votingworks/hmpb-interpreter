import { strict as assert } from 'assert'
import makeDebug from 'debug'
import { Shape } from '../hmpb/shapes'
import { Corners, Offset, Point } from '../types'
import { PIXEL_BLACK } from './binarize'
import { rectCorners } from './geometry'
import { getImageChannelCount } from './imageFormatUtils'

const debug = makeDebug('module-scan:corners')

export function getCorners(
  imageData: ImageData,
  shape: Shape,
  { minLineStroke = 2, maxSkewRadians = (5 / 180) * Math.PI } = {}
): Corners {
  debug(
    'finding corners of shape with bounds (%o); minLineStroke=%d maxSkew=%d°',
    shape.bounds,
    minLineStroke,
    (maxSkewRadians * 180) / Math.PI
  )
  const [topLeft, topRight, bottomLeft, bottomRight] = rectCorners(shape.bounds)
  const maxLeftRightSkewDistance = Math.ceil(
    shape.bounds.height * Math.tan(maxSkewRadians)
  )
  const maxUpDownSkewDistance = Math.ceil(
    shape.bounds.width * Math.tan(maxSkewRadians)
  )

  debug(
    'calculated max left/right skew distance: %dpx',
    maxLeftRightSkewDistance
  )
  debug('calculated max up/down skew distance: %dpx', maxUpDownSkewDistance)

  debug('finding top-left corner from %o', topLeft)
  const topLeftCorner = findCorner(
    imageData,
    topLeft,
    { x: 1, y: 1 },
    {
      minLineStroke: minLineStroke,
      maxOffset: { x: maxLeftRightSkewDistance, y: maxUpDownSkewDistance },
    }
  )
  debug('found top-left corner: %o', topLeftCorner)

  debug('finding top-right corner from %o', topRight)
  const topRightCorner = findCorner(
    imageData,
    topRight,
    { x: -1, y: 1 },
    {
      minLineStroke: minLineStroke,
      maxOffset: { x: -maxLeftRightSkewDistance, y: maxUpDownSkewDistance },
    }
  )
  debug('found top-right corner: %o', topRightCorner)

  debug('finding bottom-left corner from %o', bottomLeft)
  const bottomLeftCorner = findCorner(
    imageData,
    bottomLeft,
    { x: 1, y: -1 },
    {
      minLineStroke: minLineStroke,
      maxOffset: { x: maxLeftRightSkewDistance, y: -maxUpDownSkewDistance },
    }
  )
  debug('found bottom-left corner: %o', bottomLeftCorner)

  debug('finding bottom-right corner from %o', bottomRight)
  const bottomRightCorner = findCorner(
    imageData,
    bottomRight,
    { x: -1, y: -1 },
    {
      minLineStroke: minLineStroke,
      maxOffset: { x: -maxLeftRightSkewDistance, y: -maxUpDownSkewDistance },
    }
  )
  debug('found bottom-right corner: %o', bottomRightCorner)

  return [topLeftCorner, topRightCorner, bottomLeftCorner, bottomRightCorner]
}

export function findCorner(
  { data, width, height }: ImageData,
  { x: startX, y: startY }: Point,
  stepOffset: Offset,
  { minLineStroke, maxOffset }: { minLineStroke: number; maxOffset: Offset }
): Point {
  assert(minLineStroke > 0)

  const channels = getImageChannelCount({ data, width, height })
  let checkingX = true
  let checkingY = true

  for (let step = 0; ; step += 1) {
    const stepOffsetX = step * stepOffset.x
    const stepOffsetY = step * stepOffset.y

    if (!checkingX && !checkingY) {
      debug(
        'unable to find a suitable corner in either direction, even after backtracking; using the original bounding box corner'
      )
      return { x: startX, y: startY }
    }

    if (checkingX) {
      let x = startX + stepOffsetX
      let y = startY
      let found = true

      debug(
        'checking for %d black pixel(s) in the x direction starting at x=%d, y=%d',
        minLineStroke,
        x,
        y
      )
      for (let strokeOffset = 0; strokeOffset < minLineStroke; strokeOffset++) {
        if (
          data[
            (y * width + x + strokeOffset * Math.sign(stepOffsetX)) * channels
          ] !== PIXEL_BLACK
        ) {
          debug('bailing at stroke offset %d', strokeOffset)
          found = false
          break
        }
      }

      if (found) {
        debug(
          'found possible corner at x=%d, y=%d after %d step(s) in the x direction',
          x,
          y,
          step
        )

        while (
          data[((y + stepOffset.y) * width + (x - stepOffset.x)) * channels] ===
          PIXEL_BLACK
        ) {
          y += stepOffset.y
          x -= stepOffset.x
          debug(
            'backtracking to x=%d, y=%d to correct a possible overshoot',
            x,
            y
          )

          while (
            data[(y * width + (x - stepOffset.x)) * channels] === PIXEL_BLACK
          ) {
            x -= stepOffset.x
          }
          debug('backtracked in the x direction to x=%d, y=%d', x, y)
        }

        debug(
          'backtracked in the x direction as far as possible, now going in the y direction'
        )
        while (
          data[((y - stepOffset.y) * width + x) * channels] === PIXEL_BLACK
        ) {
          debug('backtracking along the y direction to x=%d, y=%d', x, y)
          y -= stepOffset.y
        }

        if (Math.abs(startX - x) > Math.abs(maxOffset.x)) {
          debug(
            'after backtracking, skew would still be too high; done checking in the x direction'
          )
          checkingX = false
        } else {
          debug('final corner detected at x=%d, y=%d', x, y)
          return { x, y }
        }
      }
    }

    if (checkingY) {
      let x = startX
      let y = startY + stepOffsetY
      let found = true

      debug(
        'checking for %d black pixel(s) in the y direction starting at x=%d, y=%d',
        minLineStroke,
        x,
        y
      )
      for (let strokeOffset = 0; strokeOffset < minLineStroke; strokeOffset++) {
        if (
          data[
            ((y + strokeOffset * Math.sign(stepOffsetY)) * width + x) * channels
          ] !== PIXEL_BLACK
        ) {
          debug('bailing at stroke offset %d', strokeOffset)
          found = false
          break
        }
      }

      if (found) {
        debug(
          'found possible corner at x=%d, y=%d after %d step(s) in the y direction',
          x,
          y,
          step
        )

        while (
          data[((y - stepOffset.y) * width + (x + stepOffset.x)) * channels] ===
          PIXEL_BLACK
        ) {
          y -= stepOffset.y
          x += stepOffset.x
          debug(
            'backtracking to x=%d, y=%d to correct a possible overshoot',
            x,
            y
          )

          while (
            data[((y - stepOffset.y) * width + x) * channels] === PIXEL_BLACK
          ) {
            y -= stepOffset.y
          }
          debug('backtracked in the y direction to x=%d, y=%d', x, y)
        }

        debug(
          'backtracked in the y direction as far as possible, now going in the x direction'
        )
        while (
          data[(y * width + (x - stepOffset.x)) * channels] === PIXEL_BLACK
        ) {
          debug('backtracking along the x direction to x=%d, y=%d', x, y)
          x -= stepOffset.x
        }

        if (Math.abs(startY - y) > Math.abs(maxOffset.y)) {
          debug(
            'after backtracking, skew would still be too high; done checking in the y direction'
          )
          checkingY = false
        } else {
          debug('final corner detected at x=%d, y=%d', x, y)
          return { x, y }
        }
      }
    }
  }
}
