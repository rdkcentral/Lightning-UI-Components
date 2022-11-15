import { withExtensions } from '../../mixins';
import TitleRow from '../TitleRow';

import * as styles from './ControlRow.styles';

class ControlRow extends TitleRow {
  static get __componentName() {
    return 'ControlRow';
  }

  static get __themeStyles() {
    return styles;
  }

  static _template() {
    return {
      ...super._template(),
      alpha: 0,
      lazyScroll: true,
      signals: {
        selectedChange: '_getMoreItems'
      }
    };
  }

  static get properties() {
    return [...super.properties, 'extraItemSpacing'];
  }

  _construct() {
    super._construct();
    this._leftControls = [];
    this._contentItems = [];
    this._rightControls = [];
    this._lastLeftControlIndex = -1;
    this._lastItemIndex = -1;
    this._lazyLoadBuffer = 0;
  }

  _updateContent() {
    const itemsToAppend = [];
    if (this.leftControls.length) {
      itemsToAppend.push(...this._withExtraSpacing(this.leftControls, true));
    }
    if (this.contentItems.length) {
      itemsToAppend.push(...this._withExtraSpacing(this.contentItems));
    }
    if (this.rightControls.length) {
      itemsToAppend.push(...this.rightControls);
    }
    if (itemsToAppend.length) {
      this.patch({
        alpha: 1,
        items: itemsToAppend,
        selectedIndex: this.leftControls.length,
        startLazyScrollIndex: this.leftControls.length,
        stopLazyScrollIndex:
          this.leftControls.length + this.contentItems.length - 1
      });
    }
  }

  _withExtraSpacing(items, isControl = false) {
    const itemsCopy = [...items];
    const prevItems = isControl ? this._prevLeftControls : this._prevItems;

    // after appending remove extra spacing from the previous last item
    if (prevItems && prevItems.length && itemsCopy[prevItems.length - 1]) {
      itemsCopy[prevItems.length - 1].extraItemSpacing = 0;
    }

    itemsCopy[itemsCopy.length - 1].extraItemSpacing =
      this.extraItemSpacing == undefined
        ? this.style.extraItemSpacing
        : this.extraItemSpacing;

    if (isControl) {
      this._prevLeftControls = itemsCopy;
    } else {
      this._prevItems = itemsCopy;
    }
    return itemsCopy;
  }

  _getMoreItems() {
    if (this.lazyLoadBuffer) {
      const loadMoreIndex = this.contentItems.length - 1 - this.lazyLoadBuffer;
      if (
        this.selectedIndex - this.leftControls.length >= loadMoreIndex &&
        this.selectedIndex < this.leftControls.length + this.contentItems.length
      ) {
        this.loadMoreItems();
      }
    }
  }

  loadMoreItems() {
    this.signal('loadMoreItems');
  }

  _selectedChange(selected, prevSelected) {
    super._selectedChange(selected, prevSelected);
    this._getMoreItems();
  }

  _appendItemsAt(items, appendIndex, removeSpacingIndex) {
    const itemsCopy = [...items];

    if (removeSpacingIndex != undefined) {
      this.items[removeSpacingIndex].extraItemSpacing = undefined;
      itemsCopy[itemsCopy.length - 1].extraItemSpacing =
        this.extraItemSpacing == undefined
          ? this.style.extraItemSpacing
          : this.extraItemSpacing;
    }
    this.appendItemsAt(itemsCopy, appendIndex);
  }

  addContentItems(items) {
    const itemsToAdd = this._createContentItems(items);
    const addIndex = this._lastItemIndex + 1;
    this._appendItemsAt(itemsToAdd, addIndex, this._lastItemIndex);
    this._lastItemIndex += itemsToAdd.length;

    if (this._contentItems) {
      this._contentItems = [...this.contentItems, ...itemsToAdd];
    }

    this.patch({
      stopLazyScrollIndex: addIndex + itemsToAdd.length - 1
    });
  }

  addContentItemsAt(items, itemIndex) {
    const itemsToAdd = this._createContentItems(items);
    const addIndex = this._lastLeftControlIndex + 1 + itemIndex;
    if (addIndex === this._lastItemIndex + 1) {
      this.addContentItems(itemsToAdd);
    } else {
      this._appendItemsAt(itemsToAdd, addIndex);

      if (this._contentItems) {
        this._contentItems.splice(addIndex, 0, ...itemsToAdd);
        this._lastItemIndex = this.contentItems.length - 1;
      }

      this.patch({
        stopLazyScrollIndex: this._lastItemIndex + itemsToAdd.length
      });
    }
  }

  removeContentItemAt(index) {
    const removeIndex = this._lastLeftControlIndex + 1 + index;
    this.removeItemAt(removeIndex);
    this._lastItemIndex--;

    if (this._contentItems) {
      this._contentItems.splice(index, 1);
    }

    this.patch({
      stopLazyScrollIndex:
        this.leftControls.length + this.contentItems.length - 1
    });
  }

  addLeftControls(controls) {
    const itemsToAdd = this._createControls(controls);
    const addIndex = this._lastLeftControlIndex + 1;

    this._appendItemsAt(itemsToAdd, addIndex, this._lastLeftControlIndex);
    if (this._leftControls) {
      this._leftControls = [...this._leftControls, ...controls];
      this._lastLeftControlIndex = this._leftControls.length - 1;
      this._lastItemIndex += controls.length;
    }

    this.patch({
      startLazyScrollIndex: addIndex + itemsToAdd.length
    });
  }

  addLeftControlsAt(controls, index) {
    const itemsToAdd = this._createControls(controls);
    if (index === this._lastLeftControlIndex + 1) {
      this.addLeftControls(controls);
    } else {
      this._appendItemsAt(itemsToAdd, index);
      if (this.leftControls) {
        this._leftControls.splice(index, 0, ...controls);
        this._lastLeftControlIndex = this._leftControls.length - 1;
        this._lastItemIndex += controls.length;
      }

      this.patch({
        startLazyScrollIndex: this._lastLeftControlIndex
          ? this._lastLeftControlIndex + 1
          : controls.length
      });
    }
  }

  removeLeftControlAt(index) {
    this.removeItemAt(index);
    this._lastLeftControlIndex--;
    this._lastItemIndex--;

    if (this.leftControls) {
      this._leftControls.splice(index, 1);
    }

    this.stopLazyScrollIndex =
      this.leftControls.length + this.contentItems.length - 1;
  }

  addRightControls(controls) {
    this._rightControls.push(...controls);
    this._appendItemsAt(this._createControls(controls), this.items.length);
  }

  addRightControlsAt(controls, index) {
    const appendIndex =
      this._leftControls.length + this._contentItems.length + index;
    this._rightControls.splice(index, 0, ...controls);
    this._appendItemsAt(this._createControls(controls), appendIndex);
  }

  removeRightControlAt(index) {
    const removeIndex =
      this.leftControls.length + this.contentItems.length + index;
    this.removeItemAt(removeIndex);

    if (this.rightControls) {
      this._rightControls.splice(index, 1);
    }
  }

  _createControls(controls) {
    return controls.map(controlProps => ({
      backgroundType: 'fill',
      centerInParent: true,
      ...controlProps
    }));
  }

  _createContentItems(contentItems) {
    const newContentItems = contentItems.map(itemProps => ({
      ...itemProps,
      centerInParent: true
    }));

    return newContentItems;
  }

  _setLeftControls(leftControls) {
    this._leftControls = this._createControls(leftControls);
    this._lastLeftControlIndex = leftControls.length - 1;
    this._updateContent();
  }

  _getLeftControls() {
    return this._leftControls;
  }

  _setRightControls(rightControls) {
    this._rightControls = this._createControls(rightControls);
    this._updateContent();
  }

  _getRightControls() {
    return this._rightControls;
  }

  _getContentItems() {
    return this._contentItems;
  }

  _setContentItems(items) {
    this._contentItems = this._createContentItems(items);
    this._lastItemIndex = this._lastLeftControlIndex + items.length;
    this._updateContent();
  }

  _getLeftControlItems() {
    if (this.leftControls.length) {
      return this.items.slice(0, this._lastLeftControlIndex + 1);
    }
    return [];
  }

  _getContentItemItems() {
    if (this.contentItems.length) {
      return this.items.slice(
        this._lastLeftControlIndex + 1,
        this._lastItemIndex + 1
      );
    }
    return [];
  }

  _getRightControlItems() {
    if (this.rightControls.length) {
      const leftSiblingIndex =
        this._lastItemIndex || this._lastLeftControlIndex;
      return leftSiblingIndex
        ? this.items.slice(leftSiblingIndex + 1)
        : this.items;
    }
    return [];
  }

  set leftControls(leftControls) {
    this._setLeftControls(leftControls);
  }

  get leftControls() {
    return this._getLeftControls();
  }

  set rightControls(rightControls) {
    this._setRightControls(rightControls);
  }

  get rightControls() {
    return this._getRightControls();
  }

  set contentItems(items) {
    this._setContentItems(items);
  }

  get contentItems() {
    return this._getContentItems();
  }

  set lazyLoadBuffer(lazyLoadBuffer) {
    this._lazyLoadBuffer = lazyLoadBuffer;
    this._getMoreItems();
  }

  get lazyLoadBuffer() {
    return this._lazyLoadBuffer;
  }
}

export default withExtensions(ControlRow);
