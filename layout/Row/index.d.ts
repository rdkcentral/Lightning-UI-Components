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
  startLazyScrollIndex?: number;
  stopLazyScrollIndex?: number;
  style: RowStyles;

  shouldScrollLeft(): boolean;
  shouldScrollRight(): boolean;
  onScreenEffect(): void;
  transitionDone(): void;

  $itemChanged(): void;
}
