/**
 * Copyright 2020 Comcast Cable Communications Management, LLC
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
import TestUtils from '../lightning-test-utils';
import CarouselRow from '.';

const createCarouselRow = TestUtils.makeCreateComponent(CarouselRow);

const baseItem = {
  type: lng.Component,
  w: 80,
  h: 80
};
const items = [
  { ...baseItem },
  { ...baseItem },
  { ...baseItem },
  { ...baseItem },
  { ...baseItem }
];

describe('Carousel Row', () => {
  let carouselRow, testRenderer;

  beforeEach(() => {
    [carouselRow, testRenderer] = createCarouselRow({
      h: 80,
      w: 400,
      upCount: 5,
      selectedIndex: 0,
      items
    });
  });
  afterEach(() => {
    carouselRow = null;
    testRenderer = null;
  });

  it('should render', () => {
    let tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('should carousel moving left', () => {
    const lastIndex = carouselRow.Items.children.length - 1;
    const prevLastChild = carouselRow.Items.childList.getAt(lastIndex);
    testRenderer.keyPress('Left');
    const newFirstChild = carouselRow.Items.childList.getAt(0);
    expect(newFirstChild).toEqual(prevLastChild);
  });

  it('should carousel moving right', () => {
    const lastIndex = carouselRow.Items.children.length - 1;
    const prevFirstChild = carouselRow.Items.childList.getAt(0);
    testRenderer.keyPress('Right');
    const newLastChild = carouselRow.Items.childList.getAt(lastIndex);
    expect(newLastChild).toEqual(prevFirstChild);
  });
});
