import yargs from 'yargs';

import { commands } from './commands';

yargs.scriptName('monarch').usage('$0 <cmd> [args]');

for (const command of commands) {
  yargs.command(
    command.command,
    command.description,
    command.builder,
    command.handler,
  );
}

yargs.help().argv;
