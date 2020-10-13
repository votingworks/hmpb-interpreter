import * as helpCommand from './commands/help'
import * as interpretCommand from './commands/interpret'
import * as layoutCommand from './commands/layout'
import * as matchTemplateCommand from './commands/match-template'

export interface Command<O> {
  name: string
  parseOptions(args: readonly string[]): Promise<O>
  run(
    options: O,
    stdin: typeof process.stdin,
    stdout: typeof process.stdout
  ): Promise<number>
}

export class OptionParseError extends Error {}

export interface GlobalOptions {
  help: boolean
  commandArgs: readonly string[]
}

export const commands = [
  helpCommand,
  interpretCommand,
  layoutCommand,
  matchTemplateCommand,
] as const
export type Options =
  | {
      command: typeof helpCommand.name
      options: helpCommand.Options
    }
  | {
      command: typeof interpretCommand.name
      options: interpretCommand.Options
    }
  | {
      command: typeof layoutCommand.name
      options: layoutCommand.Options
    }
  | {
      command: typeof matchTemplateCommand.name
      options: matchTemplateCommand.Options
    }

export function parseGlobalOptions(args: readonly string[]): GlobalOptions {
  let help = false
  let i = 0
  let done = false

  for (; i < args.length && !done; i += 1) {
    const arg = args[i]

    switch (arg) {
      case '-h':
      case '--help':
        help = true
        break

      default:
        if (!arg.startsWith('-')) {
          done = true
          i -= 1
        } else {
          throw new OptionParseError(`Unknown global option: ${arg}`)
        }
        break
    }
  }

  return {
    help,
    commandArgs: args.slice(i),
  }
}

export async function parseOptions(args: readonly string[]): Promise<Options> {
  const { help, commandArgs } = parseGlobalOptions(args)

  if (help) {
    return {
      command: helpCommand.name,
      options: await helpCommand.parseOptions(commandArgs),
    }
  }

  switch (commandArgs[0]) {
    case 'help':
      return {
        command: commandArgs[0],
        options: await helpCommand.parseOptions(args.slice(1)),
      }

    case 'interpret':
      return {
        command: commandArgs[0],
        options: await interpretCommand.parseOptions(args.slice(1)),
      }

    case 'layout':
      return {
        command: commandArgs[0],
        options: await layoutCommand.parseOptions(args.slice(1)),
      }

    case 'match-template':
      return {
        command: commandArgs[0],
        options: await matchTemplateCommand.parseOptions(args.slice(1)),
      }

    default:
      throw new OptionParseError(`Unknown command: ${args[0]}`)
  }
}

export default async function main(
  args: typeof process.argv,
  stdin: typeof process.stdin,
  stdout: typeof process.stdout,
  stderr: typeof process.stderr
): Promise<number> {
  try {
    const commandOptions = await parseOptions(args.slice(2))

    switch (commandOptions.command) {
      case 'help':
        return await helpCommand.run(commandOptions.options, stdin, stdout)

      case 'interpret':
        return await interpretCommand.run(commandOptions.options, stdin, stdout)

      case 'layout':
        return await layoutCommand.run(commandOptions.options, stdin, stdout)

      case 'match-template':
        return await matchTemplateCommand.run(
          commandOptions.options,
          stdin,
          stdout
        )
    }
  } catch (error) {
    if (error instanceof OptionParseError) {
      stderr.write(`error: ${error.message}\n`)
      helpCommand.printHelp(stderr)
      return -1
    } else {
      throw error
    }
  }
}
