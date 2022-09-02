import lng from '@lightningjs/core';
import Base from '../../Base';

export default class FocusManager extends Base {
  direction?: string;
  items?: Array<lng.Component>;

  get selected(): lng.Component;
  get selectedIndex(): number;
  set selectedIndex(index: number);
  get fullyOnScreenItems(): Array<lng.Component>;

  appendItems(items: Array<lng.Component>): void;
  render(): void;
  selectPrevious(): void;
  selectNext(): void;
}
