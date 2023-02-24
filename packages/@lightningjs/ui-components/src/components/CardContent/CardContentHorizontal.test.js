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
import CardContentHorizontal from './CardContentHorizontal';

const createComponent = makeCreateComponent(CardContentHorizontal);

describe('CardContentHorizontal', () => {
  // eslint-disable-next-line no-unused-vars
  let cardContentHorizontal, testRenderer;

  beforeEach(() => {
    [cardContentHorizontal, testRenderer] = createComponent();
  });
  afterEach(() => {
    cardContentHorizontal = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('sizes Metadata in standard layout', () => {
    cardContentHorizontal.shouldCollapse = false;
    testRenderer.forceAllUpdates();
    const w =
      cardContentHorizontal.style.expandedW -
      2 * cardContentHorizontal.style.paddingHorizontal -
      cardContentHorizontal.style.imageSize.w;
    const h =
      cardContentHorizontal.style.expandedH -
      2 * cardContentHorizontal.style.paddingVertical;
    expect(cardContentHorizontal._Metadata.w).toBe(w);
    expect(cardContentHorizontal._Metadata.h).toBe(h);
  });

  it('resizes based on collapse status', () => {
    cardContentHorizontal.mode = 'unfocused';

    cardContentHorizontal.shouldCollapse = false;
    cardContentHorizontal.collapseToMetadata = false;
    testRenderer.forceAllUpdates();
    expect(cardContentHorizontal.w).toBe(cardContentHorizontal.style.expandedW);

    cardContentHorizontal.shouldCollapse = true;
    cardContentHorizontal.collapseToMetadata = false;
    testRenderer.forceAllUpdates();
    expect(cardContentHorizontal.w).toBe(
      cardContentHorizontal.style.imageSize.w
    );

    cardContentHorizontal.collapseToMetadata = true;
    testRenderer.forceAllUpdates();
    expect(cardContentHorizontal.w).toBe(
      cardContentHorizontal.style.expandedW -
        cardContentHorizontal.style.imageSize.w
    );
  });
});
