import lng from '@lightningjs/core';
import FocusManager from '../FocusManager';
import type { StylePartial } from '../../types/lui';

import Column, { ColumnStyles } from './Column';

type TransitionObject = {
  delay: number;
  duration: number;
  timingFunction: string;
};

export type ColumnStyles = {
  itemSpacing: number;
  scrollIndex: number;
  alwaysScroll: boolean;
  neverScroll: boolean;
  itemTransition: TransitionObject;
};

export default class Column extends FocusManager {
  itemSpacing?: number;
  scrollIndex?: number;
  alwaysScroll?: boolean;
  neverScroll?: boolean;
  autoResizeWidth?: boolean;
  autoResizeHeight?: boolean;
  plinko?: boolean;
  itemPosX?: number;
  itemPosY?: number;
  get style(): ColumnStyles;
  set style(v: StylePartial<ColumnStyles>);

  shouldScrollUp(): boolean;
  shouldScrollDown(): boolean;
  checkSkipPlinko(prev: lng.Component, next: lng.Component): lng.Component;
  scrollTo(index: number, duration: number): void;
  onScreenEffect(): void;
  transitionDone(): void;

  $removeItem(item: lng.Component): void;
  $columnChanged(): void;
}