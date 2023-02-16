import { ProjectConfig } from './Project';

interface GeneratorModule {
  build: (projectConfig: ProjectConfig) => void;
}

export { GeneratorModule };
