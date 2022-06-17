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
          tabChanged: '_tabChanged',
          selectedChange: '_columnChanged'
        },
        Items: {
          Tabs: {
            type: Row,
            passSignals: {
              selectedChange: 'tabChanged' // Pass event to parent
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
    return [...Row.properties, 'items']; // Set to items to match api for Rows/Columns
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

  _construct() {
    super._construct();
    this._items = []; // Sets the default state for this.items when using withUpdates mixin
    this._results = []; // This will be filled when items is set
  }

  _columnChanged() {
    // filtering for tabs that are not the current focused tab
    const focusedIndex = this._Tabs.items[this._selectedResultsIndex];
    const unfocused = this._Tabs.items.filter(x => x !== focusedIndex);

    // results row is in focus, add soft focus treatment and fade inactive tabs
    if (this._Container.selectedIndex === 1) {
      focusedIndex.patch({ SoftFocus: this.styles.softFocus });
      unfocused.map(tab => {
        tab.patch(this.styles.fadedTabs);
      });
      return;
    }

    // tabs row focused, hide soft focus and reset tabs alpha
    focusedIndex.patch({
      SoftFocus: this.styles.hideSoftFocus
    });
    unfocused.map(tab => tab.patch(this.styles.visibleTabs));
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
    this._selectedResultsIndex = 0; // Set the initial selected index
    return tabItems;
  }

  _update() {
    this._Container.patch({
      w: this.w,
      ...this._layoutPatch,
      itemSpacing: this.styles.verticalSpacing
    });
    this._updateTabs();
    this._updateResults();
  }

  _updateTabs() {
    this._Tabs.patch({
      w: this.w,
      ...this._layoutPatch,
      itemSpacing: this.styles.tabSpacing
    });
    this._Tabs.items = this.items;
    this._Tabs.h = this._Tabs.Items.h; // Make sure the height renders correctly
  }

  _updateResults() {
    this._Results.smooth = { alpha: 0.001 };
    this._Results._getTransition('alpha').once('finish', () => {
      this._Results.patch({
        w: this.w,
        ...this._layoutPatch,
        itemSpacing: this.styles.resultSpacing
      });

      if ('function' === typeof this._results[this._selectedResultsIndex]) {
        // if the results are being returned from a function
        const resultsFunc = this._results[this._selectedResultsIndex]; // store function
        const results = resultsFunc(); // execute function
        if (results.then) {
          this._Results.items = []; // Clear current results
          results.then(items => {
            // Make sure still on the current tab
            if (resultsFunc === this._results[this._Tabs._selectedIndex]) {
              this._Results.items = items; // get results from Promise function
              this._updateResultsLayout();
            }
          });
        } else {
          // get results from Synchronous function
          this._Results.items = results;
          this._updateResultsLayout();
        }
      } else {
        this._Results.items = this._results[this._selectedResultsIndex]; // set results children to what is stored in _results
        this._updateResultsLayout();
      }
    });
  }

  _updateResultsLayout() {
    this._Results.skipFocus = !this._Results.items.length; // Make sure to skip focus if no results for first time
    // todo: make sure we switch the following to use autoResizeHeight when merging into 'next' branch
    this._Results.h = this._Results.Items.h; // Make sure the height renders correctly
    this._Results.smooth = { alpha: 1 };
  }

  _tabChanged() {
    this._selectedResultsIndex = this._Tabs._selectedIndex;
    this._updateResults();
  }

  _getFocused() {
    return this._Container;
  }
}
