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

import { makeCreateComponent } from '@lightningjs/ui-test-utils';
import CardContentVerticalSmall from './CardContentVerticalSmall';

const createComponent = makeCreateComponent(CardContentVerticalSmall);

describe('CardContentVerticalSmall', () => {
  // eslint-disable-next-line no-unused-vars
  let cardContentVerticalSmall, testRenderer;

  beforeEach(() => {
    [cardContentVerticalSmall, testRenderer] = createComponent();
  });
  afterEach(() => {
    cardContentVerticalSmall = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('does not use details or provider in metadata', () => {
    cardContentVerticalSmall.metadata = {
      title: 'Title',
      description: 'Description',
      details: 'Details',
      provider: ['image1', 'image2']
    };
    expect(cardContentVerticalSmall.metadata.details).toBeUndefined();
    expect(cardContentVerticalSmall.metadata.provider).toBeUndefined();
  });
});
