import lng from '@lightningjs/core';
import Base from '../../Base';

export default class FocusManager extends Base {
  protected _selectedChange(
    selected: lng.Component | undefined,
    prevSelected: lng.Component | undefined
  );
  protected _selectedIndex: number;

  direction?: string;
  set items(items: Array<lng.__ComponentPatchObj> | Array<lng.Component>);
  get items(): Array<lng.Component>;
  get Items(): lng.Element;

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
