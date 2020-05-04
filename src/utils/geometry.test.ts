import { flipRectVH, rectCorners } from './geometry'
import { randomInt } from '../../test/utils'

test('rectCorners of 1x1 rect', () => {
  const corners = rectCorners({
    x: randomInt(),
    y: randomInt(),
    width: 1,
    height: 1,
  })
  expect(corners[0]).toEqual(corners[1])
  expect(corners[0]).toEqual(corners[2])
  expect(corners[0]).toEqual(corners[3])
})

test('rectCorners', () => {
  const x = randomInt(-1000, 1000)
  const y = randomInt(-1000, 1000)
  const width = randomInt(1, 1000)
  const height = randomInt(1, 1000)
  const corners = rectCorners({ x, y, width, height })
  expect(corners).toEqual([
    { x, y },
    { x: x + width - 1, y },
    { x, y: y + height - 1 },
    { x: x + width - 1, y: y + height - 1 },
  ])
})

test('flipRectVH anchored top-left', () => {
  expect(
    flipRectVH(
      { x: 0, y: 0, width: 10, height: 15 },
      { x: 0, y: 0, width: 2, height: 3 }
    )
  ).toEqual({
    x: 8,
    y: 12,
    width: 2,
    height: 3,
  })
})

test('flipRectVH identity', () => {
  const outer = { x: 5, y: 10, width: 15, height: 20 }
  const inner = { x: 8, y: 13, width: 2, height: 3 }

  expect(flipRectVH(outer, flipRectVH(outer, inner))).toEqual(inner)
})
