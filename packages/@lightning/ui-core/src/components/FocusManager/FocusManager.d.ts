import lng from '@lightningjs/core';
import Base from '../Base';

export default class FocusManager extends Base {
  protected _selectedChange(
    selected: lng.Component | undefined,
    prevSelected: lng.Component | undefined
  ): void;
  protected _selectedIndex: number;

  direction?: string;
  set items(
    items: Array<
      lng.Component.NewPatchTemplate<typeof lng.Component> | lng.Component
    >
  );
  get items(): Array<
    lng.Component.NewPatchTemplate<typeof lng.Component> | lng.Component
  >;
  get Items(): lng.Element;

  get selected(): lng.Component;
  get selectedIndex(): number;
  set selectedIndex(index: number);
  get fullyOnScreenItems(): Array<lng.Component>;

  appendItems(
    items: Array<lng.Component.NewPatchTemplate<typeof lng.Component>>
  ): void;
  appendItemsAt(
    items: Array<lng.Component.NewPatchTemplate<typeof lng.Component>>,
    idx: number
  ): void;
  prependItems(
    items: Array<lng.Component.NewPatchTemplate<typeof lng.Component>>
  ): void;
  removeItemAt(idx: number): void;
  render(): void;
  selectPrevious(): void;
  selectNext(): void;
}
