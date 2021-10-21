/**
 * Copyright 2021 Comcast Cable Communications Management, LLC
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

import TestUtils from '../../test/lightning-test-utils';
import Checkbox from '.';

const createCheckbox = TestUtils.makeCreateComponent(Checkbox);

describe('Checkbox', () => {
  let checkBox, testRenderer;

  beforeEach(() => {
    [checkBox, testRenderer] = createCheckbox({ checked: false });
  });
  afterEach(() => {
    checkBox = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('toggles checked state on enter', () => {
    expect(checkBox.checked).toEqual(false);
    testRenderer.keyPress('Enter');
    expect(checkBox.checked).toEqual(true);
    testRenderer.keyPress('Enter');
    expect(checkBox.checked).toEqual(false);
  });

  it('toggles check alpha on enter', () => {
    expect(checkBox._Check.alpha).toEqual(0);
    testRenderer.keyPress('Enter');
    expect(checkBox._Check.alpha).toEqual(1);
    testRenderer.keyPress('Enter');
    expect(checkBox._Check.alpha).toEqual(0);
  });
});
