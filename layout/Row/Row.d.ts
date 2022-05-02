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
  autoResize?: boolean;
  styles?: RowStyles;

  get itemPosX(): number;
  set itemPosX(x: number);
  get itemPosY(): number;
  set itemPosY(y: number);

  shouldScrollLeft(): boolean;
  shouldScrollRight(): boolean;
  onScreenEffect(): void;
  transitionDone(): void;

  $itemChanged(): void;
}
