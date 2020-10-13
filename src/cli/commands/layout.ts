import { strict as assert } from 'assert'
import chalk from 'chalk'
import { OptionParseError } from '..'
import { writeImageToFile } from '../../../test/utils'
import findContests from '../../hmpb/findContests'
import { Point, Rect } from '../../types'
import { binarize, RGBA } from '../../utils/binarize'
import { getImageChannelCount } from '../../utils/imageFormatUtils'
import { adjacentFile } from '../../utils/path'
import { readImageData } from '../../utils/readImageData'

export interface Options {
  ballotImagePaths: readonly string[]
}

const RGBA_CHANNELS = 4
const RED_OVERLAY_COLOR: RGBA = [0xff, 0, 0, 0x60]
const GREEN_OVERLAY_COLOR: RGBA = [0, 0xff, 0, 0x60]

export const name = 'layout'

export async function parseOptions(args: readonly string[]): Promise<Options> {
  const ballotImagePaths: string[] = []

  for (const arg of args) {
    if (arg.startsWith('-')) {
      throw new OptionParseError(`unexpected option passed to 'layout': ${arg}`)
    }

    ballotImagePaths.push(arg)
  }

  return { ballotImagePaths }
}

/**
 * Finds features in an image and writes an image adjacent with overlays marking
 * those features.
 */
export async function run(
  options: Options,
  stdin: typeof process.stdin,
  stdout: typeof process.stdout
): Promise<number> {
  for (const ballotImagePath of options.ballotImagePaths) {
    const imageData = await readImageData(ballotImagePath)
    const binarized: ImageData = {
      data: new Uint8ClampedArray(imageData.data.length),
      width: imageData.width,
      height: imageData.height,
    }
    binarize(imageData, binarized)

    const threeColumnContests = [
      ...findContests(imageData, { columns: [true, true, true] }),
    ]
    const contests =
      threeColumnContests.length === 0
        ? [...findContests(imageData, { columns: [true, true] })]
        : threeColumnContests
    const targetWidth = Math.max(15, Math.round(imageData.width * 0.01))

    for (const contest of contests) {
      fill(imageData, contest.bounds, GREEN_OVERLAY_COLOR)

      for (const corner of contest.corners) {
        drawTarget(imageData, corner, RED_OVERLAY_COLOR, targetWidth)
      }
    }

    const layoutFilePath = adjacentFile('-layout', ballotImagePath)
    stdout.write(
      `📝 ${layoutFilePath} ${chalk.gray(`(${contests.length} contest(s))`)}\n`
    )
    await writeImageToFile(imageData, layoutFilePath)
  }

  return 0
}

/**
 * Draws a target composed of concentric squares around a given point. If the
 * color has transparency, the fill blends with the existing image.
 */
function drawTarget(
  { data, width, height }: ImageData,
  { x, y }: Point,
  color: RGBA,
  size: number
): void {
  assert.equal(getImageChannelCount({ data, width, height }), RGBA_CHANNELS)

  const halfSize = Math.ceil(size / 2)

  for (let xd = -halfSize; xd <= halfSize; xd++) {
    for (let yd = -halfSize; yd <= halfSize; yd++) {
      if (
        (xd % 2 !== 0 && Math.abs(yd) <= Math.abs(xd)) ||
        (yd % 2 !== 0 && Math.abs(xd) <= Math.abs(yd))
      ) {
        const offset = ((y + yd) * width + (x + xd)) * RGBA_CHANNELS
        const dst = data.slice(offset, offset + RGBA_CHANNELS)
        data.set(alphaBlend(dst, color), offset)
      }
    }
  }
}

/**
 * Fills a region of an image with a particular color. If the color has
 * transparency, the fill blends with the existing image.
 */
function fill(
  { data, width, height }: ImageData,
  bounds: Rect,
  color: RGBA
): void {
  assert.equal(getImageChannelCount({ data, width, height }), RGBA_CHANNELS)

  for (let y = bounds.y; y < bounds.y + bounds.height; y++) {
    for (let x = bounds.x; x < bounds.x + bounds.width; x++) {
      const offset = (y * width + x) * RGBA_CHANNELS
      const dst = data.slice(offset, offset + RGBA_CHANNELS)
      data.set(alphaBlend(dst, color), offset)
    }
  }
}

/**
 * Computes the color of a pixel by blending `src` on top of `dst`.
 *
 * @see https://en.wikipedia.org/wiki/Alpha_compositing#Alpha_blending
 */
function alphaBlend(dst: ArrayLike<number>, src: ArrayLike<number>): RGBA {
  const dstR = dst[0]
  const dstG = dst[1]
  const dstB = dst[2]
  const dstA = dst[3]
  const srcR = src[0]
  const srcG = src[1]
  const srcB = src[2]
  const srcA = src[3]
  return [
    (srcR * srcA) / 0xff + ((dstR * dstA) / 0xff) * (1 - srcA / 0xff),
    (srcG * srcA) / 0xff + ((dstG * dstA) / 0xff) * (1 - srcA / 0xff),
    (srcB * srcA) / 0xff + ((dstB * dstA) / 0xff) * (1 - srcA / 0xff),
    (srcA / 0xff + (1 - srcA / 0xff)) * 0xff,
  ]
}
