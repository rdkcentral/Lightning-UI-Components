/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

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
const validDirs = [/* '@lightningjs/ui', */ '@lightningjs/ui-components'];

const [componentDir, componentName] = process.argv.slice(2);

if (!componentDir || !componentName) {
  throw new Error(`Missing component name or type.
Try again with something like: \`yarn createComponent @lightningjs/ui MyTemplate\`
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
