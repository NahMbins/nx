import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { MyGeneratorGeneratorSchema } from './schema';

export async function myGeneratorGenerator(
  tree: Tree,
  options: MyGeneratorGeneratorSchema
) {
  const projectRoot = `libs/`;
  addProjectConfiguration(tree, options.modelName, {
    root: projectRoot,
    projectType: 'library',
    sourceRoot: `${projectRoot}/src`,
    targets: {},
  });
  
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot,options);
  await formatFiles(tree);
}

export default myGeneratorGenerator;
