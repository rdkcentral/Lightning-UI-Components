import Base from '../../elements/Base';
import { Row, Column } from '../../layout';
import styles from './ContentTray.styles';
import withStyles from '../../mixins/withStyles';

export default class ContentTray extends withStyles(Base, styles) {
  static _template() {
    return {
      Container: {
        type: Column,
        signals: {
          onTabChanged: '_onTabChanged',
          selectedChange: '_onColumnChanged'
        },
        Items: {
          Tabs: {
            type: Row,
            passSignals: {
              selectedChange: 'onTabChanged' // Pass event to Container
            }
          },
          Results: {
            type: Row
          }
        }
      }
    };
  }

  static get properties() {
    return [...Row.properties, 'collapse', 'items', 'reset']; // Set to items to match api for Rows/Columns
  }

  static get tags() {
    return [
      'Container',
      { name: 'Tabs', path: 'Container.Items.Tabs' },
      { name: 'Results', path: 'Container.Items.Results' }
    ];
  }

  get _layoutPatch() {
    /* iterating through properties and setting
       this._Container.prop = this.prop */
    return this.constructor.properties.reduce((accumulator, currentProp) => {
      if (currentProp !== 'items') {
        accumulator[currentProp] = this[currentProp];
      }
      return accumulator;
    }, {});
  }

  get _collapsedHeight() {
    return this._Tabs.h;
  }

  get _expandedHeight() {
    return this._Tabs.h + this._Container.itemSpacing + this._Results.h;
  }

  _setItems(v) {
    if (!Array.isArray(v)) {
      console.info(
        `ContentTray items must be an array but received ${typeof v}`
      );
      return [];
    }
    this._results = []; // reset the results
    // tabItems refers to top level items (ref: 'Tabs')
    const tabItems = v.map(tab => {
      this._results.push(tab.items); // store the child items in the results
      delete tab.items; // delete child items as they are now stored in _results; this will be referenced by _updateResults by the selected top item's index
      return tab; // done going through top level items
    });

    this._updateTabItems(tabItems); // Create tabs
    this._updateResultsItems(); // Update results for the first time

    return tabItems;
  }

  _onColumnChanged() {
    this._updateSoftFocus(); // Reset soft focus every time the Container Column selected index changes
  }

  _onTabChanged() {
    this._updateSoftFocus(); // Reset soft focus every time the Tab selected index changes
    this._updateResultsItems(); // Populate new Results every time the Tab selected index changes
  }

  _update() {
    this._updateContainer(); // Allows Container Column settings to be adjusted at runtime
    this._updateTabs(); // Allows Tabs Row settings to be adjusted at runtime
    this._updateResults(); // Allows Results Row settings to be adjusted at runtime
    this._updateComponentDisplay(); // Adjust height of component and show/hide results
  }

  _updateContainer() {
    this._Container.patch({
      w: this.w,
      ...this._layoutPatch,
      itemSpacing: this.styles.verticalSpacing
    });
  }

  _updateTabs() {
    this._Tabs.patch({
      w: this.w,
      ...this._layoutPatch,
      itemSpacing: this.styles.tabSpacing
    });
  }

  _updateTabItems(items) {
    this._Tabs.items = items;
    this._Tabs.h = this._Tabs.Items.h; // Make sure the height renders correctly
    this._updateComponentDisplay();
  }

  _updateResults() {
    this._Results.patch({
      w: this.w,
      ...this._layoutPatch,
      itemSpacing: this.styles.resultSpacing
    });
  }

  _updateResultsItems() {
    this._Results.smooth = { alpha: 0.001 };

    this._Results._getTransition('alpha').once('finish', () => {
      if ('function' === typeof this._results[this._Tabs.selectedIndex]) {
        // Check if results are being returned from a function
        const resultsFunc = this._results[this._Tabs.selectedIndex]; // Store function
        const results = resultsFunc(); // Execute function
        if (results.then) {
          results.then(items => {
            // Make sure still on the current tab
            if (resultsFunc === this._results[this._Tabs._selectedIndex]) {
              this._Results.items = items; // Get results from Promise function
              this._updateResultsLayout();
            }
          });
        } else {
          // get results from Synchronous function
          this._Results.items = results;
          this._updateResultsLayout();
        }
      } else {
        this._Results.items = this._results[this._Tabs.selectedIndex]; // Set results children to what is stored in _results
        this._updateResultsLayout();
      }
    });
  }

  _updateResultsLayout() {
    this._Results.skipFocus = !this._Results.items.length;
    this._Results.h = this._Results.Items.h;
    this._updateComponentDisplay();
  }

  _updateComponentDisplay() {
    let h;
    if (this.collapse) {
      h =
        this.hasFocus() && this._Results.items.length
          ? this._expandedHeight
          : this._collapsedHeight;
    } else {
      h = this._expandedHeight;
    }

    this._Results.smooth = {
      alpha: !this.collapse || this.hasFocus() ? 1 : 0.001
    };

    if (this.h !== h) {
      this.h = h;
      this.smooth = { h };
      this.fireAncestors('$itemChanged');
    }
  }

  _updateSoftFocus() {
    this._Tabs.items.forEach((element, index) => {
      if (
        this._Container.selectedIndex === 1 &&
        index === this._Tabs.selectedIndex &&
        this._results[this._Tabs.selectedIndex] &&
        this._results[this._Tabs.selectedIndex].length
      ) {
        element.patch({
          SoftFocus: {
            ...this.styles.softFocus,
            mountX: 0.5,
            mountY: 1,
            y: element.h + this.styles.softFocus.y,
            x: element.w / 2
          }
        });
      } else {
        element.patch({
          ...(this._Container.selectedIndex === 1
            ? this.styles.fadedTabs
            : this.styles.visibleTabs),
          SoftFocus: undefined
        });
      }
    });
  }

  _unfocus() {
    super._unfocus();
    if (this.reset) {
      // If the reset flag is set restore ContentTray to its original state when it loses focus
      this._Tabs.selectedIndex = 0;
      this._Container.selectedIndex = 0;
    }
  }

  _getFocused() {
    return this._Container;
  }
}
