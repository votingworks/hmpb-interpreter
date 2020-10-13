import { OptionParseError } from '..'
import findContests from '../../hmpb/findContests'
import { binarize } from '../../utils/binarize'
import { readImageData } from '../../utils/readImageData'
import { getDocument } from 'pdfjs-dist'
import { promises as fs } from 'fs'
import pdfToImages from '../../utils/pdfToImages'
import chalk from 'chalk'
import { Interpreter } from '../..'
import { electionSample } from '@votingworks/ballot-encoder'
import { mapScanToTemplate } from '../../mapping'

export const name = 'match-template'

export interface Options {
  templateImagePath: string
  scannedImagePaths: readonly string[]
}

export async function parseOptions(args: readonly string[]): Promise<Options> {
  if (args.length < 2) {
    throw new OptionParseError(
      `expected template and scan image path arguments, but got ${
        args.length
      }: ${args.join(' ')}`
    )
  }

  return {
    templateImagePath: args[0],
    scannedImagePaths: args.slice(1),
  }
}

export async function run(
  options: Options,
  stdin: typeof process.stdin,
  stdout: typeof process.stdout
): Promise<number> {
  const pdfMatch = options.templateImagePath.match(/(.+\.pdf)@(\d+)$/i)
  let templateImageData

  console.log(pdfMatch)
  if (pdfMatch) {
    const [, templatePdfPath, pageNumberToReadString] = pdfMatch
    const pageNumberToRead = Number(pageNumberToReadString)

    for await (const { page } of pdfToImages(
      await fs.readFile(templatePdfPath),
      { scale: 2, start: pageNumberToRead }
    )) {
      templateImageData = page
      break
    }

    if (typeof templateImageData === 'undefined') {
      stdout.write(
        chalk.red(
          `error: page ${pageNumberToReadString} could not be read from ${templatePdfPath}\n`
        )
      )
      return 1
    }
  } else {
    templateImageData = await readImageData(options.templateImagePath)
  }

  binarize(templateImageData)

  const threeColumnContests = [
    ...findContests(templateImageData, { columns: [true, true, true] }),
  ]
  const contests =
    threeColumnContests.length === 0
      ? [...findContests(templateImageData, { columns: [true, true] })]
      : threeColumnContests

  stdout.write(`found ${contests.length} contest(s)\n`)

  return 0
}
