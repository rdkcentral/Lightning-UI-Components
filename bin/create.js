#!/bin/node
/* global process */
/* eslint-disable no-console */

const fs = require('fs-extra');

const {
  componentTemplate,
  docsTemplate,
  storyTemplate,
  testTemplate,
  styleTemplate,
  typescriptDefinitionsTemplate,
  exportTemplate,
  exportTypeScriptDefinitionsTemplate,
} = require('./templates');

const compDir = './packages/';
const validDirs = [/* '@lightning/ui', */ '@lightning/ui-core'];

const [componentDir, componentName] = process.argv.slice(2);

if (!componentDir || !componentName) {
  throw new Error(`Missing component name or type.
Try again with something like: \`yarn createComponent @lightning/ui MyTemplate\`
  `);
}

if (!validDirs.includes(componentDir)) {
  throw new Error(`
Invalid package name "${componentDir}".
Use one of the following: ${validDirs.join(', ')}
  `);
}

const workingDir = `./${compDir}/${componentDir}/src/components/${componentName}`;

if (fs.existsSync(workingDir)) {
  const message = `${componentName} already exists at ${workingDir}`;
  throw new Error(message);
}


const componentContent = componentTemplate(componentName, componentDir);
const storyContent = storyTemplate(componentName, componentDir);
const mdxContent = docsTemplate(componentName, componentDir);
const testContent = testTemplate(componentName, componentDir);
const styleContent = styleTemplate(componentName, componentDir);
const typescriptDefinitionsContent = typescriptDefinitionsTemplate(componentName, componentDir);
const exportContent = exportTemplate(componentName, componentDir);
const exportTypescriptDefinitionsContent = exportTypeScriptDefinitionsTemplate(componentName, componentDir);

fs.mkdirp(workingDir).then(() => {
  fs.writeFile(`${workingDir}/${componentName}.js`, componentContent);
  fs.writeFile(`${workingDir}/${componentName}.stories.js`, storyContent);
  fs.writeFile(`${workingDir}/${componentName}.mdx`, mdxContent);
  fs.writeFile(`${workingDir}/${componentName}.test.js`, testContent);
  fs.writeFile(`${workingDir}/${componentName}.styles.js`, styleContent);
  fs.writeFile(`${workingDir}/${componentName}.d.ts`, typescriptDefinitionsContent);
  fs.writeFile(`${workingDir}/index.js`, exportContent);
  fs.writeFile(`${workingDir}/index.d.ts`, exportTypescriptDefinitionsContent);
}).catch(err => {
  console.error('component creation failed\n');
  throw new Error(err);
});
