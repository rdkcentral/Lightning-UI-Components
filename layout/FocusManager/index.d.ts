import lng from '@lightningjs/core';
import Base from '../../Base';

export default class FocusManager extends Base {
  protected _selectedChange(
    selected: Array<lng.Component>,
    prevSelected: Array<lng.Component>
  );

  direction?: string;
  set items(items: Array<lng.__ComponentPatchObj> | Array<lng.Component>);
  get items(): Array<lng.Component>;

  get selected(): lng.Component;
  get selectedIndex(): number;
  set selectedIndex(index: number);
  get fullyOnScreenItems(): Array<lng.Component>;

  appendItems(items: Array<lng.__ComponentPatchObj>): void;
  appendItemsAt(items: Array<lng.__ComponentPatchObj>, idx: number): void;
  prependItems(items: Array<lng.__ComponentPatchObj>): void;
  removeItemAt(idx: number): void;
  render(): void;
  selectPrevious(): void;
  selectNext(): void;
}
