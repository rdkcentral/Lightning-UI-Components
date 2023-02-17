import Base from '../Base/index.js';
import Row from '../Row/index.js';
import ContentSwitcher from './ContentSwitcher.js';
import * as styles from './TabBar.styles.js';
export { default as Tab } from './Tab.js';

export default class TabBar extends Base {
  static _template() {
    return {
      Tabs: {
        type: Row,
        autoResizeHeight: true,
        signals: {
          selectedChange: '_selectedTabChange'
        }
      },
      TabContent: {
        type: ContentSwitcher,
        signals: {
          contentHeightChange: '_updateTabBarHeight'
        }
      }
    };
  }

  static get __themeStyle() {
    return styles;
  }

  static get __componentName() {
    return 'TabBar';
  }

  static get properties() {
    return [
      'alphaSelectedTab',
      'collapse',
      'reset',
      'tabs',
      'wrapSelected',
      ...Row.properties
    ];
  }

  static get tags() {
    return ['Tabs', 'TabContent'];
  }

  _construct() {
    super._construct();
    this._tabContent = [];
    this._isTabsFocused = true;
  }

  _selectedTabChange() {
    if (
      typeof this._tabContent === 'object' &&
      typeof this._tabContent.then === 'function'
    ) {
      return this._tabContent.then(this.queueRequestUpdate);
    }
    return this.queueRequestUpdate();
  }

  _update() {
    this._updateTabsLayout();
    this._updateTabs();
    this._updateTabContent();
    this._updateTabBarHeight();
  }

  _updateTabsLayout() {
    const defaultLayout = {
      style: {
        itemSpacing: this.style.tabSpacing
      }
    };
    const tabsRowPatch = Row.properties.reduce((patchObj, prop) => {
      if (this[prop] != undefined) {
        patchObj[prop] = this[prop];
      }
      return patchObj;
    }, defaultLayout);

    this._Tabs.patch(tabsRowPatch);
  }

  _updateTabs() {
    this._Tabs.wrapSelected = this.wrapSelected;
    this._Tabs.items.forEach(tab => {
      const isSelectedTab = tab === this._Tabs.selected;
      if (this._isUnfocusedMode) {
        tab.mode = 'unfocused';
      } else if (this._isFocusedMode) {
        if (this._isTabsFocused) {
          tab.mode = isSelectedTab ? 'focused' : 'unfocused';
        } else {
          tab.mode = isSelectedTab ? 'selected' : 'unfocused';
        }
      }
    });
    if (this.alphaSelectedTab) {
      this._updateTabAlphas();
    }
  }

  _updateTabAlphas() {
    if (this._isTabsFocused) {
      this._Tabs.items.forEach(tab => {
        tab.patch({ alpha: 1 });
      });
    } else {
      this._Tabs.items.forEach(tab => {
        tab.patch({ alpha: tab === this._Tabs.selected ? 1 : 0.3 });
      });
    }
  }

  _updateTabContent() {
    const margin = this.style.tabsMarginBottom;
    this._TabContent.patch({
      y: this._Tabs.h + margin,
      contentItems: this._tabContent,
      selectedIndex: this._isFocusedMode ? this._Tabs.selectedIndex : undefined
    });
  }

  _updateTabBarHeight() {
    let h;
    if (this.collapse) {
      h =
        this._isFocusedMode &&
        this._tabContent.filter(content => Object.keys(content).length).length
          ? this._expandedHeight
          : this._collapsedHeight;
    } else {
      h = this._expandedHeight;
    }
    this._TabContent.smooth = {
      alpha: !this.collapse || this._isFocusedMode ? 1 : 0.001
    };
    if (this.h !== h) {
      this.h = h;
      this.fireAncestors('$itemChanged');
    }
  }

  selectTabs() {
    if (!this._isTabsFocused) {
      this._isTabsFocused = true;
      this._updateTabs();
      this._updateTabBarHeight();
    }
  }

  resetTabs() {
    this._Tabs.selectedIndex = 0;
  }

  _handleDown() {
    if (this._isTabsFocused && this._TabContent._hasContent) {
      this._isTabsFocused = false;
      this._updateTabs();
      this._updateTabBarHeight();
    }
  }

  _handleUp() {
    this.selectTabs();
  }

  _setTabs(tabs) {
    this._tabContent = [];
    this._tabContent = tabs.map(tab => tab.tabContent || {});
    this._Tabs.items = tabs;
    return tabs;
  }

  get _collapsedHeight() {
    return this._Tabs.h;
  }

  get _expandedHeight() {
    return this._Tabs.h + this.style.tabsMarginBottom + this._TabContent.h;
  }

  _getFocused() {
    return this._isTabsFocused ? this._Tabs : this._TabContent;
  }

  _unfocus() {
    super._unfocus();
    if (this.reset) {
      this.resetTabs();
    }
  }
}
