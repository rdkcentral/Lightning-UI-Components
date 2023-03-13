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

import { makeCreateComponent } from '@lightningjs/ui-components-test-utils';
import Checkbox from '.';
import { jest } from '@jest/globals';

const createCheckbox = makeCreateComponent(Checkbox);

describe('Checkbox', () => {
  let checkbox, testRenderer;

  beforeEach(() => {
    [checkbox, testRenderer] = createCheckbox({ checked: false });
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('sets the announce string to the checked status', () => {
    checkbox.checked = true;
    testRenderer.forceAllUpdates();
    expect(checkbox.announce).toBe('Checked');
    checkbox.checked = false;
    testRenderer.forceAllUpdates();
    expect(checkbox.announce).toBe('Unchecked');
  });

  it('overrides the announce string', () => {
    const overrideString = 'Custom announce string';
    checkbox.announce = overrideString;
    testRenderer.forceAllUpdates();
    expect(checkbox.announce).toBe(overrideString);
  });

  it('reannounces on checked status change', () => {
    checkbox.fireAncestors = jest.fn();
    checkbox.checked = true;
    testRenderer.forceAllUpdates();
    expect(checkbox.fireAncestors).toHaveBeenCalledWith('$announce', 'Checked');
  });

  it('should toggle the checkbox', () => {
    [checkbox, testRenderer] = createCheckbox({
      checked: false
    });

    checkbox.shouldSmooth = false;
    expect(checkbox.checked).toBe(false);
    expect(checkbox._Check.alpha).toBe(0);

    testRenderer.keyPress('Enter');
    checkbox._update();
    expect(checkbox.checked).toBe(true);
    expect(checkbox._Check.alpha).toBe(1);
  });

  it('should not toggle the checkbox when in disabled mode', () => {
    // NOTE: The checked status can be set before the mode is changed
    [checkbox, testRenderer] = createCheckbox({
      checked: false,
      mode: 'disabled'
    });
    expect(checkbox.checked).toBe(false);
    expect(checkbox._Check.alpha).toBe(0);
    testRenderer.keyPress('Enter');
    expect(checkbox.checked).toBe(false);
    expect(checkbox._Check.alpha).toBe(0);
  });
});
