import lng from 'wpe-lightning';
import FocusManager from '../FocusManager/FocusManager';
import { COLORS_NEUTRAL,
  getHexColor,
  TYPESCALE,
  GRID } from '../Styles/Styles';

const TITLE_HEIGHT = TYPESCALE.title.lineHeight + (GRID.spacingIncrement * 5);

export default class Row extends lng.Component {
  static _template() {
    return {
      Title: {
        text: {
          ...TYPESCALE.title,
          textColor: getHexColor(COLORS_NEUTRAL.light1),
        },
      },
      Items: {
        type: FocusManager,
        direction: 'row',
        signals: {
          selectedChange: '_scroll'
        }
      },
      loading: true
    };
  }

  constructor(...args) {
    super(...args);
    // Ensure we have width + height
    this._whenEnabled = new Promise((resolve) => this._firstEnable = () => {
      this._rowEnabled = true;
      resolve();
    });
  }

  _init() {
    this.showTitle = this._showTitle === undefined ? true : this.showTitle;
    this._originalW = this.w;
  }

  _getFocused() {
    return this._Items;
  }

  get _Items() {
    return this.tag('Items');
  }

  get _selectedIndex() {
    return this._Items.selectedIndex;
  }

  set _selectedIndex(val) {
    this._Items.selectedIndex = val;
  }

  get items() {
    return this._Items.children;
  }

  set items(items = []) {
    if (this._rowEnabled) {
      this._Items.childList.clear();
      items.forEach(item => {
        item.w = item.w || this._defaultItemWidth(this.upCount || items.length);
        item.h = item.h || this._Items.h;
        item.parentRowFocused = this.hasFocus();
        this._Items.childList.add(this.application.stage.c(item));
      });

      if (items.length > this.upCount) { this.wrapSelected = false; }
      if (!this._hasProvider) {
        this.loading = false;
      }
      this.render();

      if (this.hasFocus()) {
        this._refocus();
      }
    } else {
      this._whenEnabled.then(() => this.items = items);
    }
  }

  set wrapSelected(wrapSelected) {
    this._Items.wrapSelected = wrapSelected;
  }

  get wrapSelected() {
    return this._Items.wrapSelected;
  }

  get currentItem() {
    return this.items[this._selectedIndex];
  }

  set itemSpacing(val) {
    this._itemSpacing = val;
    this.render();
  }

  get itemSpacing() {
    return this._itemSpacing || GRID.gutters.vertical;
  }

  get _requiresScrolling() {
    return this.upCount < this.items.length;
  }

  _defaultItemWidth(upCount) {
    if (this._calculatedItemWidth) {
      return this._calculatedItemWidth;
    }
    let width = this._originalW || this.renderWidth || this.finalW;
    let columnGapTotal = (upCount - 1) * this.itemSpacing;
    let widthForItems = width - columnGapTotal;
    this._calculatedItemWidth = widthForItems / upCount;
    return this._calculatedItemWidth;
  }

  set provider(provider) {
    if (provider) {
      this._hasProvider = true;
      provider.then(data => {
        let items = Array.isArray(data) ? data : data.items;

        if (!items || items.length === 0) {
          this.fireAncestors('$removeRow', this);
        } else {
          this.loading = false;
          this.items = items;
        }

        if (data.title) {
          this.title = data.title;
        }
      });
    }
  }

  set showTitle(val) {
    if (this.title && this.h && val !== this._showTitle) {
      let alpha = val ? 1 : 0;
      let heightChange = (val ? 1 : -1) * TITLE_HEIGHT;
      this.tag('Title').alpha = alpha;
      this._Items.y = val ? TITLE_HEIGHT : 0;
      this._updateHeight(heightChange);
      this._Items.h = val ? this.h - TITLE_HEIGHT : this.h;
    }
    this._showTitle = val;
  }

  get showTitle() {
    return this._showTitle;
  }

  _updateHeight(change) {
    this.h += change;
  }

  set title(text) {
    this._title = text;
    this.tag('Title').text = text;
  }

  get title() {
    return this._title;
  }

  _focus() {
    if (this.focusHeightChange) {
      this._updateHeight(this.focusHeightChange);
    }
    this.items.forEach(item => item.parentRowFocused = true);
  }

  _unfocus() {
    if (this.focusHeightChange) {
      this._updateHeight(-this.focusHeightChange);
    }
    this.items.forEach(item => item.parentRowFocused = false);
  }

  get scrollTransition() {
    return this._scrollTransition || {};
  }

  set scrollTransition(val) {
    this._scrollTransition = val;
  }

  _scroll(selected, prev, direction) {
    if (this.alwaysScroll || (this._requiresScrolling && this._isOffScreen(selected))) {
      let shiftAmount = prev.w + this.itemSpacing;
      let shiftDirection = direction === 'next' ? -1 : 1;
      this._Items.smooth = { x: [ this.offset + (shiftAmount * shiftDirection), this.scrollTransition ] };
    }
    this.signal('selectedChange', this._selectedIndex);
  }

  _isOffScreen(item) {
    let [ itemX ] = item.core.getAbsoluteCoords(0, 0);
    return itemX < this.itemSpacing || itemX > this._originalW - this.itemSpacing;
  }

  render(animate) {
    let itemX = 0;
    this.items.forEach((item, index) => {
      if (animate) {
        item.smooth = { x: [ itemX, this.scrollTransition ] };
      } else {
        item.x = itemX;
      }
      itemX += index < this.items.length - 1 ? item.w + this.itemSpacing : item.w;
    });
    this.w = itemX;
  }

  get offset() {
    let t = this._Items.transition('x');
    return t ? t.targetValue : 0;
  }

  $shiftRow({ position }) {
    this._Items.smooth = { x: [ position, this.scrollTransition ] };
  }

  $itemChanged() {
    this.render(true);
  }
}
