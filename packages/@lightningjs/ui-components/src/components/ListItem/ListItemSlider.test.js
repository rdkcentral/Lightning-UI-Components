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
import ListItemSlider from './ListItemSlider';

const createComponent = makeCreateComponent(ListItemSlider);

describe('ListItemSlider', () => {
  let listItemSlider, testRenderer;

  beforeEach(() => {
    [listItemSlider, testRenderer] = createComponent({
      title: 'ListItemSlider',
      value: 50
    });
  });

  afterEach(() => {
    listItemSlider = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('should render Value', () => {
    listItemSlider.value = 50;
    testRenderer.forceAllUpdates();
    expect(listItemSlider._Value).toBeDefined();
  });

  it('should update Value', () => {
    listItemSlider.value = 50;
    testRenderer.forceAllUpdates();
    expect(listItemSlider._Value.content).toEqual('50');
  });

  it('should return default onLeft function', () => {
    listItemSlider.onLeft = () => ({});
    listItemSlider.value = 10;
    testRenderer.forceAllUpdates();
    listItemSlider._handleLeft();
    expect(listItemSlider._Slider.value).toEqual(10);
  });

  it('should return default onRight function', () => {
    listItemSlider.onRight = () => ({});
    listItemSlider.value = 10;
    testRenderer.forceAllUpdates();
    listItemSlider._handleRight();
    expect(listItemSlider._Slider.value).toEqual(10);
  });
  it('should reduce value when handleLeft is clicked', () => {
    listItemSlider.value = 10;
    testRenderer.forceAllUpdates();
    listItemSlider._handleLeft();
    expect(listItemSlider._Slider.value).toEqual(9);
  });
  it('should increase value when handleRight is clicked', () => {
    listItemSlider.value = 10;
    testRenderer.forceAllUpdates();
    listItemSlider._handleRight();
    expect(listItemSlider._Slider.value).toEqual(11);
  });

  it('should not exceed slider max value when handleRight is clicked', () => {
    listItemSlider.value = 10;
    listItemSlider._Slider.max = 10;
    testRenderer.forceAllUpdates();
    listItemSlider._handleRight();
    expect(listItemSlider._Slider.value).toEqual(10);
  });

  it('should not exist Value if value not exist', () => {
    listItemSlider.value = null;
    testRenderer.forceAllUpdates();
    expect(listItemSlider._Value).toBeUndefined();
  });

  it('should do nothing when handleLeft is clicked in disabledMode', () => {
    listItemSlider.value = 1;
    listItemSlider.mode = 'disabled';
    testRenderer.forceAllUpdates();
    listItemSlider._handleLeft();
    expect(listItemSlider._Slider.value).toEqual(1);
  });

  it('should do nothing when handleRight is clicked in disabledMode', () => {
    listItemSlider.value = 1;
    listItemSlider.mode = 'disabled';
    testRenderer.forceAllUpdates();
    listItemSlider._handleRight();
    expect(listItemSlider.value).toEqual(1);
  });

  it('slider should be visible if in focused mode', () => {
    listItemSlider.shouldCollapse = false;
    listItemSlider.mode = 'focused';
    expect(listItemSlider._Slider.visible).toEqual(true);
  });

  it('slider should NOT be visible if in unfocused mode', () => {
    listItemSlider.shouldCollapse = true;
    listItemSlider.mode = 'unfocused';
    testRenderer.forceAllUpdates();
    expect(listItemSlider._Slider.visible).toEqual(false);
  });

  it('slider should NOT be visible if in disabled mode', () => {
    listItemSlider.shouldCollapse = true;
    listItemSlider.mode = 'disabled';
    testRenderer.forceAllUpdates();
    expect(listItemSlider._Slider.visible).toEqual(false);
  });

  describe('announcer', () => {
    it('should return true announce string, when announce property is true', () => {
      listItemSlider.title = 'Title';
      listItemSlider.value = 50;
      listItemSlider._announce = true;
      expect(listItemSlider.announce).toEqual(true);
    });

    it('should use the title and value as the default announce string', () => {
      listItemSlider.title = 'Title';
      listItemSlider.value = 50;
      listItemSlider._announce = false;
      expect(listItemSlider.announce).toEqual('Title50, List Item Slider');
    });
  });
});
