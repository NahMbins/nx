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
  function toPascalCase(input: string): string {
    return input
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
  }

  function toSnakeCase(input: string): string {
    return input.replace(/-/g, '_').toUpperCase();
  }
  
  const projectRoot = `libs/${options.modelName}`;
  addProjectConfiguration(tree, options.modelName, {
    root: projectRoot,
    projectType: 'library',
    sourceRoot: `${projectRoot}/src`,
    targets: {},
  });
  
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot,
                  {...options,
                    pascalCaseModelName: toPascalCase(options.modelName), 
                    pascalCaseFeatursName:toPascalCase(options.featuredName),
                    snakeCase:toSnakeCase(options.featuredName)});
  await formatFiles(tree);
}

export default myGeneratorGenerator;
