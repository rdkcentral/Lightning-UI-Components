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
  pathToDataURI,
  makeCreateComponent
} from '@lightningjs/ui-components-test-utils';
import Icon from '../Icon';
import Provider from '.';

const iconSquare = pathToDataURI(
  'src/assets/images/Xfinity-Provider-Logo-Square.png'
);
const iconRect = pathToDataURI(
  'src/assets/images/Xfinity-Provider-Logo-2x1.png'
);

const properties = {
  visibleCount: 3,
  providers: Array(4).fill(iconSquare)
};

const createComponent = makeCreateComponent(Provider, properties);

describe('Provider', () => {
  let provider, testRenderer;

  beforeEach(() => {
    [provider, testRenderer] = createComponent();
  });
  afterEach(() => {
    provider = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('sets the announce string to the appropriate image alt text and hidden amount', () => {
    const announce = 'test';
    provider.visibleCount = 5;
    provider.providers = [{ icon: 'test.png', announce }];
    testRenderer.forceAllUpdates();
    expect(provider.announce).toEqual(['test']);
    provider.providers = Array(10).fill({
      icon: 'test.png',
      announce: 'test'
    });
    testRenderer.forceAllUpdates();
    const providerAnnounce = Array(5).fill(announce);
    providerAnnounce.push('+5');
    expect(provider.announce).toEqual(providerAnnounce);
  });

  it('overrides the announce string', () => {
    const overrideString = 'Custom announce string';
    provider.announce = overrideString;
    testRenderer.forceAllUpdates();
    expect(provider.announce).toBe(overrideString);
  });

  it('displays the correct number of providers as Icons', () => {
    expect(provider._Row.items.length).toBe(4);
    expect(provider._Row.items[0]).toBeInstanceOf(Icon);
    expect(provider._Row.items[1]).toBeInstanceOf(Icon);
    expect(provider._Row.items[2]).toBeInstanceOf(Icon);
    expect(provider._Row.items[3]).not.toBeInstanceOf(Icon);
  });

  it('enforces a minimum and a maximum visible count', () => {
    provider.visibleCount = -5;
    expect(provider.visibleCount).toBe(1);
    provider.visibleCount = 20;
    expect(provider.visibleCount).toBe(provider.providers.length);
  });

  it('displays the correct counter', () => {
    [provider, testRenderer] = createComponent({
      providers: Array(20).fill(iconSquare)
    });
    expect(provider._Row.items[3]).not.toBeInstanceOf(Icon);
    expect(provider._Row.items[3].tag('Text').content).toBe('+17');
  });

  it('disables radius when flag is enabled', () => {
    [provider, testRenderer] = createComponent({
      providers: Array(20).fill(iconSquare)
    });
    provider.disableRadius = true;
    expect(provider._Row.items[2].radius).toEqual(0);
  });

  it('displays the correct counter with custom counterText', () => {
    [provider, testRenderer] = createComponent({
      providers: Array(20).fill(iconSquare),
      counterText: '...'
    });
    expect(provider._Row.items[3].tag('Text').content).toBe('...');
  });

  it('scales a non-square icon to the correct dimensions', () => {
    [provider, testRenderer] = createComponent({
      providers: [
        iconSquare,
        {
          type: Icon,
          w: 128,
          h: 64,
          icon: iconRect
        },
        ...Array.apply(null, { length: 18 }).map(() => iconSquare)
      ]
    });
    // Second provider should maintain its 2:1 ratio and have a height of 40 (itemSize from the styles file)
    const { w, h } = provider._Row.items[1];
    const ratio = 2 / 1;
    expect({ w, h }).toMatchObject({
      w: provider.style.itemSize * ratio,
      h: provider.style.itemSize
    });
  });
});
