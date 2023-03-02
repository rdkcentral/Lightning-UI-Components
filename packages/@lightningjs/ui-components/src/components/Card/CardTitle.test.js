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
import CardTitle from './CardTitle';

const createCardTitleComponent = makeCreateComponent(CardTitle);

describe('CardTitle', () => {
  let cardTitle, testRenderer;

  beforeEach(() => {
    [cardTitle, testRenderer] = createCardTitleComponent();
  });

  afterEach(() => {
    cardTitle = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('sets the announce string to the card title', () => {
    const title = 'Title';
    const description = 'Description';
    const details = 'Details';
    cardTitle.title = title;
    cardTitle.description = description;
    cardTitle.details = details;
    testRenderer.forceAllUpdates();
    expect(cardTitle.announce).toEqual([title, description, details]);
  });

  it('overrides the announce string', () => {
    const overrideString = 'Custom announce string';
    cardTitle.announce = overrideString;
    testRenderer.forceAllUpdates();
    expect(cardTitle.announce).toBe(overrideString);
  });

  it('has the correct static props getter', () => {
    expect(cardTitle.constructor.properties).toMatchObject([
      'title',
      'description',
      'details'
    ]);
  });

  it('should update Description', () => {
    cardTitle.description = 'Description';
    testRenderer.forceAllUpdates();
    expect(cardTitle._Description.content).toEqual('Description');
    // textStyle has wordWrapWidth defined when the component generates rather than in the descriptionTextStyle
    // thus the expect method cannot pass with "toEqual" hence the switch to "toMatchObject"
    expect(cardTitle._Description.style.textStyle).toMatchObject(
      cardTitle.style.descriptionTextStyle
    );
    expect(cardTitle._Description.style.textStyle.wordWrapWidth).toEqual(
      cardTitle._calculateTextWidth()
    );
    expect(cardTitle._Description.style.textStyle.textColor).toEqual(
      cardTitle.style.descriptionTextStyle.textColor
    );
  });

  it('moves Description', () => {
    testRenderer.forceAllUpdates();
    expect(cardTitle._Description.x).toEqual(cardTitle.style.paddingHorizontal);
    expect(cardTitle._Description.y).toEqual(
      cardTitle.style.paddingVertical + cardTitle._Title.h
    );
  });

  it('should update Details', () => {
    cardTitle.details = 'Details';
    testRenderer.forceAllUpdates();
    expect(cardTitle._Details.content).toEqual('Details');
    expect(cardTitle._Details.style.textStyle).toEqual(
      expect.objectContaining(cardTitle.style.detailsTextStyle)
    );
    expect(cardTitle._Details.style.textStyle.textColor).toEqual(
      cardTitle.style.detailsTextStyle.textColor
    );
  });

  it('moves Details', () => {
    testRenderer.forceAllUpdates();
    expect(cardTitle._Details.x).toEqual(cardTitle.style.paddingHorizontal);
    expect(cardTitle._Details.y).toEqual(
      cardTitle.h - cardTitle.style.paddingVertical
    );
  });
});
