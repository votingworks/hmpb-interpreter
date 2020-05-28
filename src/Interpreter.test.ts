import {
  blankPage1,
  blankPage2,
  filledInPage1,
  filledInPage2,
} from '../test/fixtures/election-4e31cb17d8f2f3bac574c6d2f6e22fb2528dcdf8-ballot-style-77-precinct-oaklawn-branch-library'
import election from '../test/fixtures/election-4e31cb17d8f2f3bac574c6d2f6e22fb2528dcdf8-ballot-style-77-precinct-oaklawn-branch-library/election'
import Interpreter from './Interpreter'
import { DetectQRCodeResult } from './types'

test('interpret two-column template', async () => {
  const interpreter = new Interpreter(election)
  const imageData = await blankPage1.imageData()
  const template = await interpreter.interpretTemplate(imageData)

  expect(template.ballotImage.metadata).toMatchInlineSnapshot(`
    Object {
      "ballotStyleId": "77",
      "isTestBallot": false,
      "pageCount": 2,
      "pageNumber": 1,
      "precinctId": "42",
    }
  `)

  expect(template.contests).toMatchInlineSnapshot(`
    Array [
      Object {
        "bounds": Object {
          "height": 599,
          "width": 380,
          "x": 447,
          "y": 45,
        },
        "corners": Array [
          Object {
            "x": 447,
            "y": 45,
          },
          Object {
            "x": 826,
            "y": 45,
          },
          Object {
            "x": 447,
            "y": 643,
          },
          Object {
            "x": 826,
            "y": 643,
          },
        ],
        "options": Array [
          Object {
            "bounds": Object {
              "height": 79,
              "width": 380,
              "x": 447,
              "y": 174,
            },
            "target": Object {
              "bounds": Object {
                "height": 22,
                "width": 32,
                "x": 470,
                "y": 176,
              },
              "inner": Object {
                "height": 18,
                "width": 28,
                "x": 472,
                "y": 178,
              },
            },
          },
          Object {
            "bounds": Object {
              "height": 78,
              "width": 380,
              "x": 447,
              "y": 253,
            },
            "target": Object {
              "bounds": Object {
                "height": 21,
                "width": 32,
                "x": 470,
                "y": 255,
              },
              "inner": Object {
                "height": 18,
                "width": 28,
                "x": 472,
                "y": 256,
              },
            },
          },
          Object {
            "bounds": Object {
              "height": 78,
              "width": 380,
              "x": 447,
              "y": 331,
            },
            "target": Object {
              "bounds": Object {
                "height": 21,
                "width": 32,
                "x": 470,
                "y": 333,
              },
              "inner": Object {
                "height": 18,
                "width": 28,
                "x": 472,
                "y": 334,
              },
            },
          },
          Object {
            "bounds": Object {
              "height": 78,
              "width": 380,
              "x": 447,
              "y": 409,
            },
            "target": Object {
              "bounds": Object {
                "height": 21,
                "width": 32,
                "x": 470,
                "y": 411,
              },
              "inner": Object {
                "height": 17,
                "width": 28,
                "x": 472,
                "y": 413,
              },
            },
          },
          Object {
            "bounds": Object {
              "height": 78,
              "width": 380,
              "x": 447,
              "y": 487,
            },
            "target": Object {
              "bounds": Object {
                "height": 21,
                "width": 32,
                "x": 470,
                "y": 489,
              },
              "inner": Object {
                "height": 17,
                "width": 28,
                "x": 472,
                "y": 491,
              },
            },
          },
          Object {
            "bounds": Object {
              "height": 77,
              "width": 380,
              "x": 447,
              "y": 565,
            },
            "target": Object {
              "bounds": Object {
                "height": 21,
                "width": 32,
                "x": 470,
                "y": 567,
              },
              "inner": Object {
                "height": 17,
                "width": 28,
                "x": 472,
                "y": 569,
              },
            },
          },
        ],
      },
      Object {
        "bounds": Object {
          "height": 320,
          "width": 380,
          "x": 447,
          "y": 667,
        },
        "corners": Array [
          Object {
            "x": 447,
            "y": 667,
          },
          Object {
            "x": 826,
            "y": 667,
          },
          Object {
            "x": 447,
            "y": 986,
          },
          Object {
            "x": 826,
            "y": 986,
          },
        ],
        "options": Array [
          Object {
            "bounds": Object {
              "height": 78,
              "width": 380,
              "x": 447,
              "y": 829,
            },
            "target": Object {
              "bounds": Object {
                "height": 21,
                "width": 32,
                "x": 470,
                "y": 831,
              },
              "inner": Object {
                "height": 17,
                "width": 28,
                "x": 472,
                "y": 833,
              },
            },
          },
          Object {
            "bounds": Object {
              "height": 78,
              "width": 380,
              "x": 447,
              "y": 907,
            },
            "target": Object {
              "bounds": Object {
                "height": 21,
                "width": 32,
                "x": 470,
                "y": 909,
              },
              "inner": Object {
                "height": 18,
                "width": 28,
                "x": 472,
                "y": 911,
              },
            },
          },
        ],
      },
      Object {
        "bounds": Object {
          "height": 318,
          "width": 380,
          "x": 447,
          "y": 1009,
        },
        "corners": Array [
          Object {
            "x": 447,
            "y": 1009,
          },
          Object {
            "x": 826,
            "y": 1009,
          },
          Object {
            "x": 447,
            "y": 1326,
          },
          Object {
            "x": 826,
            "y": 1326,
          },
        ],
        "options": Array [
          Object {
            "bounds": Object {
              "height": 78,
              "width": 380,
              "x": 447,
              "y": 1171,
            },
            "target": Object {
              "bounds": Object {
                "height": 21,
                "width": 32,
                "x": 470,
                "y": 1173,
              },
              "inner": Object {
                "height": 18,
                "width": 28,
                "x": 472,
                "y": 1175,
              },
            },
          },
          Object {
            "bounds": Object {
              "height": 76,
              "width": 380,
              "x": 447,
              "y": 1249,
            },
            "target": Object {
              "bounds": Object {
                "height": 22,
                "width": 32,
                "x": 470,
                "y": 1251,
              },
              "inner": Object {
                "height": 18,
                "width": 28,
                "x": 472,
                "y": 1253,
              },
            },
          },
        ],
      },
      Object {
        "bounds": Object {
          "height": 324,
          "width": 379,
          "x": 850,
          "y": 45,
        },
        "corners": Array [
          Object {
            "x": 850,
            "y": 45,
          },
          Object {
            "x": 1228,
            "y": 45,
          },
          Object {
            "x": 850,
            "y": 368,
          },
          Object {
            "x": 1228,
            "y": 368,
          },
        ],
        "options": Array [
          Object {
            "bounds": Object {
              "height": 78,
              "width": 379,
              "x": 850,
              "y": 240,
            },
            "target": Object {
              "bounds": Object {
                "height": 21,
                "width": 32,
                "x": 872,
                "y": 242,
              },
              "inner": Object {
                "height": 17,
                "width": 28,
                "x": 874,
                "y": 244,
              },
            },
          },
          Object {
            "bounds": Object {
              "height": 49,
              "width": 379,
              "x": 850,
              "y": 319,
            },
            "target": Object {
              "bounds": Object {
                "height": 21,
                "width": 32,
                "x": 872,
                "y": 320,
              },
              "inner": Object {
                "height": 18,
                "width": 28,
                "x": 874,
                "y": 322,
              },
            },
          },
        ],
      },
      Object {
        "bounds": Object {
          "height": 291,
          "width": 379,
          "x": 850,
          "y": 392,
        },
        "corners": Array [
          Object {
            "x": 850,
            "y": 392,
          },
          Object {
            "x": 1228,
            "y": 392,
          },
          Object {
            "x": 850,
            "y": 682,
          },
          Object {
            "x": 1228,
            "y": 682,
          },
        ],
        "options": Array [
          Object {
            "bounds": Object {
              "height": 78,
              "width": 379,
              "x": 850,
              "y": 554,
            },
            "target": Object {
              "bounds": Object {
                "height": 21,
                "width": 32,
                "x": 872,
                "y": 556,
              },
              "inner": Object {
                "height": 17,
                "width": 28,
                "x": 874,
                "y": 558,
              },
            },
          },
          Object {
            "bounds": Object {
              "height": 49,
              "width": 379,
              "x": 850,
              "y": 633,
            },
            "target": Object {
              "bounds": Object {
                "height": 21,
                "width": 32,
                "x": 872,
                "y": 634,
              },
              "inner": Object {
                "height": 18,
                "width": 28,
                "x": 874,
                "y": 636,
              },
            },
          },
        ],
      },
      Object {
        "bounds": Object {
          "height": 335,
          "width": 379,
          "x": 850,
          "y": 706,
        },
        "corners": Array [
          Object {
            "x": 850,
            "y": 706,
          },
          Object {
            "x": 1228,
            "y": 706,
          },
          Object {
            "x": 850,
            "y": 1040,
          },
          Object {
            "x": 1228,
            "y": 1040,
          },
        ],
        "options": Array [
          Object {
            "bounds": Object {
              "height": 79,
              "width": 379,
              "x": 850,
              "y": 835,
            },
            "target": Object {
              "bounds": Object {
                "height": 21,
                "width": 32,
                "x": 872,
                "y": 837,
              },
              "inner": Object {
                "height": 18,
                "width": 28,
                "x": 874,
                "y": 839,
              },
            },
          },
          Object {
            "bounds": Object {
              "height": 78,
              "width": 379,
              "x": 850,
              "y": 914,
            },
            "target": Object {
              "bounds": Object {
                "height": 21,
                "width": 32,
                "x": 872,
                "y": 916,
              },
              "inner": Object {
                "height": 18,
                "width": 28,
                "x": 874,
                "y": 917,
              },
            },
          },
          Object {
            "bounds": Object {
              "height": 47,
              "width": 379,
              "x": 850,
              "y": 993,
            },
            "target": Object {
              "bounds": Object {
                "height": 21,
                "width": 32,
                "x": 872,
                "y": 994,
              },
              "inner": Object {
                "height": 18,
                "width": 28,
                "x": 874,
                "y": 995,
              },
            },
          },
        ],
      },
    ]
  `)
})

test('missing templates', async () => {
  const interpreter = new Interpreter(election)
  const metadataPage1 = await blankPage1.metadata()
  const metadataPage2 = await blankPage2.metadata()

  expect(interpreter.hasMissingTemplates()).toBe(true)
  expect([...interpreter.getMissingTemplates()]).toEqual([
    {
      ballotStyleId: metadataPage1.ballotStyleId,
      isTestBallot: false,
      pageCount: -1,
      pageNumber: -1,
      precinctId: metadataPage1.precinctId,
    },
  ])

  await interpreter.addTemplate(await blankPage1.imageData())
  expect(interpreter.hasMissingTemplates()).toBe(true)
  expect([...interpreter.getMissingTemplates()]).toEqual([
    {
      ballotStyleId: metadataPage2.ballotStyleId,
      isTestBallot: false,
      pageCount: 2,
      pageNumber: 2,
      precinctId: metadataPage2.precinctId,
    },
  ])

  await interpreter.addTemplate(await blankPage2.imageData())
  expect(interpreter.hasMissingTemplates()).toBe(false)
  expect([...interpreter.getMissingTemplates()]).toEqual([])
})

test('interpret empty ballot', async () => {
  const interpreter = new Interpreter(election)

  await expect(
    interpreter.interpretBallot(await blankPage1.imageData())
  ).rejects.toThrow(
    'Refusing to interpret ballots before all templates are added.'
  )
  const p1 = await interpreter.addTemplate(await blankPage1.imageData())
  await interpreter.addTemplate(await blankPage2.imageData())

  const {
    matchedTemplate,
    metadata,
    ballot,
  } = await interpreter.interpretBallot(await blankPage1.imageData())
  expect(matchedTemplate === p1).toBe(true)
  expect(metadata.ballotStyleId).toEqual(p1.ballotImage.metadata.ballotStyleId)
  expect(ballot.votes).toEqual({})
})

test('interpret votes', async () => {
  const interpreter = new Interpreter(election)

  await interpreter.addTemplate(await blankPage1.imageData())
  await interpreter.addTemplate(await blankPage2.imageData())

  const { ballot, marks } = await interpreter.interpretBallot(
    await filledInPage1.imageData()
  )
  expect(ballot.votes).toMatchInlineSnapshot(`
    Object {
      "dallas-county-sheriff": Array [
        Object {
          "id": "chad-prda",
          "name": "Chad Prda",
          "partyId": "3",
        },
      ],
      "dallas-county-tax-assessor": Array [
        Object {
          "id": "john-ames",
          "incumbent": true,
          "name": "John Ames",
          "partyId": "2",
        },
      ],
      "texas-house-district-111": Array [
        Object {
          "id": "__write-in",
          "isWriteIn": true,
          "name": "Write-In",
        },
      ],
      "texas-sc-judge-place-6": Array [
        Object {
          "id": "jane-bland",
          "incumbent": true,
          "name": "Jane Bland",
          "partyId": "3",
        },
      ],
      "us-house-district-30": Array [
        Object {
          "id": "eddie-bernice-johnson",
          "incumbent": true,
          "name": "Eddie Bernice Johnson",
          "partyId": "2",
        },
      ],
      "us-senate": Array [
        Object {
          "id": "tim-smith",
          "name": "Tim Smith",
          "partyId": "6",
        },
      ],
    }
  `)

  expect(
    marks.map((mark) =>
      mark.type === 'yesno'
        ? { type: mark.type, option: mark.option, score: mark.score }
        : mark.type === 'candidate'
        ? { type: mark.type, option: mark.option.name, score: mark.score }
        : { type: mark.type, bounds: mark.bounds }
    )
  ).toMatchInlineSnapshot(`
    Array [
      Object {
        "option": "John Cornyn",
        "score": 0.005037783375314861,
        "type": "candidate",
      },
      Object {
        "option": "James Brumley",
        "score": 0,
        "type": "candidate",
      },
      Object {
        "option": "Cedric Jefferson",
        "score": 0,
        "type": "candidate",
      },
      Object {
        "option": "Tim Smith",
        "score": 0.8808290155440415,
        "type": "candidate",
      },
      Object {
        "option": "Arjun Srinivasan",
        "score": 0,
        "type": "candidate",
      },
      Object {
        "option": "Ricardo Turullols-Bonilla",
        "score": 0,
        "type": "candidate",
      },
      Object {
        "option": "Eddie Bernice Johnson",
        "score": 0.7227979274611399,
        "type": "candidate",
      },
      Object {
        "option": "Tre Pennie",
        "score": 0,
        "type": "candidate",
      },
      Object {
        "option": "Jane Bland",
        "score": 0.6120906801007556,
        "type": "candidate",
      },
      Object {
        "option": "Kathy Cheng",
        "score": 0,
        "type": "candidate",
      },
      Object {
        "option": "Yvonne Davis",
        "score": 0,
        "type": "candidate",
      },
      Object {
        "option": "Write-In",
        "score": 0.7025,
        "type": "candidate",
      },
      Object {
        "option": "John Ames",
        "score": 0.8737113402061856,
        "type": "candidate",
      },
      Object {
        "option": "Write-In",
        "score": 0,
        "type": "candidate",
      },
      Object {
        "option": "Marian Brown",
        "score": 0,
        "type": "candidate",
      },
      Object {
        "option": "Chad Prda",
        "score": 0.6313131313131313,
        "type": "candidate",
      },
      Object {
        "option": "Write-In",
        "score": 0,
        "type": "candidate",
      },
    ]
  `)
})

test('invalid marks', async () => {
  const interpreter = new Interpreter(election)

  await interpreter.addTemplate(
    await blankPage1.imageData(),
    await blankPage1.metadata()
  )
  await interpreter.addTemplate(
    await blankPage2.imageData(),
    await blankPage2.metadata()
  )

  const { ballot, marks } = await interpreter.interpretBallot(
    await filledInPage2.imageData()
  )
  expect(ballot.votes).toMatchInlineSnapshot(`
    Object {
      "dallas-county-commissioners-court-pct-3": Array [
        Object {
          "id": "andrew-jewell",
          "name": "Andrew Jewell",
          "partyId": "7",
        },
      ],
      "dallas-county-proposition-r": "no",
    }
  `)

  expect(marks).toMatchInlineSnapshot(`
    Array [
      Object {
        "bounds": Object {
          "height": 21,
          "width": 32,
          "x": 67,
          "y": 242,
        },
        "contest": Object {
          "allowWriteIns": true,
          "candidates": Array [
            Object {
              "id": "john-wiley-price",
              "incumbent": true,
              "name": "John Wiley Price",
              "partyId": "2",
            },
            Object {
              "id": "s-t-russell",
              "name": "S.T. Russell",
              "partyId": "3",
            },
            Object {
              "id": "andrew-jewell",
              "name": "Andrew Jewell",
              "partyId": "7",
            },
          ],
          "districtId": "12",
          "id": "dallas-county-commissioners-court-pct-3",
          "seats": 2,
          "section": "Dallas County",
          "title": "Member, Dallas County Commissioners Court, Precinct 3",
          "type": "candidate",
        },
        "option": Object {
          "id": "john-wiley-price",
          "incumbent": true,
          "name": "John Wiley Price",
          "partyId": "2",
        },
        "score": 0,
        "target": Object {
          "bounds": Object {
            "height": 21,
            "width": 32,
            "x": 67,
            "y": 242,
          },
          "inner": Object {
            "height": 17,
            "width": 28,
            "x": 69,
            "y": 244,
          },
        },
        "type": "candidate",
      },
      Object {
        "bounds": Object {
          "height": 21,
          "width": 32,
          "x": 67,
          "y": 320,
        },
        "contest": Object {
          "allowWriteIns": true,
          "candidates": Array [
            Object {
              "id": "john-wiley-price",
              "incumbent": true,
              "name": "John Wiley Price",
              "partyId": "2",
            },
            Object {
              "id": "s-t-russell",
              "name": "S.T. Russell",
              "partyId": "3",
            },
            Object {
              "id": "andrew-jewell",
              "name": "Andrew Jewell",
              "partyId": "7",
            },
          ],
          "districtId": "12",
          "id": "dallas-county-commissioners-court-pct-3",
          "seats": 2,
          "section": "Dallas County",
          "title": "Member, Dallas County Commissioners Court, Precinct 3",
          "type": "candidate",
        },
        "option": Object {
          "id": "s-t-russell",
          "name": "S.T. Russell",
          "partyId": "3",
        },
        "score": 0,
        "target": Object {
          "bounds": Object {
            "height": 21,
            "width": 32,
            "x": 67,
            "y": 320,
          },
          "inner": Object {
            "height": 18,
            "width": 28,
            "x": 69,
            "y": 322,
          },
        },
        "type": "candidate",
      },
      Object {
        "bounds": Object {
          "height": 21,
          "width": 32,
          "x": 67,
          "y": 398,
        },
        "contest": Object {
          "allowWriteIns": true,
          "candidates": Array [
            Object {
              "id": "john-wiley-price",
              "incumbent": true,
              "name": "John Wiley Price",
              "partyId": "2",
            },
            Object {
              "id": "s-t-russell",
              "name": "S.T. Russell",
              "partyId": "3",
            },
            Object {
              "id": "andrew-jewell",
              "name": "Andrew Jewell",
              "partyId": "7",
            },
          ],
          "districtId": "12",
          "id": "dallas-county-commissioners-court-pct-3",
          "seats": 2,
          "section": "Dallas County",
          "title": "Member, Dallas County Commissioners Court, Precinct 3",
          "type": "candidate",
        },
        "option": Object {
          "id": "andrew-jewell",
          "name": "Andrew Jewell",
          "partyId": "7",
        },
        "score": 0.72544080604534,
        "target": Object {
          "bounds": Object {
            "height": 21,
            "width": 32,
            "x": 67,
            "y": 398,
          },
          "inner": Object {
            "height": 18,
            "width": 28,
            "x": 69,
            "y": 400,
          },
        },
        "type": "candidate",
      },
      Object {
        "bounds": Object {
          "height": 22,
          "width": 32,
          "x": 67,
          "y": 476,
        },
        "contest": Object {
          "allowWriteIns": true,
          "candidates": Array [
            Object {
              "id": "john-wiley-price",
              "incumbent": true,
              "name": "John Wiley Price",
              "partyId": "2",
            },
            Object {
              "id": "s-t-russell",
              "name": "S.T. Russell",
              "partyId": "3",
            },
            Object {
              "id": "andrew-jewell",
              "name": "Andrew Jewell",
              "partyId": "7",
            },
          ],
          "districtId": "12",
          "id": "dallas-county-commissioners-court-pct-3",
          "seats": 2,
          "section": "Dallas County",
          "title": "Member, Dallas County Commissioners Court, Precinct 3",
          "type": "candidate",
        },
        "option": Object {
          "id": "__write-in",
          "isWriteIn": true,
          "name": "Write-In",
        },
        "score": 0,
        "target": Object {
          "bounds": Object {
            "height": 22,
            "width": 32,
            "x": 67,
            "y": 476,
          },
          "inner": Object {
            "height": 18,
            "width": 28,
            "x": 69,
            "y": 478,
          },
        },
        "type": "candidate",
      },
      Object {
        "bounds": Object {
          "height": 22,
          "width": 32,
          "x": 67,
          "y": 526,
        },
        "contest": Object {
          "allowWriteIns": true,
          "candidates": Array [
            Object {
              "id": "john-wiley-price",
              "incumbent": true,
              "name": "John Wiley Price",
              "partyId": "2",
            },
            Object {
              "id": "s-t-russell",
              "name": "S.T. Russell",
              "partyId": "3",
            },
            Object {
              "id": "andrew-jewell",
              "name": "Andrew Jewell",
              "partyId": "7",
            },
          ],
          "districtId": "12",
          "id": "dallas-county-commissioners-court-pct-3",
          "seats": 2,
          "section": "Dallas County",
          "title": "Member, Dallas County Commissioners Court, Precinct 3",
          "type": "candidate",
        },
        "option": Object {
          "id": "__write-in",
          "isWriteIn": true,
          "name": "Write-In",
        },
        "score": 0,
        "target": Object {
          "bounds": Object {
            "height": 22,
            "width": 32,
            "x": 67,
            "y": 526,
          },
          "inner": Object {
            "height": 18,
            "width": 28,
            "x": 69,
            "y": 528,
          },
        },
        "type": "candidate",
      },
      Object {
        "bounds": Object {
          "height": 21,
          "width": 32,
          "x": 67,
          "y": 869,
        },
        "contest": Object {
          "description": "Shall Robert Demergue be retained as Chief Justice of the Dallas County Court of Appeals?",
          "districtId": "12",
          "id": "dallas-county-retain-chief-justice",
          "section": "Dallas County",
          "title": "Retain Robert Demergue as Chief Justice?",
          "type": "yesno",
        },
        "option": "yes",
        "score": 0.14910025706940874,
        "target": Object {
          "bounds": Object {
            "height": 21,
            "width": 32,
            "x": 67,
            "y": 869,
          },
          "inner": Object {
            "height": 18,
            "width": 28,
            "x": 69,
            "y": 870,
          },
        },
        "type": "yesno",
      },
      Object {
        "bounds": Object {
          "height": 21,
          "width": 32,
          "x": 67,
          "y": 919,
        },
        "contest": Object {
          "description": "Shall Robert Demergue be retained as Chief Justice of the Dallas County Court of Appeals?",
          "districtId": "12",
          "id": "dallas-county-retain-chief-justice",
          "section": "Dallas County",
          "title": "Retain Robert Demergue as Chief Justice?",
          "type": "yesno",
        },
        "option": "no",
        "score": 0,
        "target": Object {
          "bounds": Object {
            "height": 21,
            "width": 32,
            "x": 67,
            "y": 919,
          },
          "inner": Object {
            "height": 18,
            "width": 28,
            "x": 69,
            "y": 920,
          },
        },
        "type": "yesno",
      },
      Object {
        "bounds": Object {
          "height": 22,
          "width": 32,
          "x": 470,
          "y": 315,
        },
        "contest": Object {
          "description": "Shall the Dallas County extend the Recycling Program countywide?",
          "districtId": "12",
          "id": "dallas-county-proposition-r",
          "section": "Dallas County",
          "title": "Proposition R: Countywide Recycling Program",
          "type": "yesno",
        },
        "option": "yes",
        "score": 0,
        "target": Object {
          "bounds": Object {
            "height": 22,
            "width": 32,
            "x": 470,
            "y": 315,
          },
          "inner": Object {
            "height": 18,
            "width": 28,
            "x": 472,
            "y": 317,
          },
        },
        "type": "yesno",
      },
      Object {
        "bounds": Object {
          "height": 22,
          "width": 32,
          "x": 470,
          "y": 365,
        },
        "contest": Object {
          "description": "Shall the Dallas County extend the Recycling Program countywide?",
          "districtId": "12",
          "id": "dallas-county-proposition-r",
          "section": "Dallas County",
          "title": "Proposition R: Countywide Recycling Program",
          "type": "yesno",
        },
        "option": "no",
        "score": 0.7964376590330788,
        "target": Object {
          "bounds": Object {
            "height": 22,
            "width": 32,
            "x": 470,
            "y": 365,
          },
          "inner": Object {
            "height": 18,
            "width": 28,
            "x": 472,
            "y": 367,
          },
        },
        "type": "yesno",
      },
      Object {
        "bounds": Object {
          "height": 21,
          "width": 32,
          "x": 470,
          "y": 569,
        },
        "contest": Object {
          "allowWriteIns": true,
          "candidates": Array [
            Object {
              "id": "harvey-eagle",
              "name": "Harvey Eagle",
              "partyId": "2",
            },
            Object {
              "id": "randall-rupp",
              "name": "Randall Rupp",
              "partyId": "2",
            },
            Object {
              "id": "carroll-shry",
              "name": "Carroll Shry",
              "partyId": "2",
            },
            Object {
              "id": "beverly-barker",
              "name": "Beverly Barker",
              "partyId": "3",
            },
            Object {
              "id": "donald-davis",
              "name": "Donald Davis",
              "partyId": "3",
            },
            Object {
              "id": "hugo-smith",
              "name": "Hugo Smith",
              "partyId": "3",
            },
          ],
          "districtId": "12",
          "id": "dallas-city-council",
          "seats": 3,
          "section": "City of Dallas",
          "title": "City Council",
          "type": "candidate",
        },
        "option": Object {
          "id": "harvey-eagle",
          "name": "Harvey Eagle",
          "partyId": "2",
        },
        "score": 0,
        "target": Object {
          "bounds": Object {
            "height": 21,
            "width": 32,
            "x": 470,
            "y": 569,
          },
          "inner": Object {
            "height": 18,
            "width": 28,
            "x": 472,
            "y": 570,
          },
        },
        "type": "candidate",
      },
      Object {
        "bounds": Object {
          "height": 21,
          "width": 32,
          "x": 470,
          "y": 647,
        },
        "contest": Object {
          "allowWriteIns": true,
          "candidates": Array [
            Object {
              "id": "harvey-eagle",
              "name": "Harvey Eagle",
              "partyId": "2",
            },
            Object {
              "id": "randall-rupp",
              "name": "Randall Rupp",
              "partyId": "2",
            },
            Object {
              "id": "carroll-shry",
              "name": "Carroll Shry",
              "partyId": "2",
            },
            Object {
              "id": "beverly-barker",
              "name": "Beverly Barker",
              "partyId": "3",
            },
            Object {
              "id": "donald-davis",
              "name": "Donald Davis",
              "partyId": "3",
            },
            Object {
              "id": "hugo-smith",
              "name": "Hugo Smith",
              "partyId": "3",
            },
          ],
          "districtId": "12",
          "id": "dallas-city-council",
          "seats": 3,
          "section": "City of Dallas",
          "title": "City Council",
          "type": "candidate",
        },
        "option": Object {
          "id": "randall-rupp",
          "name": "Randall Rupp",
          "partyId": "2",
        },
        "score": 0.13110539845758354,
        "target": Object {
          "bounds": Object {
            "height": 21,
            "width": 32,
            "x": 470,
            "y": 647,
          },
          "inner": Object {
            "height": 17,
            "width": 28,
            "x": 472,
            "y": 649,
          },
        },
        "type": "candidate",
      },
      Object {
        "bounds": Object {
          "height": 21,
          "width": 32,
          "x": 470,
          "y": 725,
        },
        "contest": Object {
          "allowWriteIns": true,
          "candidates": Array [
            Object {
              "id": "harvey-eagle",
              "name": "Harvey Eagle",
              "partyId": "2",
            },
            Object {
              "id": "randall-rupp",
              "name": "Randall Rupp",
              "partyId": "2",
            },
            Object {
              "id": "carroll-shry",
              "name": "Carroll Shry",
              "partyId": "2",
            },
            Object {
              "id": "beverly-barker",
              "name": "Beverly Barker",
              "partyId": "3",
            },
            Object {
              "id": "donald-davis",
              "name": "Donald Davis",
              "partyId": "3",
            },
            Object {
              "id": "hugo-smith",
              "name": "Hugo Smith",
              "partyId": "3",
            },
          ],
          "districtId": "12",
          "id": "dallas-city-council",
          "seats": 3,
          "section": "City of Dallas",
          "title": "City Council",
          "type": "candidate",
        },
        "option": Object {
          "id": "carroll-shry",
          "name": "Carroll Shry",
          "partyId": "2",
        },
        "score": 0,
        "target": Object {
          "bounds": Object {
            "height": 21,
            "width": 32,
            "x": 470,
            "y": 725,
          },
          "inner": Object {
            "height": 17,
            "width": 28,
            "x": 472,
            "y": 727,
          },
        },
        "type": "candidate",
      },
      Object {
        "bounds": Object {
          "height": 21,
          "width": 32,
          "x": 470,
          "y": 803,
        },
        "contest": Object {
          "allowWriteIns": true,
          "candidates": Array [
            Object {
              "id": "harvey-eagle",
              "name": "Harvey Eagle",
              "partyId": "2",
            },
            Object {
              "id": "randall-rupp",
              "name": "Randall Rupp",
              "partyId": "2",
            },
            Object {
              "id": "carroll-shry",
              "name": "Carroll Shry",
              "partyId": "2",
            },
            Object {
              "id": "beverly-barker",
              "name": "Beverly Barker",
              "partyId": "3",
            },
            Object {
              "id": "donald-davis",
              "name": "Donald Davis",
              "partyId": "3",
            },
            Object {
              "id": "hugo-smith",
              "name": "Hugo Smith",
              "partyId": "3",
            },
          ],
          "districtId": "12",
          "id": "dallas-city-council",
          "seats": 3,
          "section": "City of Dallas",
          "title": "City Council",
          "type": "candidate",
        },
        "option": Object {
          "id": "beverly-barker",
          "name": "Beverly Barker",
          "partyId": "3",
        },
        "score": 0,
        "target": Object {
          "bounds": Object {
            "height": 21,
            "width": 32,
            "x": 470,
            "y": 803,
          },
          "inner": Object {
            "height": 17,
            "width": 28,
            "x": 472,
            "y": 805,
          },
        },
        "type": "candidate",
      },
      Object {
        "bounds": Object {
          "height": 21,
          "width": 32,
          "x": 470,
          "y": 881,
        },
        "contest": Object {
          "allowWriteIns": true,
          "candidates": Array [
            Object {
              "id": "harvey-eagle",
              "name": "Harvey Eagle",
              "partyId": "2",
            },
            Object {
              "id": "randall-rupp",
              "name": "Randall Rupp",
              "partyId": "2",
            },
            Object {
              "id": "carroll-shry",
              "name": "Carroll Shry",
              "partyId": "2",
            },
            Object {
              "id": "beverly-barker",
              "name": "Beverly Barker",
              "partyId": "3",
            },
            Object {
              "id": "donald-davis",
              "name": "Donald Davis",
              "partyId": "3",
            },
            Object {
              "id": "hugo-smith",
              "name": "Hugo Smith",
              "partyId": "3",
            },
          ],
          "districtId": "12",
          "id": "dallas-city-council",
          "seats": 3,
          "section": "City of Dallas",
          "title": "City Council",
          "type": "candidate",
        },
        "option": Object {
          "id": "donald-davis",
          "name": "Donald Davis",
          "partyId": "3",
        },
        "score": 0.13212435233160622,
        "target": Object {
          "bounds": Object {
            "height": 21,
            "width": 32,
            "x": 470,
            "y": 881,
          },
          "inner": Object {
            "height": 17,
            "width": 28,
            "x": 472,
            "y": 883,
          },
        },
        "type": "candidate",
      },
      Object {
        "bounds": Object {
          "height": 21,
          "width": 32,
          "x": 470,
          "y": 959,
        },
        "contest": Object {
          "allowWriteIns": true,
          "candidates": Array [
            Object {
              "id": "harvey-eagle",
              "name": "Harvey Eagle",
              "partyId": "2",
            },
            Object {
              "id": "randall-rupp",
              "name": "Randall Rupp",
              "partyId": "2",
            },
            Object {
              "id": "carroll-shry",
              "name": "Carroll Shry",
              "partyId": "2",
            },
            Object {
              "id": "beverly-barker",
              "name": "Beverly Barker",
              "partyId": "3",
            },
            Object {
              "id": "donald-davis",
              "name": "Donald Davis",
              "partyId": "3",
            },
            Object {
              "id": "hugo-smith",
              "name": "Hugo Smith",
              "partyId": "3",
            },
          ],
          "districtId": "12",
          "id": "dallas-city-council",
          "seats": 3,
          "section": "City of Dallas",
          "title": "City Council",
          "type": "candidate",
        },
        "option": Object {
          "id": "hugo-smith",
          "name": "Hugo Smith",
          "partyId": "3",
        },
        "score": 0,
        "target": Object {
          "bounds": Object {
            "height": 21,
            "width": 32,
            "x": 470,
            "y": 959,
          },
          "inner": Object {
            "height": 18,
            "width": 28,
            "x": 472,
            "y": 961,
          },
        },
        "type": "candidate",
      },
      Object {
        "bounds": Object {
          "height": 22,
          "width": 32,
          "x": 470,
          "y": 1037,
        },
        "contest": Object {
          "allowWriteIns": true,
          "candidates": Array [
            Object {
              "id": "harvey-eagle",
              "name": "Harvey Eagle",
              "partyId": "2",
            },
            Object {
              "id": "randall-rupp",
              "name": "Randall Rupp",
              "partyId": "2",
            },
            Object {
              "id": "carroll-shry",
              "name": "Carroll Shry",
              "partyId": "2",
            },
            Object {
              "id": "beverly-barker",
              "name": "Beverly Barker",
              "partyId": "3",
            },
            Object {
              "id": "donald-davis",
              "name": "Donald Davis",
              "partyId": "3",
            },
            Object {
              "id": "hugo-smith",
              "name": "Hugo Smith",
              "partyId": "3",
            },
          ],
          "districtId": "12",
          "id": "dallas-city-council",
          "seats": 3,
          "section": "City of Dallas",
          "title": "City Council",
          "type": "candidate",
        },
        "option": Object {
          "id": "__write-in",
          "isWriteIn": true,
          "name": "Write-In",
        },
        "score": 0,
        "target": Object {
          "bounds": Object {
            "height": 22,
            "width": 32,
            "x": 470,
            "y": 1037,
          },
          "inner": Object {
            "height": 18,
            "width": 28,
            "x": 472,
            "y": 1039,
          },
        },
        "type": "candidate",
      },
      Object {
        "bounds": Object {
          "height": 21,
          "width": 32,
          "x": 470,
          "y": 1087,
        },
        "contest": Object {
          "allowWriteIns": true,
          "candidates": Array [
            Object {
              "id": "harvey-eagle",
              "name": "Harvey Eagle",
              "partyId": "2",
            },
            Object {
              "id": "randall-rupp",
              "name": "Randall Rupp",
              "partyId": "2",
            },
            Object {
              "id": "carroll-shry",
              "name": "Carroll Shry",
              "partyId": "2",
            },
            Object {
              "id": "beverly-barker",
              "name": "Beverly Barker",
              "partyId": "3",
            },
            Object {
              "id": "donald-davis",
              "name": "Donald Davis",
              "partyId": "3",
            },
            Object {
              "id": "hugo-smith",
              "name": "Hugo Smith",
              "partyId": "3",
            },
          ],
          "districtId": "12",
          "id": "dallas-city-council",
          "seats": 3,
          "section": "City of Dallas",
          "title": "City Council",
          "type": "candidate",
        },
        "option": Object {
          "id": "__write-in",
          "isWriteIn": true,
          "name": "Write-In",
        },
        "score": 0.09595959595959595,
        "target": Object {
          "bounds": Object {
            "height": 21,
            "width": 32,
            "x": 470,
            "y": 1087,
          },
          "inner": Object {
            "height": 18,
            "width": 28,
            "x": 472,
            "y": 1089,
          },
        },
        "type": "candidate",
      },
      Object {
        "bounds": Object {
          "height": 22,
          "width": 32,
          "x": 470,
          "y": 1137,
        },
        "contest": Object {
          "allowWriteIns": true,
          "candidates": Array [
            Object {
              "id": "harvey-eagle",
              "name": "Harvey Eagle",
              "partyId": "2",
            },
            Object {
              "id": "randall-rupp",
              "name": "Randall Rupp",
              "partyId": "2",
            },
            Object {
              "id": "carroll-shry",
              "name": "Carroll Shry",
              "partyId": "2",
            },
            Object {
              "id": "beverly-barker",
              "name": "Beverly Barker",
              "partyId": "3",
            },
            Object {
              "id": "donald-davis",
              "name": "Donald Davis",
              "partyId": "3",
            },
            Object {
              "id": "hugo-smith",
              "name": "Hugo Smith",
              "partyId": "3",
            },
          ],
          "districtId": "12",
          "id": "dallas-city-council",
          "seats": 3,
          "section": "City of Dallas",
          "title": "City Council",
          "type": "candidate",
        },
        "option": Object {
          "id": "__write-in",
          "isWriteIn": true,
          "name": "Write-In",
        },
        "score": 0.01015228426395939,
        "target": Object {
          "bounds": Object {
            "height": 22,
            "width": 32,
            "x": 470,
            "y": 1137,
          },
          "inner": Object {
            "height": 18,
            "width": 28,
            "x": 472,
            "y": 1139,
          },
        },
        "type": "candidate",
      },
      Object {
        "bounds": Object {
          "height": 22,
          "width": 32,
          "x": 872,
          "y": 176,
        },
        "contest": Object {
          "allowWriteIns": true,
          "candidates": Array [
            Object {
              "id": "orville-white",
              "name": "Orville White",
              "partyId": "2",
            },
            Object {
              "id": "gregory-seldon",
              "name": "Gregory Seldon",
              "partyId": "3",
            },
          ],
          "districtId": "12",
          "id": "dallas-mayor",
          "seats": 1,
          "section": "City of Dallas",
          "title": "Mayor",
          "type": "candidate",
        },
        "option": Object {
          "id": "orville-white",
          "name": "Orville White",
          "partyId": "2",
        },
        "score": 0,
        "target": Object {
          "bounds": Object {
            "height": 22,
            "width": 32,
            "x": 872,
            "y": 176,
          },
          "inner": Object {
            "height": 18,
            "width": 28,
            "x": 874,
            "y": 178,
          },
        },
        "type": "candidate",
      },
      Object {
        "bounds": Object {
          "height": 21,
          "width": 32,
          "x": 872,
          "y": 255,
        },
        "contest": Object {
          "allowWriteIns": true,
          "candidates": Array [
            Object {
              "id": "orville-white",
              "name": "Orville White",
              "partyId": "2",
            },
            Object {
              "id": "gregory-seldon",
              "name": "Gregory Seldon",
              "partyId": "3",
            },
          ],
          "districtId": "12",
          "id": "dallas-mayor",
          "seats": 1,
          "section": "City of Dallas",
          "title": "Mayor",
          "type": "candidate",
        },
        "option": Object {
          "id": "gregory-seldon",
          "name": "Gregory Seldon",
          "partyId": "3",
        },
        "score": 0,
        "target": Object {
          "bounds": Object {
            "height": 21,
            "width": 32,
            "x": 872,
            "y": 255,
          },
          "inner": Object {
            "height": 18,
            "width": 28,
            "x": 874,
            "y": 256,
          },
        },
        "type": "candidate",
      },
      Object {
        "bounds": Object {
          "height": 21,
          "width": 32,
          "x": 872,
          "y": 333,
        },
        "contest": Object {
          "allowWriteIns": true,
          "candidates": Array [
            Object {
              "id": "orville-white",
              "name": "Orville White",
              "partyId": "2",
            },
            Object {
              "id": "gregory-seldon",
              "name": "Gregory Seldon",
              "partyId": "3",
            },
          ],
          "districtId": "12",
          "id": "dallas-mayor",
          "seats": 1,
          "section": "City of Dallas",
          "title": "Mayor",
          "type": "candidate",
        },
        "option": Object {
          "id": "__write-in",
          "isWriteIn": true,
          "name": "Write-In",
        },
        "score": 0,
        "target": Object {
          "bounds": Object {
            "height": 21,
            "width": 32,
            "x": 872,
            "y": 333,
          },
          "inner": Object {
            "height": 17,
            "width": 28,
            "x": 874,
            "y": 335,
          },
        },
        "type": "candidate",
      },
    ]
  `)
})

test('custom QR code reader', async () => {
  const interpreter = new Interpreter({
    election,
    detectQRCode: async (): Promise<DetectQRCodeResult> => ({
      data: Buffer.from('https://vx.vote?t=t&pr=11&bs=22&p=3-4'),
    }),
  })
  const template = await interpreter.interpretTemplate(
    await blankPage1.imageData()
  )

  expect(template.ballotImage.metadata).toEqual({
    ballotStyleId: '22',
    precinctId: '11',
    isTestBallot: true,
    pageNumber: 3,
    pageCount: 4,
  })
})

test('upside-down ballot', async () => {
  const interpreter = new Interpreter(election)

  await interpreter.addTemplate(
    await blankPage1.imageData(),
    await blankPage1.metadata()
  )
  await interpreter.addTemplate(
    await blankPage2.imageData(),
    await blankPage2.metadata()
  )

  const { ballot, metadata } = await interpreter.interpretBallot(
    await filledInPage1.imageData()
  )
  expect(ballot.votes).toMatchInlineSnapshot(`
    Object {
      "dallas-county-sheriff": Array [
        Object {
          "id": "chad-prda",
          "name": "Chad Prda",
          "partyId": "3",
        },
      ],
      "dallas-county-tax-assessor": Array [
        Object {
          "id": "john-ames",
          "incumbent": true,
          "name": "John Ames",
          "partyId": "2",
        },
      ],
      "texas-house-district-111": Array [
        Object {
          "id": "__write-in",
          "isWriteIn": true,
          "name": "Write-In",
        },
      ],
      "texas-sc-judge-place-6": Array [
        Object {
          "id": "jane-bland",
          "incumbent": true,
          "name": "Jane Bland",
          "partyId": "3",
        },
      ],
      "us-house-district-30": Array [
        Object {
          "id": "eddie-bernice-johnson",
          "incumbent": true,
          "name": "Eddie Bernice Johnson",
          "partyId": "2",
        },
      ],
      "us-senate": Array [
        Object {
          "id": "tim-smith",
          "name": "Tim Smith",
          "partyId": "6",
        },
      ],
    }
  `)

  const {
    ballot: { votes: votesWithFlipped },
  } = await interpreter.interpretBallot(
    await filledInPage1.imageData({ flipped: true }),
    metadata,
    { flipped: true }
  )

  expect(votesWithFlipped).toEqual(ballot.votes)
})
