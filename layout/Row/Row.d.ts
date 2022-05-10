import lng from '@lightningjs/core';
import { FocusManager } from '../FocusManager/FocusManager';

type transitionObject = {
  delay: number;
  duration: number;
  timingFunction: string;
};

declare class RowStyles {
  itemSpacing?: number;
  scrollIndex?: number;
  alwaysScroll?: boolean;
  neverScroll?: boolean;
  itemTransition?: transitionObject;
}

export declare class Row extends FocusManager {
  itemSpacing?: number;
  scrollIndex?: number;
  alwaysScroll?: boolean;
  neverScroll?: boolean;
  lazyScroll?: boolean;
  autoResizeWidth?: boolean;
  autoResizeHeight?: boolean;
  styles?: RowStyles;

  get itemPosX(): number;
  set itemPosX(x: number);
  get itemPosY(): number;
  set itemPosY(y: number);

  shouldScrollLeft(): boolean;
  shouldScrollRight(): boolean;
  onScreenEffect(): void;
  transitionDone(): void;
  appendItemsAt(items: lng.Component[], index: number): void;
  prependItems(items: lng.Component[]): void;
  removeItemAt(index: number): void;

  $itemChanged(): void;
}
