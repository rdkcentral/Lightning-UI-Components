/*
 * If not stated otherwise in this file or this component's LICENSE file the
 * following copyright and licenses apply:
 *
 * Copyright 2020 RDK Management
 *
 * Licensed under the Apache License, Version 2.0 (the License);
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
 */

import lng from 'wpe-lightning';
import TestRenderer from '../lightning-test-renderer';
import Row from '.';

const rowFactory = (args = {}) => ({
  Component: {
    title: 'My Row',
    h: 80,
    items,
    ...args,
    type: Row
  }
});

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
const Component = {
  Component: {
    type: Row,
    title: 'My Row',
    h: 80,
    upCount: 5,
    signals: {
      selectedChange: 'selectedChangeMock'
    },
    items
  }
};

describe('Row', () => {
  let testRenderer, row;

  beforeEach(() => {
    testRenderer = TestRenderer.create(Component);
    row = testRenderer.getInstance();
    return row._whenEnabled;
  });

  it('should render', () => {
    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should set focus on first item', () => {
    expect(row.items[0].hasFocus()).toBe(true);
  });

  it('should set focus on next item on keyRight', () => {
    testRenderer.keyPress('Right');
    expect(row.items[1].hasFocus()).toBe(true);
  });

  describe('itemSpacing', () => {
    it('should initialize spacing between items', () => {
      const itemSpacing = 20;
      testRenderer = TestRenderer.create(rowFactory({ itemSpacing }));
      row = testRenderer.getInstance();
      let item = row.items[1];

      expect(item.x).toBe(row.items[0].w + itemSpacing);
    });

    it('should set spacing', () => {
      const itemSpacing = 100;
      const item = row.items[1];
      row.itemSpacing = itemSpacing;

      const x = item.transition('x').targetValue;
      expect(x).toBe(row.items[0].w + itemSpacing);
    });
  });

  describe('focusHeightChange', () => {
    it('should change the rows height when it has focus', () => {
      const ROW_HEIGHT = 80;
      row.focusHeightChange = 100;
      row._focus();

      expect(row.h).toBe(ROW_HEIGHT + 100);
      row._unfocus();
      expect(row.h).toBe(ROW_HEIGHT);
    });
  });

  describe('parentFocus', () => {
    it('should tell the items when row focus changes', () => {
      row._focus();
      expect(row.items[0].parentFocus).toBe(true);
      row._unfocus();
      expect(row.items[0].parentFocus).toBe(false);
    });
  });

  describe('provider', () => {
    it('should take a promise to get items', done => {
      row.provider = Promise.resolve({
        items: [{ ...baseItem }, { ...baseItem }]
      });

      setTimeout(() => {
        expect(row.items.length).toBe(2);
        done();
      }, 0);
    });

    it('should append items if appendItems is set', done => {
      const ITEMS_LENGTH = row.items.length;
      row.provider = Promise.resolve({
        appendItems: true,
        items: [{ ...baseItem }]
      });

      setTimeout(() => {
        expect(row.items.length).toBe(ITEMS_LENGTH + 1);
        done();
      }, 0);
    });
  });

  describe('appendItems', () => {
    it('adds items to the item list', () => {
      const ITEMS_LENGTH = row.items.length;
      row.appendItems([{ ...baseItem }, { ...baseItem }]);

      expect(row.items.length).toBe(ITEMS_LENGTH + 2);
    });

    it('items are added outside of the viewable bounds', () => {
      let item = { ...baseItem };
      row.appendItems([item]);
      expect(item.x).toBeGreaterThan(row.x + row.w);
    });
  });

  describe('wrapping', () => {
    it('should default to false and should not wrap', () => {
      row._selectedIndex = 4;
      testRenderer.keyPress('Right');
      expect(row._selectedIndex).toBe(4);
    });

    it('should focus last item after Left on first item', () => {
      row.wrapSelected = true;
      testRenderer.keyPress('Left');
      expect(row._selectedIndex).toBe(4);
    });

    it('should focus first item after Right on last item', () => {
      row.wrapSelected = true;
      row._selectedIndex = 4;
      testRenderer.keyPress('Right');
      expect(row._selectedIndex).toBe(0);
    });
  });

  describe('listeners', () => {
    it('should listen for $shiftRow', () => {
      row.scrollTransition = { duration: 0 };
      row.$shiftRow({ position: 50 });
      testRenderer.update();
      expect(row.x).toBe(50);
    });

    it('should listen for $itemChanged', () => {
      let item1X = row.items[1].x;
      row.scrollTransition = { duration: 0 };
      row.items[0].w += 200;
      row.$itemChanged();
      testRenderer.update();
      expect(row.items[1].transition('x').targetValue).toBe(item1X + 200);
    });
  });

  describe('scrolling', () => {
    it('should scroll long rows', () => {
      row.scrollTransition = { duration: 0 };
      row.items = [...items, ...items];
      expect(row.items[4].x).toBe(1920);
      row._selectedIndex = 4;
      testRenderer.keyPress('Right');
      testRenderer.keyPress('Right');
      testRenderer.keyPress('Right');
      testRenderer.keyPress('Right');
      testRenderer.update();
      expect(row._selectedIndex).toBe(8);
      expect(row.selected.transition('x').targetValue).toBe(640);
    });
  });
});
