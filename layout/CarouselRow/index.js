import lng from '@lightningjs/core';
import withUpdates from '../../mixins/withUpdates';
import withTags from '../../mixins/withTags';
class CarouselRow extends lng.Component {
  static _template() {
    return {
      Items: {}
    };
  }

  static get properties() {
    return ['items'];
  }

  static get tags() {
    return ['Items'];
  }

  get _itemTransition() {
    return (
      this.itemTransition || {
        duration: this._duration,
        timingFunction: 'cubic-bezier(0.20, 1.00, 0.30, 1.00)'
      }
    );
  }

  _setItems(items) {
    this._itemsCache = items; // This will be the source of truth for the carousel order
    this._Items.childList.clear();
    this._Items.childList.a(items);
    // Set focus on the first element
    this._focusedElement = this._Items.childList.first;
    this._updateRowLayout();
    // Get the tallest item and set height of component
    this.h = Math.max(...items.map(item => item.h));
    return items;
  }

  _construct() {
    super._construct();
    this._itemsCache = [];
    this._focusedElement = null;
    this._itemSpacing = 20; // Hardcoded for now
    this._animating = false;
    this._duration = 0.5; // Hardcoded for now
  }

  _update() {}

  _handleRight() {
    if (this._animating) return;
    // TODO: Need to make sure more that one item here
    // Animate all items one space to the left the width of the first item plus the spacer
    // Create a clone of the first element and move it to the end
    this._animating = true;
    const firstClone = this._itemsCache.shift();
    // Make sure the itemCache is up to date
    this._itemsCache.push(firstClone);
    const lastItem = this._Items.childList.last;

    const firstCloneElement = this.stage.c({
      ...firstClone,
      x: lastItem.x + lastItem.w + this.itemSpacing,
      alpha: 0
    });
    this._Items.childList.add(firstCloneElement);
    this._focusedElement = this._Items.childList.getAt(1); // Update focus
    let count = 0;
    // First item will be removed. Markit it before looping
    this._Items.childList.first.forRemoval = true;
    this._Items.childList.forEach(child => {
      if (!child.forRemoval) count++;
      if (0 === count) {
        const transition = child.transition('x');
        // eslint-disable-next-line no-inner-declarations
        function removeOnFinished() {
          transition.off('finish', removeOnFinished);
          // Remove the item after its animated out of the grid
          this._Items.childList.remove(child);
          this._animating = false;
        }
        transition.on('finish', removeOnFinished.bind(this));
      }

      child.smooth = {
        x: [
          child.x - (firstClone.w + this.itemSpacing),
          { duration: this._duration }
        ],
        alpha: [0 === count ? 0 : 1, { duration: this._duration }] // Fade out the first item as it leaves the grid, it will be removed once complete in the callback
      };
    });
  }

  _handleLeft() {
    if (this._animating) return;
    // Clone the last element
    this._animating = true;
    const lastClone = this._itemsCache.pop();
    this._itemsCache.splice(0, 0, lastClone); //Keep the
    const firstCloneElement = this.stage.c({
      ...lastClone,
      x: -(lastClone.w + this.itemSpacing),
      alpha: 0
    });

    this._Items.childList.addAt(firstCloneElement, 0);
    // First item will be removed. Markit it before looping
    this._Items.childList.last.forRemoval = true;
    this._focusedElement = this._Items.childList.getAt(0);
    this._Items.childList.forEach((child, index) => {
      const isClone = index === this._Items.childList.length - 1;

      if (isClone) {
        const transition = child.transition('x');
        // eslint-disable-next-line no-inner-declarations
        function removeOnFinished() {
          transition.off('finish', removeOnFinished);
          // Remove the item after its animated out of the grid
          this._Items.childList.remove(child);
          this._animating = false;
        }
        transition.on('finish', removeOnFinished.bind(this));
      }

      child.smooth = {
        x: [
          child.x + (lastClone.w + this.itemSpacing),
          { duration: this._duration }
        ],
        alpha: [isClone ? 0 : 1, { duration: this._duration }] // Fade out the first item as it leaves the grid, it will be removed once complete in the callback
      };
    });
  }

  _updateRowLayout() {
    // Layout items in a row
    let nextX = 0;
    for (let i = 0; i < this._Items.children.length; i++) {
      if (i > 0) {
        const child = this._Items.children[i];

        nextX += child.w;
        if (i <= this._Items.children.length - 1) {
          nextX += this.itemSpacing;
        }

        child.patch({ x: nextX });
      }
    }
  }

  _getFocused() {
    return this._focusedElement;
  }
}

export default withUpdates(withTags(CarouselRow));
