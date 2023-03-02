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

module.exports = name => {
  const camelCaseName = name.charAt(0).toLowerCase() + name.slice(1);;
  return `import { makeCreateComponent } from '@lightningjs/ui-components-test-utils';
import ${name} from '.';

const createComponent = makeCreateComponent(${name});

describe('${name}', () => {
  let ${camelCaseName}, testRenderer;

  beforeEach(() => {
    [${camelCaseName}, testRenderer] = createComponent();
  });

  afterEach(() => {
    ${camelCaseName} = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });
});
`;
};
