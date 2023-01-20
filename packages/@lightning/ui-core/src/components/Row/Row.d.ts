import NavigationManager from '../NavigationManager';
import type { StylePartial } from '../../types/lui';

type TransitionObject = {
  delay: number;
  duration: number;
  timingFunction: string;
};

export type RowStyles = {
  itemSpacing: number;
  scrollIndex: number;
  alwaysScroll: boolean;
  neverScroll: boolean;
  itemTransition: TransitionObject;
};

export default class Row extends NavigationManager {
  lazyScroll?: boolean;
  itemPosX?: number;
  itemPosY?: number;
  startLazyScrollIndex?: number;
  stopLazyScrollIndex?: number;
  get style(): RowStyles;
  set style(v: StylePartial<RowStyles>);

  onScreenEffect(): void;
}
