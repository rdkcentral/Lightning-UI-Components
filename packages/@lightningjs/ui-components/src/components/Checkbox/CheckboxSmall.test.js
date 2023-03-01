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

import { makeCreateComponent } from '@lightningjs/ui-components-test-utils';
import CheckboxSmall from './CheckboxSmall.js';

const createCheckboxSmall = makeCreateComponent(CheckboxSmall);

describe('CheckboxSmall', () => {
  let checkboxSmall, testRenderer;

  beforeEach(() => {
    [checkboxSmall, testRenderer] = createCheckboxSmall({ checked: false });
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('renders the correct height', () => {
    expect(checkboxSmall.h).toBe(checkboxSmall.style.h);
  });

  it('renders the correct weight', () => {
    expect(checkboxSmall.w).toBe(checkboxSmall.style.w);
  });
});
