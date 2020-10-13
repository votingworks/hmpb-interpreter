import { basename } from 'path'
import { OptionParseError } from '..'
import chalk from 'chalk'

export const name = 'help'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Options {
  // intentionally empty
}

export async function parseOptions(args: readonly string[]): Promise<Options> {
  if (args.length > 0) {
    throw new OptionParseError(`Unexpected argument to 'help': ${args[0]}`)
  }

  return {}
}

export function printHelp(out: typeof process.stdout): void {
  const $0 = basename(process.argv[1])
  out.write(`Usage: ${$0} interpret -e JSON IMG1 [IMG2 …]\n`)
  out.write(`\n`)
  out.write(chalk.bold(`Examples\n`))
  out.write(`\n`)
  out.write(chalk.gray(`# Interpret ballots based on a single template.\n`))
  out.write(`${$0} interpret -e election.json -t template.png ballot*.png\n`)
  out.write(`\n`)
  out.write(chalk.gray(`# Interpret test mode ballots.\n`))
  out.write(`${$0} interpret -e election.json -T -t template.png ballot*.png\n`)
  out.write(`\n`)
  out.write(chalk.gray(`# Interpret ballots to JSON.\n`))
  out.write(
    `${$0} interpret -e election.json -f json template*.png ballot*.png\n`
  )
  out.write(`\n`)
  out.write(chalk.gray(`# Specify image metadata (file:metdata-file).\n`))
  out.write(
    `${$0} interpret -e election.json template1.png:template1-metadata.json template2.png:template2-metdata.json ballot1.png:ballot1-metadata.json\n`
  )
  out.write(`\n`)
  out.write(chalk.gray(`# Set an explicit minimum mark score (0-1).\n`))
  out.write(
    `${$0} interpret -e election.json -m 0.5 template*.png ballot*.png\n`
  )
  out.write(`\n`)
  out.write(
    chalk.gray(
      `# Automatically process images as templates until all pages are found.\n`
    )
  )
  out.write(`${$0} interpret -e election.json image*.png\n`)
}

export async function run(
  options: Options,
  stdin: typeof process.stdin,
  stdout: typeof process.stdout
): Promise<number> {
  printHelp(stdout)
  return 0
}
