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
import CardContentVertical from './CardContentVertical';

const createComponent = makeCreateComponent(CardContentVertical);

describe('CardContentVertical', () => {
  // eslint-disable-next-line no-unused-vars
  let cardContentVertical, testRenderer;

  beforeEach(() => {
    [cardContentVertical, testRenderer] = createComponent();
  });
  afterEach(() => {
    cardContentVertical = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('sizes Metadata', () => {
    cardContentVertical.shouldCollapse = true;
    testRenderer.forceAllUpdates();
    const w =
      cardContentVertical.style.expandedW -
      2 * cardContentVertical.style.paddingHorizontal;
    const h =
      cardContentVertical.style.expandedH -
      2 * cardContentVertical.style.paddingVertical -
      cardContentVertical.style.imageSize.h;
    expect(cardContentVertical._Metadata.w).toBe(w);
    expect(cardContentVertical._Metadata.h).toBe(h);
  });

  it('resizes based on collapse status', () => {
    cardContentVertical.mode = 'unfocused';

    cardContentVertical.shouldCollapse = false;
    cardContentVertical.collapseToMetadata = false;
    testRenderer.forceAllUpdates();
    expect(cardContentVertical.h).toBe(cardContentVertical.style.expandedH);

    cardContentVertical.shouldCollapse = true;
    cardContentVertical.collapseToMetadata = false;
    testRenderer.forceAllUpdates();
    expect(cardContentVertical.h).toBe(cardContentVertical.style.imageSize.h);

    cardContentVertical.collapseToMetadata = true;
    testRenderer.forceAllUpdates();
    expect(cardContentVertical.h).toBe(
      cardContentVertical.style.expandedH -
        cardContentVertical.style.imageSize.h
    );
  });
});
