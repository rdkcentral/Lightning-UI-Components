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

import { makeCreateComponent } from '@lightningjs/ui-test-utils';
import Label from './index.js';

const createComponent = makeCreateComponent(Label);

describe('Label', () => {
  let label, testRenderer;

  beforeEach(() => {
    [label, testRenderer] = createComponent({
      spyOnMethods: ['_init', '_update']
    });
  });

  afterEach(() => {
    label = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('sets the announce string to the label text', () => {
    const title = 'Live';
    label.title = title;
    testRenderer.forceAllUpdates();
    expect(label.announce).toBe(title);
  });

  it('overrides the announce string', () => {
    const overrideString = 'Custom announce string';
    label.announce = overrideString;
    testRenderer.forceAllUpdates();
    expect(label.announce).toBe(overrideString);
  });

  it('changes title text and updates total width to match', done => {
    expect(label.w).toBe(0);
    label.title = 'Really really really really really long title';

    testRenderer.forceAllUpdates();
    expect(label.w).not.toEqual(60);
    expect(label._Text.renderWidth + 2 * label.style.paddingX).toBeGreaterThan(
      60
    );
    expect(label.w).toEqual(label._Text.renderWidth + 2 * label.style.paddingX);
    done();
  });

  it('should be undefined if there is no title element at all', () => {
    label.patch({ Text: undefined });
    label.title = 'text';
    testRenderer.forceAllUpdates();
    expect(label._Text).toBeUndefined();
  });
});
