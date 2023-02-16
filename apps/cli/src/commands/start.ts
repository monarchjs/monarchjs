import { CliCommand } from './types';

const start: CliCommand = {
  command: 'start',
  description: 'Start monarch dev server',
  usage: '$0 [args]',
  builder: (yargs) => {},
  handler: (argv) => {
    throw new Error('`start` not implemented');
  },
};

export { start };
