import { makeCreateComponent } from '@lightning/ui-test-utils';

import { Row, Tile } from '../index.js';
import { jest } from '@jest/globals';
import TabBar from './TabBar';
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
  let component, testRenderer;

  beforeEach(async () => {
    [component, testRenderer] = createComponent(
      { tabs },
      { spyOnMethods: ['_update'] }
    );
    await component.__updateSpyPromise;
    component.mode = 'focused';
    await component.__updateSpyPromise;
    testRenderer.update();
  });

  afterEach(() => {
    component = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('should focus on the selected tab', () => {
    expect(component._Tabs.items[0].mode).toBe('focused');
    expect(component._Tabs.items[1].mode).toBe('unfocused');
  });

  it('should display which tab is selected when focused on the tab content', async () => {
    await component.__updateSpyPromise;
    testRenderer.keyPress('Down');

    expect(component._Tabs.items[0].mode).toBe('selected');
    expect(component._Tabs.items[1].mode).toBe('unfocused');
  });

  it('should transfer focus back to the tabs on up', async () => {
    await component.__updateSpyPromise;
    testRenderer.keyPress('Down');

    expect(component._Tabs.items[0].mode).toBe('selected');
    expect(component._Tabs.items[1].mode).toBe('unfocused');

    testRenderer.keyPress('Up');

    expect(component._Tabs.items[0].mode).toBe('focused');
    expect(component._Tabs.items[1].mode).toBe('unfocused');
  });

  it('should not repeatedly selecte the tabs when already selected', async () => {
    await component.__updateSpyPromise;
    jest.spyOn(component, '_updateTabs');
    expect(component._updateTabs).not.toHaveBeenCalled();

    component.selectTabs();
    expect(component._updateTabs).not.toHaveBeenCalled();
  });

  it('should optionally alpha down all unselected tabs', async () => {
    [component, testRenderer] = createComponent(
      {
        tabs,
        alphaSelectedTab: true
      },
      { spyOnMethods: ['_update', '_updateTabAlphas'] }
    );

    await component.__updateSpyPromise;
    await component.__updateTabAlphasSpyPromise;

    testRenderer.update();
    testRenderer.keyPress('Down');
    await component.__updateTabAlphasSpyPromise;

    expect(component._Tabs.items[0].alpha).toBe(1);
    expect(component._Tabs.items[1].alpha).toBe(0.3);
  });

  it('should not handle down presses when content is already selected', () => {
    testRenderer.keyPress('Down');
    expect(component._isTabsFocused).toBe(false);
    jest.spyOn(component, '_updateTabs');
    expect(component._updateTabs).not.toHaveBeenCalled();

    testRenderer.keyPress('Down');
    expect(component._updateTabs).not.toHaveBeenCalled();
  });

  it('should not handle down presses when the selected tab does not have content', async () => {
    [component, testRenderer] = createComponent(
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
    await component.__updateSpyPromise;
    component.mode = 'focused';
    await component.__updateSpyPromise;

    jest.spyOn(component, '_updateTabs');

    testRenderer.keyPress('Down');

    expect(component._isTabsFocused).toBe(true);
    expect(component._updateTabs).not.toHaveBeenCalled();
  });

  it('should delegate focus between tabs and tab content', () => {
    expect(component._getFocused()).toBe(component._Tabs);

    testRenderer.keyPress('Down');
    testRenderer.update();

    expect(component._getFocused()).toBe(component._TabContent);
  });

  it('should update what content is displayed when the selected tab is changed', async () => {
    [component, testRenderer] = createComponent(
      { tabs },
      { spyOnMethods: ['_update', '_selectedTabChange'] }
    );
    await component.__updateSpyPromise;
    component.mode = 'focused';
    await component.__updateSpyPromise;

    expect(component._TabContent.selectedIndex).toBe(0);

    testRenderer.keyPress('Right');
    await component.__selectedTabChangeSpyPromise;

    expect(component._TabContent.selectedIndex).toBe(1);
  });

  describe('when the collapse property is true', () => {
    beforeEach(() => {
      component.collapse = true;
      testRenderer.forceAllUpdates();
      expect(component.h).toBe(component._expandedHeight);
    });

    it('should set the height to just the tabs when unfocused', () => {
      component.mode = 'unfocused';
      testRenderer.forceAllUpdates();

      expect(component.h).toBe(component._collapsedHeight);
    });

    it('should set the height to just the tabs if there is no tab content to display', () => {
      component.tabs = [
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

      expect(component.h).toBe(component._collapsedHeight);
    });
  });

  it('should allow overwriting the margin between tabs and tab content', async () => {
    await component.__updateSpyPromise;
    expect(component._TabContent.y).toBe(
      component._Tabs.h + component.style.tabsMarginBottom
    );
  });

  it('should set the tab item spacing', async () => {
    await component.__updateSpyPromise;
    expect(component._Tabs.style.itemSpacing).toBe(component.style.tabSpacing);
  });

  describe('the reset property', () => {
    it('should reselect the first item on unfocus when reset is true', () => {
      component.__updateSpyPromise;
      component.reset = true;

      testRenderer.keyPress('Right');

      expect(component._Tabs.selectedIndex).toBe(1);

      testRenderer.unfocus();

      expect(component._Tabs.selectedIndex).toBe(0);
    });
    it('should maintain the current selection on unfocus when reset is false', () => {
      component.__updateSpyPromise;
      testRenderer.keyPress('Right');

      expect(component._Tabs.selectedIndex).toBe(1);

      testRenderer.unfocus();

      expect(component._Tabs.selectedIndex).toBe(1);
    });
  });
});
