import { buildProject } from '@monarchjs/builder';

import { CliCommand } from './types';

const build: CliCommand = {
  command: 'build',
  description: 'Build project files',
  usage: '$0 [args]',
  builder: (yargs) => {},
  handler: (argv) => {
    buildProject();
  },
};

export { build };
