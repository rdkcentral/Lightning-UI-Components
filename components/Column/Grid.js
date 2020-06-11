import lng from 'wpe-lightning';
import FocusManager from '../FocusManager/FocusManager';
import { GRID } from '../Styles/Styles';

const BOUNDS = 1000;
export default class Grid extends lng.Component {
  static _template() {
    return {
      boundsMargin: [BOUNDS, BOUNDS, 0, 0],
      Rows: {
        type: FocusManager,
        direction: 'column',
        signals: {
          selectedChange: '_scroll'
        },
        x: GRID.margin.x,
        w: w => w - 2 * GRID.margin.x,
        y: GRID.gutters.vertical
      },
      loading: true
    };
  }

  constructor(...args) {
    super(...args);
    // Ensure setters are called after all properties are set like width
    this._whenEnabled = new Promise(
      resolve =>
        (this._firstEnable = () => {
          this._gridEnabled = true;
          resolve();
        })
    );
  }

  _init() {
    super._init();
    this._originalH = this.h;
  }

  _scroll(selectedRow, prevRow, direction) {
    if (!this.static) {
      if (prevRow && prevRow.currentItem) {
        let index = this._getIndexOfItemNear(selectedRow, prevRow);
        selectedRow._selectedIndex = index;
      }

      if (direction === 'next') {
        this._scrollDown(prevRow);
      } else {
        this._scrollUp();
      }
    }
  }

  _getIndexOfItemNear(selectedRow, prevRow) {
    let prevItem = prevRow.currentItem;
    let [itemX] = prevItem.core.getAbsoluteCoords(-prevRow.offset, 0);
    let index = selectedRow.items.findIndex(item => {
      let [x] = item.core.getAbsoluteCoords(0, 0);
      return x >= itemX || itemX <= x + item.w;
    });

    if (index === -1) {
      return selectedRow.items.length - 1;
    }

    return index;
  }

  scrollTo(index, duration = this.rowTransition.duration * 100) {
    for (let i = 0; i !== Math.abs(this.selectedIndex - index); i++) {
      setTimeout(() => {
        this.selectedIndex > index
          ? this.selectedIndex--
          : this.selectedIndex++;
      }, duration * i);
    }
  }

  _scrollUp() {
    this.render();
  }

  _scrollDown(rowAbove) {
    this.render(rowAbove);

    if (this._nearEnd() && this._getMoreRows) {
      this.provider = this._getMoreRows();
      this._getMoreRows = false;
    }
  }

  _nearEnd(BUFFER = 6) {
    return this.rows.length && this.selectedIndex > this.rows.length - BUFFER;
  }

  _getFocused() {
    return this._Rows;
  }

  resetIndex() {
    this.selectedIndex = 0;
    this.rows && this.rows.forEach(row => (row.selectedIndex = 0));
  }

  set rowsPos(pos) {
    this._Rows.x = pos.x !== undefined ? pos.x : this._Rows.x;
    this._Rows.y = pos.y !== undefined ? pos.y : this._Rows.y;
  }

  get _Rows() {
    return this.tag('Rows');
  }

  get selectedIndex() {
    return this._Rows.selectedIndex;
  }

  set selectedIndex(index) {
    this._Rows.selectedIndex = index;
  }

  get rows() {
    return this._Rows.children;
  }

  set rows(rows) {
    if (this._gridEnabled) {
      this._Rows.childList.clear();
      if (this.fallbacks)
        Object.keys(this.fallbacks).forEach(
          key => (this[`is${[key]}`] = false)
        );
      this.appendRows(rows);
    } else {
      this._whenEnabled.then(() => (this.rows = rows));
    }
  }

  get currentRow() {
    return this.rows[this.selectedIndex];
  }

  set provider(provider) {
    if (provider) {
      provider.then(data => {
        if (Array.isArray(data)) {
          this.rows = data;
        } else {
          data.appendRows
            ? this.appendRows(data.rows)
            : (this.rows = data.rows);
          this._getMoreRows = data.getMoreRows;
        }
      });
    }
  }

  appendRows(rows = []) {
    let rowWidth = this._Rows.renderWidth;
    // Add rows past the bounds margin so they don't load
    let bottomOfScreen = this.y + this.h + 2 * BOUNDS;
    rows.forEach(row => {
      row.w = row.w || rowWidth;
      row.y = bottomOfScreen;
      row.parentGridFocus = this.hasFocus();
      this._Rows.childList.add(this.application.stage.c(row));
    });

    // Ensure rows are drawn so they have height
    this.stage.update();
    this.loading = false;
    this._refocus();
    this.render();
  }

  _computeLastIndex() {
    let totalRows = this.rows.length;
    let MAX_HEIGHT =
      (this.parentGridH ? this.parentGridH : this._originalH) - this.rowSpacing;

    for (let i = totalRows - 1; i >= 0; i--) {
      MAX_HEIGHT -= this.rows[i].h + this.rowSpacing;
      if (MAX_HEIGHT <= 0) {
        return i + 1;
      }
    }

    return 0;
  }

  _patchFallback(state) {
    if (this.fallbacks && this.fallbacks[state]) {
      this.patch({ Rows: { [state]: this.fallbacks[state] } });
      this[`is${[state]}`] = true;
    }
  }

  render(rowAbove) {
    let rowY = 0;
    let index = this.static ? 0 : this.selectedIndex;
    let totalRows = this.rows.length;
    let GRID_HEIGHT = this._originalH + 1.5 * BOUNDS;
    let lastIndex = this._computeLastIndex();

    if (index > lastIndex && this._getMoreRows === undefined) {
      index = lastIndex;
    } else if (rowAbove) {
      rowAbove.smooth = {
        y: [-(rowAbove.h + this.rowSpacing), this.rowTransition],
        alpha: 0
      };
    }

    while (rowY < GRID_HEIGHT && index < totalRows && totalRows) {
      let row = this.rows[index];
      row.smooth = { y: [rowY, this.rowTransition], alpha: 1 };
      rowY += row.h + this.rowSpacing;
      index++;
    }

    if (!this._originalH && rowY) {
      this.h = this._totalH;
      this.fireAncestors('$gridChanged');
    }
  }

  get _totalH() {
    return this.rows.reduce(
      (acc, cur, index) =>
        (acc += cur.h + (index < this.rows.length - 1 ? this.rowSpacing : 0)),
      this._Rows && this._Rows.y ? this._Rows.y : 0
    );
  }

  set rowSpacing(val) {
    this._rowSpacing = val;
    this.render();
  }

  get rowSpacing() {
    return this._rowSpacing || GRID.gutters.horizontal;
  }

  set updateRows(callback) {
    if (this._gridEnabled) {
      this.rows.forEach(callback);
      this.render();
    } else {
      this._whenEnabled.then(() => (this.updateRows = callback));
    }
  }

  get rowTransition() {
    return (
      this._rowTransition || {
        duration: 0.4,
        timingFunction: 'cubic-bezier(0.20, 1.00, 0.30, 1.00)'
      }
    );
  }

  set rowTransition(val) {
    this._rowTransition = val;
  }

  _focus() {
    // Wait till Rows are focused before rendering
    setTimeout(() => this.render(), 0);
    this.rows.forEach(row => (row.parentGridFocus = true));
  }

  _unfocus() {
    this.rows.forEach(row => (row.parentGridFocus = false));
  }

  $removeRow(row) {
    if (row) {
      let wasSelected = row === this._Rows.selected;
      this._Rows.childList.remove(row);
      if (wasSelected || this.selectedIndex >= this.rows.length) {
        this.selectedIndex = this.selectedIndex;
      }

      let rowBefore;
      if (this.selectedIndex > 0) {
        rowBefore = this.rows[this.selectedIndex - 1];
      }
      this.render(rowBefore);
      if (!this.rows.length) {
        this._patchFallback('EmptyState');
      }
    }
  }

  $gridChanged() {
    this.render();
  }
}
