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
import Radio from '.';
import { jest } from '@jest/globals';

const createRadio = makeCreateComponent(Radio);

describe('Radio', () => {
  let radio, testRenderer;

  beforeEach(() => {
    [radio, testRenderer] = createRadio();
  });

  afterEach(() => {
    radio = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('sets the announce string to the checked status', () => {
    radio.checked = true;
    testRenderer.forceAllUpdates();
    expect(radio.announce).toBe('Checked');
    radio.checked = false;
    testRenderer.forceAllUpdates();
    expect(radio.announce).toBe('Unchecked');
  });

  it('overrides the announce string', () => {
    const overrideString = 'Custom announce string';
    radio.announce = overrideString;
    testRenderer.forceAllUpdates();
    expect(radio.announce).toBe(overrideString);
  });

  it('reannounces on checked status change', () => {
    radio.fireAncestors = jest.fn();
    radio.checked = true;
    testRenderer.forceAllUpdates();
    expect(radio.fireAncestors).toHaveBeenCalledWith('$announce', 'Checked');
  });

  it('toggles checked state on enter', () => {
    [radio, testRenderer] = createRadio({ checked: false });
    expect(radio.checked).toEqual(false);
    testRenderer.keyPress('Enter');
    expect(radio.checked).toEqual(true);
    testRenderer.keyPress('Enter');
    expect(radio.checked).toEqual(false);
  });

  it('should not toggle the radio when in disabled mode', () => {
    // NOTE: The checked status can be set before the mode is changed
    [radio, testRenderer] = createRadio({ checked: false, mode: 'disabled' });
    expect(radio.checked).toBe(false);
    expect(radio._Knob.alpha).toBe(0);
    testRenderer.forceAllUpdates();
    testRenderer.keyPress('Enter');
    expect(radio.checked).toBe(false);
    expect(radio._Knob.alpha).toBe(0);
  });
});
