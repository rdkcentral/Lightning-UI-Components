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

import Card from './Card';
import { makeCreateComponent } from '@lightningjs/ui-test-utils';

const createCardComponent = makeCreateComponent(Card);

describe('Card', () => {
  let card, testRenderer;

  beforeEach(() => {
    [card, testRenderer] = createCardComponent();
  });

  afterEach(() => {
    card = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('sets the announce string to the card title', () => {
    const title = 'Title';
    card.title = title;
    testRenderer.forceAllUpdates();
    expect(card.announce).toBe(title);
  });

  it('overrides the announce string', () => {
    const overrideString = 'Custom announce string';
    card.announce = overrideString;
    testRenderer.forceAllUpdates();
    expect(card.announce).toBe(overrideString);
  });

  it('has the correct static props getter', () => {
    expect(card.constructor.properties).toMatchObject(['title']);
  });

  it('has the correct static tags getter', () => {
    expect(card.constructor.tags).toMatchObject(['Background', 'Title']);
  });

  it('should update Title', () => {
    card.title = 'Title';
    testRenderer.forceAllUpdates();
    expect(card._Title.content).toEqual('Title');
    expect(card._Title.style.textStyle).toMatchObject(
      card.style.titleTextStyle
    );
    expect(card._Title.style.textStyle.wordWrapWidth).toEqual(
      card._calculateTextWidth()
    );
    expect(card._Title.style.textStyle.textColor).toEqual(
      card.style.titleTextStyle.textColor
    );
  });

  it('should update Title when disabled', () => {
    card.title = 'Title';
    card.disabled = true;
    card._update();
    testRenderer.forceAllUpdates();
    expect(card._Title.content).toEqual('Title');
    expect(card._Title.style.textStyle.textColor).toEqual(
      card.style.titleTextStyle.textColor
    );
  });

  it('should calculate text width', () => {
    testRenderer.forceAllUpdates();
    expect(card._calculateTextWidth()).toEqual(
      card.w - card.style.paddingHorizontal * 2
    );
  });

  it('move Title', () => {
    testRenderer.forceAllUpdates();
    expect(card._Title.x).toEqual(card.style.paddingHorizontal);
    expect(card._Title.y).toEqual(card.style.paddingVertical);
  });
});
