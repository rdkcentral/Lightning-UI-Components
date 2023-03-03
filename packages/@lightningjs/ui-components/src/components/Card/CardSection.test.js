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
import CardSection from './CardSection';

const circle = pathToDataURI('./src/assets/images/circle.svg');
const createCardSectionComponent = makeCreateComponent(CardSection);

describe('CardSection', () => {
  let cardSection, testRenderer;

  beforeEach(() => {
    [cardSection, testRenderer] = createCardSectionComponent();
  });

  afterEach(() => {
    cardSection = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('has the correct static props getter', () => {
    expect(cardSection.constructor.properties).toMatchObject([
      'title',
      'iconWidth',
      'iconHeight',
      'iconSrc'
    ]);
  });

  it('has the correct static tags getter', () => {
    expect(cardSection.constructor.tags).toMatchObject([
      'Background',
      'Title',
      'Icon'
    ]);
  });

  it('should update Metadata', () => {
    expect(cardSection.icon).toBe(undefined);
    cardSection.icon = circle;
    testRenderer.forceAllUpdates();
    cardSection._update();
    expect(cardSection.icon).toEqual(circle);
    expect(cardSection._Icon.x).toEqual(
      cardSection.w -
        cardSection.iconWidth -
        cardSection.style.paddingHorizontal
    );
    expect(cardSection._Icon.y).toEqual(
      (cardSection._Title.style.textStyle.lineHeight - cardSection.iconWidth) /
        2 +
        cardSection.style.paddingVertical
    );
  });

  it('should calculate text width', () => {
    testRenderer.forceAllUpdates();
    cardSection.iconSrc = circle;
    expect(cardSection._calculateTextWidth()).toEqual(
      cardSection.w -
        cardSection.style.paddingHorizontal * 2 -
        cardSection.iconWidth
    );
    cardSection.iconSrc = undefined;
    expect(cardSection._calculateTextWidth()).toEqual(
      cardSection.w - cardSection.style.paddingHorizontal * 2
    );
  });
});
