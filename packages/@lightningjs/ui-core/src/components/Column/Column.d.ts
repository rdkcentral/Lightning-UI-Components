import lng from '@lightningjs/core';
import NavigationManager from '../NavigationManager';
import type { StylePartial } from '../../types/lui';

type TransitionObject = {
  delay: number;
  duration: number;
  timingFunction: string;
};

export type ColumnStyle = {
  itemSpacing: number;
  scrollIndex: number;
  alwaysScroll: boolean;
  neverScroll: boolean;
  itemTransition: TransitionObject;
};

export default class Column extends NavigationManager {
  plinko?: boolean;
  itemPosX?: number;
  itemPosY?: number;
  get style(): ColumnStyle;
  set style(v: StylePartial<ColumnStyle>);

  checkSkipPlinko(prev: lng.Component, next: lng.Component): lng.Component;
  onScreenEffect(): void;

  $removeItem(item: lng.Component): void;
  $columnChanged(): void;
}
