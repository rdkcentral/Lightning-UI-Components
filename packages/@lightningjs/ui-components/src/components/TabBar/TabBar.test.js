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

import lng from '@lightningjs/core';
import { makeCreateComponent } from '@lightningjs/ui-components-test-utils';
import Row from '../Row';
import Tile from '../Tile';
import { jest } from '@jest/globals';
import TabBar from '.';
import Tab from './Tab';

const tileComp = {
  type: Tile,
  w: 410,
  h: 230
};
const tiles = [tileComp, tileComp];

const tabs = [
  {
    type: Tab,
    title: 'Tab 1',
    tabContent: {
      type: Row,
      items: tiles
    }
  },
  {
    type: Tab,
    title: 'Tab 2',
    tabContent: {
      type: Row,
      items: tiles
    }
  }
];

const createComponent = makeCreateComponent(TabBar);

describe('TabBar', () => {
  let tabBar, testRenderer;

  beforeEach(async () => {
    [tabBar, testRenderer] = createComponent(
      { tabs },
      { spyOnMethods: ['_update'] }
    );
    await tabBar.__updateSpyPromise;
    tabBar.mode = 'focused';
    await tabBar.__updateSpyPromise;
    testRenderer.update();
  });

  afterEach(() => {
    tabBar = null;
    testRenderer = null;
  });

  it('renders', async () => {
    const box = {
      rect: true,
      w: 410,
      h: 230
    };
    const simpleTabs = [
      {
        type: Tab,
        title: 'Tab 1'
      },
      {
        type: Tab,
        title: 'Tab 2',
        tabContent: {
          type: Row,
          items: [box, box]
        }
      }
    ];

    [tabBar, testRenderer] = createComponent(
      { tabs: simpleTabs },
      { spyOnMethods: ['_update'] }
    );

    await tabBar.__updateSpyPromise;

    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('should focus on the selected tab', () => {
    expect(tabBar._Tabs.items[0].mode).toBe('focused');
    expect(tabBar._Tabs.items[1].mode).toBe('unfocused');
  });

  it('should display which tab is selected when focused on the tab content', async () => {
    testRenderer.keyPress('Down');

    expect(tabBar._Tabs.items[0].mode).toBe('selected');
    expect(tabBar._Tabs.items[1].mode).toBe('unfocused');
  });

  it('should transfer focus back to the tabs on up', async () => {
    testRenderer.keyPress('Down');

    expect(tabBar._Tabs.items[0].mode).toBe('selected');
    expect(tabBar._Tabs.items[1].mode).toBe('unfocused');

    testRenderer.keyPress('Up');

    expect(tabBar._Tabs.items[0].mode).toBe('focused');
    expect(tabBar._Tabs.items[1].mode).toBe('unfocused');
  });

  it('should emit a $tabChanged signal when the selected tab changes', () => {
    const prevSelected = tabBar.tag('Tabs').selected;
    jest.spyOn(tabBar, 'fireAncestors');
    expect(tabBar.fireAncestors).not.toHaveBeenCalled();

    tabBar.tag('Tabs').selectNext();
    const selected = tabBar.tag('Tabs').selected;

    expect(tabBar.fireAncestors).toHaveBeenCalledWith(
      '$tabChanged',
      selected,
      prevSelected,
      tabBar
    );
  });

  it('should propogate key events', () => {
    const onUp = jest.fn();
    const onDown = jest.fn();
    class Wrapper extends lng.Component {
      static _template() {
        return {
          TabBar: {
            type: TabBar,
            tabs
          }
        };
      }
      _handleUp() {
        onUp();
      }
      _handleDown() {
        onDown();
      }
      _getFocused() {
        return this.tag('TabBar');
      }
    }
    const [, testRenderer] = makeCreateComponent(Wrapper)();

    expect(onUp).not.toHaveBeenCalled();
    expect(onDown).not.toHaveBeenCalled();

    testRenderer.keyPress('Down');
    expect(onUp).not.toHaveBeenCalled();
    expect(onDown).toHaveBeenCalled();

    testRenderer.keyPress('Up');
    expect(onUp).toHaveBeenCalled();
  });

  it('should update the TabBar height if the Tabs height changes', async () => {
    [tabBar, testRenderer] = createComponent(
      { tabs },
      { focused: true, spyOnMethods: ['$itemChanged'] }
    );
    testRenderer.forceAllUpdates();
    await tabBar._$itemChangedSpyPromise;

    const initialHeight = tabBar.h;

    // this triggers the Tabs Row to fire an $itemChanged signal
    tabBar.tabs = [{ rect: true, h: initialHeight + 20, w: 200 }];
    testRenderer.forceAllUpdates();
    await tabBar._$itemChangedSpyPromise;

    expect(tabBar.h).toBeGreaterThan(initialHeight);
  });

  it('should not repeatedly select the tabs when already selected', async () => {
    jest.spyOn(tabBar, '_updateTabs');
    expect(tabBar._updateTabs).not.toHaveBeenCalled();

    tabBar.selectTabs();
    expect(tabBar._updateTabs).not.toHaveBeenCalled();
  });

  it('should optionally alpha down all unselected tabs', async () => {
    [tabBar, testRenderer] = createComponent(
      {
        tabs,
        alphaSelectedTab: true
      },
      { spyOnMethods: ['_update', '_updateTabAlphas'] }
    );

    await tabBar.__updateSpyPromise;
    await tabBar.__updateTabAlphasSpyPromise;

    testRenderer.update();
    testRenderer.keyPress('Down');
    await tabBar.__updateTabAlphasSpyPromise;

    expect(tabBar._Tabs.items[0].alpha).toBe(1);
    expect(tabBar._Tabs.items[1].alpha).toBe(0.3);
  });

  it('should not handle down presses when content is already selected', () => {
    testRenderer.keyPress('Down');
    expect(tabBar._isTabsFocused).toBe(false);
    jest.spyOn(tabBar, '_updateTabs');
    expect(tabBar._updateTabs).not.toHaveBeenCalled();

    testRenderer.keyPress('Down');
    expect(tabBar._updateTabs).not.toHaveBeenCalled();
  });

  it('should not handle down presses when the selected tab does not have content', async () => {
    [tabBar, testRenderer] = createComponent(
      {
        tabs: [
          {
            type: Tab,
            title: 'No Content Tab'
          }
        ]
      },
      {
        spyOnMethods: ['_update']
      }
    );
    await tabBar.__updateSpyPromise;
    tabBar.mode = 'focused';
    await tabBar.__updateSpyPromise;

    jest.spyOn(tabBar, '_updateTabs');

    testRenderer.keyPress('Down');

    expect(tabBar._isTabsFocused).toBe(true);
    expect(tabBar._updateTabs).not.toHaveBeenCalled();
  });

  it('should delegate focus between tabs and tab content', () => {
    expect(tabBar._getFocused()).toBe(tabBar._Tabs);

    testRenderer.keyPress('Down');
    testRenderer.update();

    expect(tabBar._getFocused()).toBe(tabBar._TabContent);
  });

  it('should update what content is displayed when the selected tab is changed', async () => {
    [tabBar, testRenderer] = createComponent(
      { tabs },
      { spyOnMethods: ['_update', '_selectedTabChange'] }
    );
    await tabBar.__updateSpyPromise;
    tabBar.mode = 'focused';
    await tabBar.__updateSpyPromise;

    expect(tabBar._TabContent.selectedIndex).toBe(0);

    const spy = jest.spyOn(tabBar, '_selectedTabChange');
    testRenderer.keyPress('Right');
    await tabBar.__selectedTabChangeSpyPromise;

    expect(spy).toHaveBeenCalled();
  });

  describe('when the collapse property is true', () => {
    beforeEach(() => {
      tabBar.collapse = true;
      testRenderer.forceAllUpdates();
      expect(tabBar.h).toBe(tabBar._expandedHeight);
    });

    it('should set the height to just the tabs when unfocused', () => {
      tabBar.mode = 'unfocused';
      testRenderer.forceAllUpdates();

      expect(tabBar.h).toBe(tabBar._collapsedHeight);
    });

    it('should set the height to just the tabs if there is no tab content to display', () => {
      tabBar.tabs = [
        {
          type: Tab,
          title: 'No Content Tab'
        },
        {
          type: Tab,
          title: 'No Content Tab 2'
        }
      ];

      testRenderer.forceAllUpdates();
      testRenderer.update();

      expect(tabBar.h).toBe(tabBar._collapsedHeight);
    });
  });

  it('should allow overwriting the margin between tabs and tab content', async () => {
    testRenderer.forceAllUpdates();
    expect(tabBar._TabContent.y).toBe(
      tabBar._Tabs.h + tabBar.style.tabsMarginBottom
    );
  });

  it('should set the tab item spacing', async () => {
    testRenderer.forceAllUpdates();
    expect(tabBar._Tabs.style.itemSpacing).toBe(tabBar.style.tabSpacing);
  });

  describe('the reset property', () => {
    it('should reselect the first item on unfocus when reset is true', () => {
      tabBar.reset = true;

      testRenderer.keyPress('Right');

      expect(tabBar._Tabs.selectedIndex).toBe(1);

      testRenderer.unfocus();

      expect(tabBar._Tabs.selectedIndex).toBe(0);
    });
    it('should maintain the current selection on unfocus when reset is false', () => {
      testRenderer.keyPress('Right');

      expect(tabBar._Tabs.selectedIndex).toBe(1);

      testRenderer.unfocus();

      expect(tabBar._Tabs.selectedIndex).toBe(1);
    });
  });

  it('should optionally allow the selected tab to remain selected when tab bar loses focus', () => {
    expect(tabBar._Tabs.items[0].mode).toBe('focused');
    expect(tabBar._Tabs.items[1].mode).toBe('unfocused');

    tabBar.retainSelection = true;
    tabBar.mode = 'unfocused';
    tabBar._updateTabs();

    expect(tabBar._Tabs.items[0].mode).toBe('selected');
    expect(tabBar._Tabs.items[1].mode).toBe('unfocused');
  });
});
