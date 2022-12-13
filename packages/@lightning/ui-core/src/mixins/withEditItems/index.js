export default function (Base) {
  return class extends Base {
    _init() {
      super._init();
      this.isEditing = false;
    }

    toggleEdit() {
      this.isEditing = !this.isEditing;
    }

    _swapItemArrayPos(array, current, previous) {
      [array[current], array[previous]] = [array[previous], array[current]];
      super.selectedIndex = current;
    }

    _unfocus() {
      this.isEditing = false;
      super._unfocus();
    }

    get selectedIndex() {
      return this._selectedIndex;
    }
    set selectedIndex(index) {
      if (!this.isEditing) {
        super.selectedIndex = index;
        return;
      }
      if (
        this.selectedIndex >= this.items.length - 1 &&
        index > this.selectedIndex
      ) {
        return;
      }
      const currentItem = this.selected;
      this.prevSelected = currentItem;
      const nextItem = this.items[index];
      const previousIndex = this.selectedIndex;
      const oldPosX = currentItem.transition('x')
        ? currentItem.transition('x').targetValue
        : currentItem.x;
      const oldPosY = currentItem.transition('y')
        ? currentItem.transition('y').targetValue
        : currentItem.y;
      const newPosX = nextItem.transition('x')
        ? nextItem.transition('x').targetValue
        : nextItem.x;
      const newPosY = nextItem.transition('y')
        ? nextItem.transition('y').targetValue
        : nextItem.y;

      this._swapItemArrayPos(this.items, index, previousIndex);

      // self invoking async function that waits for setSmooth calls to complete before triggering
      // render and signaling selected changed event.
      // This allows time for items to be in their final position before the row component check world context
      // to identify items off screen to trigger scrolling
      (async () => {
        await currentItem.setSmooth('x', newPosX);
        await currentItem.setSmooth('y', newPosY);
        await nextItem.setSmooth('x', oldPosX);
        await nextItem.setSmooth('y', oldPosY);
        if (
          !this.Items.children.length ||
          !this.Items.children[index] ||
          !this.Items.children[index].skipFocus
        ) {
          if (this.selected) {
            this._selectedIndex = index;
            this.render(this.selected, this.prevSelected);
            this.signal('selectedChange', this.selected, this.prevSelected);
          }
          // Don't call refocus until after a new render in case of a situation like Plinko nav
          // where we don't want to focus the previously selected item and need to get the new one first
          this._refocus();
        }
      })();
    }
  };
}
