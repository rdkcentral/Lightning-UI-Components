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
import withEditItems from './index.js';
import { Button } from '../../components/index.js';
import { jest } from '@jest/globals';
import { Row } from '../../components/index.js';

const createComponent = makeCreateComponent(
  withEditItems(Row),
  {
    w: 1920 - 160, // x offset from preview.js * 2
    itemSpacing: 24,
    editMode: false,
    alwaysScroll: false,
    neverScroll: true,
    items: Array.apply(null, { length: 6 }).map((_, i) => ({
      type: Button,
      title: `Button ${i + 1}`,
      w: 150
    }))
  },
  { focused: false },
  { spyOnMethods: ['swapItemArrayPos'] }
);

describe('withEditItems', () => {
  let withEditItemsRow, testRenderer;

  beforeEach(() => {
    [withEditItemsRow, testRenderer] = createComponent({
      spyOnMethods: ['_update']
    });
  });
  afterEach(() => {
    withEditItemsRow = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('re-arranges its items array after enter press and nav', () => {
    const spy = jest.spyOn(withEditItemsRow, '_swapItemArrayPos');
    withEditItemsRow.toggleEdit();
    withEditItemsRow.selectNext();
    expect(spy).toBeCalled();
  });
});
