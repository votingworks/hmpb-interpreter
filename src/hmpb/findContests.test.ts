import * as choctaw from '../../test/fixtures/choctaw-county-2020-general-election'
import * as hamilton from '../../test/fixtures/election-5c6e578acf-state-of-hamilton-2020'
import { binarize } from '../utils/binarize'
import findContests from './findContests'

test('legal size', async () => {
  const imageData = await choctaw.filledInPage2.imageData()
  binarize(imageData)

  expect([...findContests(imageData, { columns: [true, true] })])
    .toMatchInlineSnapshot(`
    Array [
      Object {
        "bounds": Object {
          "height": 2440,
          "width": 1180,
          "x": 73,
          "y": 83,
        },
        "corners": Array [
          Object {
            "x": 75,
            "y": 88,
          },
          Object {
            "x": 1237,
            "y": 83,
          },
          Object {
            "x": 86,
            "y": 2522,
          },
          Object {
            "x": 1252,
            "y": 2512,
          },
        ],
      },
      Object {
        "bounds": Object {
          "height": 804,
          "width": 1167,
          "x": 1281,
          "y": 79,
        },
        "corners": Array [
          Object {
            "x": 1281,
            "y": 83,
          },
          Object {
            "x": 2442,
            "y": 80,
          },
          Object {
            "x": 1285,
            "y": 882,
          },
          Object {
            "x": 2446,
            "y": 878,
          },
        ],
      },
      Object {
        "bounds": Object {
          "height": 1138,
          "width": 1170,
          "x": 1285,
          "y": 921,
        },
        "corners": Array [
          Object {
            "x": 1286,
            "y": 926,
          },
          Object {
            "x": 2448,
            "y": 922,
          },
          Object {
            "x": 1292,
            "y": 2058,
          },
          Object {
            "x": 2454,
            "y": 2051,
          },
        ],
      },
    ]
  `)
})

test('connected contests', async () => {
  const imageData = await hamilton.filledInPage3.imageData()
  binarize(imageData)

  expect([...findContests(imageData, { columns: [true, true, true] })])
    .toMatchInlineSnapshot(`
    Array [
      Object {
        "bounds": Object {
          "height": 2531,
          "width": 733,
          "x": 135,
          "y": 139,
        },
        "corners": Array [
          Object {
            "x": 135,
            "y": 140,
          },
          Object {
            "x": 867,
            "y": 142,
          },
          Object {
            "x": 137,
            "y": 2668,
          },
          Object {
            "x": 866,
            "y": 2668,
          },
        ],
      },
      Object {
        "bounds": Object {
          "height": 1353,
          "width": 736,
          "x": 908,
          "y": 142,
        },
        "corners": Array [
          Object {
            "x": 910,
            "y": 142,
          },
          Object {
            "x": 1643,
            "y": 144,
          },
          Object {
            "x": 908,
            "y": 1491,
          },
          Object {
            "x": 1643,
            "y": 1494,
          },
        ],
      },
      Object {
        "bounds": Object {
          "height": 1626,
          "width": 735,
          "x": 1683,
          "y": 144,
        },
        "corners": Array [
          Object {
            "x": 1686,
            "y": 144,
          },
          Object {
            "x": 2416,
            "y": 145,
          },
          Object {
            "x": 1684,
            "y": 1767,
          },
          Object {
            "x": 2413,
            "y": 1766,
          },
        ],
      },
      Object {
        "bounds": Object {
          "height": 1073,
          "width": 732,
          "x": 1684,
          "y": 1808,
        },
        "corners": Array [
          Object {
            "x": 1685,
            "y": 1809,
          },
          Object {
            "x": 2413,
            "y": 1808,
          },
          Object {
            "x": 1685,
            "y": 2879,
          },
          Object {
            "x": 2413,
            "y": 2877,
          },
        ],
      },
    ]
  `)
})

test('legal size #2', async () => {
  const imageData = await choctaw.filledInPage1_01.imageData()
  binarize(imageData)

  expect([...findContests(imageData, { columns: [true, true, true] })])
    .toMatchInlineSnapshot(`
    Array [
      Object {
        "bounds": Object {
          "height": 2804,
          "width": 792,
          "x": 899,
          "y": 85,
        },
        "corners": Array [
          Object {
            "x": 928,
            "y": 86,
          },
          Object {
            "x": 1689,
            "y": 97,
          },
          Object {
            "x": 899,
            "y": 2882,
          },
          Object {
            "x": 1661,
            "y": 2887,
          },
        ],
      },
      Object {
        "bounds": Object {
          "height": 836,
          "width": 768,
          "x": 894,
          "y": 2926,
        },
        "corners": Array [
          Object {
            "x": 899,
            "y": 2926,
          },
          Object {
            "x": 1661,
            "y": 2932,
          },
          Object {
            "x": 894,
            "y": 3755,
          },
          Object {
            "x": 1656,
            "y": 3761,
          },
        ],
      },
      Object {
        "bounds": Object {
          "height": 692,
          "width": 776,
          "x": 1724,
          "y": 98,
        },
        "corners": Array [
          Object {
            "x": 1733,
            "y": 99,
          },
          Object {
            "x": 2499,
            "y": 110,
          },
          Object {
            "x": 1724,
            "y": 779,
          },
          Object {
            "x": 2488,
            "y": 788,
          },
        ],
      },
      Object {
        "bounds": Object {
          "height": 757,
          "width": 773,
          "x": 1715,
          "y": 823,
        },
        "corners": Array [
          Object {
            "x": 1723,
            "y": 824,
          },
          Object {
            "x": 2487,
            "y": 833,
          },
          Object {
            "x": 1715,
            "y": 1572,
          },
          Object {
            "x": 2479,
            "y": 1579,
          },
        ],
      },
      Object {
        "bounds": Object {
          "height": 480,
          "width": 770,
          "x": 1710,
          "y": 1616,
        },
        "corners": Array [
          Object {
            "x": 1715,
            "y": 1616,
          },
          Object {
            "x": 2478,
            "y": 1623,
          },
          Object {
            "x": 1711,
            "y": 2089,
          },
          Object {
            "x": 2474,
            "y": 2095,
          },
        ],
      },
      Object {
        "bounds": Object {
          "height": 481,
          "width": 768,
          "x": 1707,
          "y": 2132,
        },
        "corners": Array [
          Object {
            "x": 1710,
            "y": 2133,
          },
          Object {
            "x": 2473,
            "y": 2138,
          },
          Object {
            "x": 1707,
            "y": 2607,
          },
          Object {
            "x": 2471,
            "y": 2612,
          },
        ],
      },
    ]
  `)
})

test('hamilton', async () => {
  const imageData = await hamilton.filledInPage4.imageData()
  binarize(imageData)

  expect([...findContests(imageData, { columns: [true, true, true] })])
    .toMatchInlineSnapshot(`
    Array [
      Object {
        "bounds": Object {
          "height": 958,
          "width": 734,
          "x": 134,
          "y": 138,
        },
        "corners": Array [
          Object {
            "x": 135,
            "y": 139,
          },
          Object {
            "x": 865,
            "y": 140,
          },
          Object {
            "x": 136,
            "y": 1093,
          },
          Object {
            "x": 847,
            "y": 1095,
          },
        ],
      },
      Object {
        "bounds": Object {
          "height": 1472,
          "width": 733,
          "x": 134,
          "y": 1135,
        },
        "corners": Array [
          Object {
            "x": 135,
            "y": 1136,
          },
          Object {
            "x": 865,
            "y": 1136,
          },
          Object {
            "x": 135,
            "y": 2606,
          },
          Object {
            "x": 865,
            "y": 2605,
          },
        ],
      },
      Object {
        "bounds": Object {
          "height": 1738,
          "width": 736,
          "x": 907,
          "y": 140,
        },
        "corners": Array [
          Object {
            "x": 908,
            "y": 141,
          },
          Object {
            "x": 1641,
            "y": 141,
          },
          Object {
            "x": 909,
            "y": 1875,
          },
          Object {
            "x": 1640,
            "y": 1874,
          },
        ],
      },
      Object {
        "bounds": Object {
          "height": 1316,
          "width": 734,
          "x": 1682,
          "y": 141,
        },
        "corners": Array [
          Object {
            "x": 1684,
            "y": 142,
          },
          Object {
            "x": 2414,
            "y": 142,
          },
          Object {
            "x": 1683,
            "y": 1455,
          },
          Object {
            "x": 2413,
            "y": 1454,
          },
        ],
      },
    ]
  `)
})

test('regression: choctaw p1-02', async () => {
  const imageData = await choctaw.filledInPage1_02.imageData()
  binarize(imageData)

  expect([...findContests(imageData, { columns: [true, true, true] })])
    .toMatchInlineSnapshot(`
    Array [
      Object {
        "bounds": Object {
          "height": 2809,
          "width": 815,
          "x": 908,
          "y": 83,
        },
        "corners": Array [
          Object {
            "x": 961,
            "y": 85,
          },
          Object {
            "x": 1722,
            "y": 103,
          },
          Object {
            "x": 909,
            "y": 2883,
          },
          Object {
            "x": 1668,
            "y": 2891,
          },
        ],
      },
      Object {
        "bounds": Object {
          "height": 839,
          "width": 769,
          "x": 900,
          "y": 2927,
        },
        "corners": Array [
          Object {
            "x": 908,
            "y": 2927,
          },
          Object {
            "x": 1667,
            "y": 2935,
          },
          Object {
            "x": 901,
            "y": 3757,
          },
          Object {
            "x": 1660,
            "y": 3765,
          },
        ],
      },
      Object {
        "bounds": Object {
          "height": 699,
          "width": 782,
          "x": 1748,
          "y": 104,
        },
        "corners": Array [
          Object {
            "x": 1766,
            "y": 104,
          },
          Object {
            "x": 2529,
            "y": 122,
          },
          Object {
            "x": 1748,
            "y": 785,
          },
          Object {
            "x": 2510,
            "y": 802,
          },
        ],
      },
      Object {
        "bounds": Object {
          "height": 764,
          "width": 779,
          "x": 1731,
          "y": 829,
        },
        "corners": Array [
          Object {
            "x": 1747,
            "y": 830,
          },
          Object {
            "x": 2509,
            "y": 846,
          },
          Object {
            "x": 1732,
            "y": 1578,
          },
          Object {
            "x": 2493,
            "y": 1591,
          },
        ],
      },
      Object {
        "bounds": Object {
          "height": 484,
          "width": 772,
          "x": 1721,
          "y": 1621,
        },
        "corners": Array [
          Object {
            "x": 1730,
            "y": 1622,
          },
          Object {
            "x": 2492,
            "y": 1635,
          },
          Object {
            "x": 1721,
            "y": 2093,
          },
          Object {
            "x": 2484,
            "y": 2103,
          },
        ],
      },
    ]
  `)
})
