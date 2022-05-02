import lng from '@lightningjs/core';
import { FocusManager } from '../FocusManager/FocusManager';

type transitionObject = {
  delay: number;
  duration: number;
  timingFunction: string;
};

declare class ColumnStyles {
  itemSpacing?: number;
  scrollIndex?: number;
  alwaysScroll?: boolean;
  neverScroll?: boolean;
  itemTransition?: transitionObject;
}

export declare class Column extends FocusManager {
  itemSpacing?: number;
  scrollIndex?: number;
  alwaysScroll?: boolean;
  neverScroll?: boolean;
  autoResize?: boolean;
  plinko?: boolean;
  styles?: ColumnStyles;

  get itemPosX(): number;
  set itemPosX(x: number);
  get itemPosY(): number;
  set itemPosY(y: number);

  shouldScrollUp(): boolean;
  shouldScrollDown(): boolean;
  checkSkipPlinko(prev: lng.Component, next: lng.Component): lng.Component;
  scrollTo(index: number, duration: number): void;
  onScreenEffect(): void;
  transitionDone(): void;

  $removeItem(item: lng.Component): void;
  $columnChanged(): void;
}
