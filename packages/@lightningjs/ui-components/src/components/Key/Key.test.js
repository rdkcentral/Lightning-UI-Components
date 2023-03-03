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

import {
  makeCreateComponent,
  pathToDataURI
} from '@lightningjs/ui-components-test-utils';
import Key from './index.js';
import { jest } from '@jest/globals';

const createKey = makeCreateComponent(Key);
const icon = pathToDataURI('src/assets/images/ic_lightning_white_32.png');

describe('Key', () => {
  let key, testRenderer;

  beforeEach(async () => {
    [key, testRenderer] = createKey(
      { title: 'a' },
      { spyOnMethods: ['_update'] }
    );
    await key.__updateSpyPromise;
  });

  afterEach(() => {
    key = null;
    testRenderer = null;
  });

  it('should render', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('should patch in an icon if provided', () => {
    [key, testRenderer] = createKey({ icon: { src: icon } });
    expect(key._Icon).toBeUndefined();
  });

  it.skip('should adjust its width if given a size', async () => {
    key.size = 'md';
    await key.__updateSpyPromise;
    expect(key.w).toEqual(key.style.sizes.md);
  });

  it.skip('should make its width the default size given a size that does not exist', async () => {
    key.size = 'blue';
    await key.__updateSpyPromise;
    expect(key.w).toEqual(key.style.sizes.sm);
  });

  it('should set its char as its title', () => {
    key.title = 'B';
    expect(key.title).toEqual('B');
  });

  it('should fire $onSoftKey events on enter press', () => {
    key.fireAncestors = jest.fn();

    key._handleEnter();

    expect(key.fireAncestors).toHaveBeenCalledWith('$onSoftKey', { key: 'a' });

    key.title = 'shift';
    key.toggle = true;

    key._handleEnter();

    expect(key.fireAncestors).toHaveBeenCalledWith('$onSoftKey', {
      key: 'shift',
      toggle: true
    });
  });

  it('should fire $toggleKeyboard events on enter press if a toggle is present', () => {
    [key, testRenderer] = createKey({ toggle: 'lowercase' });
    key.fireAncestors = jest.fn();
    key._handleEnter();
    expect(key.fireAncestors).toHaveBeenCalledWith(
      '$toggleKeyboard',
      'lowercase'
    );
  });

  // announcer specific tests
  describe('announcer', () => {
    it('should set nato', () => {
      [key, testRenderer] = createKey({ title: 'a' });
      expect(key.announce).toEqual('a, alpha, button');
    });

    it('should add capital for capital characters', () => {
      [key, testRenderer] = createKey({ title: 'Z' });
      expect(key.announce).toEqual('Capital Z, zulu, button');
    });

    it('should work for numeric', () => {
      [key, testRenderer] = createKey({ title: '4' });
      expect(key.announce).toEqual('4, button');
    });

    it('overrides the announce string', () => {
      const overrideString = 'Custom announce string';
      key.announce = overrideString;
      testRenderer.forceAllUpdates();
      expect(key.announce).toBe(overrideString);
    });
  });
});
