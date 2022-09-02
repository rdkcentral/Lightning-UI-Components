import lng from '@lightningjs/core';
import FocusManager from '../FocusManager';

type transitionObject = {
  delay: number;
  duration: number;
  timingFunction: string;
};

export interface RowStyles {
  itemSpacing?: number;
  scrollIndex?: number;
  alwaysScroll?: boolean;
  neverScroll?: boolean;
  itemTransition?: transitionObject;
}

export default class Row extends FocusManager {
  itemSpacing?: number;
  scrollIndex?: number;
  alwaysScroll?: boolean;
  neverScroll?: boolean;
  lazyScroll?: boolean;
  autoResizeWidth?: boolean;
  autoResizeHeight?: boolean;
  itemPosX?: number;
  itemPosY?: number;
  style: RowStyles;

  shouldScrollLeft(): boolean;
  shouldScrollRight(): boolean;
  onScreenEffect(): void;
  transitionDone(): void;
  appendItemsAt(items: lng.Component[], index: number): void;
  prependItems(items: lng.Component[]): void;
  removeItemAt(index: number): void;

  $itemChanged(): void;
}
