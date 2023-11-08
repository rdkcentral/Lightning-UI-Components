﻿/**
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

import LineReaderSync from 'line-reader-sync';
import fs from 'fs';

/**
 * Finds all the elements and patterns and what style value they are using
 * @param {string} component - name of the actual component
 * @param {string} path - file path to get to the component
 * @param {string} name - name of the parent component in case the child component does not have a .mdx file
 * @returns {string} holds the url the user would navigate to when a component is clicked
 */
export function getStorybookLinks(component, path, name) {
  // get stories.js paths
  const originalPath = `../${path}/${component}.stories.js`;
  let modifiedPath = originalPath;
  if (component != name) {
    // this is incase there are multiple elements nested inside of one folder
    modifiedPath = `../../${path}/${name}.stories.js`;
    if (!fs.existsSync(modifiedPath)) {
      modifiedPath = originalPath; // this is in case there are multiple elements nested inside of one folder but not all of them have .mdx files
    }
  }
  if (!fs.existsSync(modifiedPath)) {
    // this is if even after all the checks a file is formatted weird or does not exist
    return;
  }
  const lrs = new LineReaderSync(modifiedPath);

  const urlStart = '../?path=/docs/'; // beginning url of component's storybook documentation page

  const urlEnd = '--docs'; // end of url for component's storybook documentation page
  while (true) {
    // start searching for the title in stories.js file
    const line = lrs.readline();
    if (line.includes('title:')) {
      const firstQuotation = line.indexOf("'");
      const firstDivide = line.indexOf('/');
      const firstSubstring = line.substring(firstQuotation + 1, firstDivide);

      // creates final url
      const url = urlStart.concat(
        firstSubstring.toLowerCase(),
        '-',
        component.toLowerCase(),
        urlEnd
      );

      return url;
    }
  }
}
