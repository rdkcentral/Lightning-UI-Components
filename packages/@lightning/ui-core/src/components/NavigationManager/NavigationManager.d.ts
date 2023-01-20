import lng from '@lightningjs/core';
import type { StylePartial } from '../../types/lui';
import FocusManager from '../FocusManager';

type TransitionObject = {
  delay: number;
  duration: number;
  timingFunction: string;
};

type DirectionProps = {
  axis: string;
  crossAxis: string;
  lengthDimension: string;
  crossDimension: string;
  innerCrossDimension: string;
};

export type NavigationManagerStyles = {
  alwaysScroll: boolean;
  itemSpacing: number;
  itemTransition: TransitionObject;
  neverScroll: boolean;
  scrollIndex: number;
};

export default class NavigationManager extends FocusManager {
  alwaysScroll?: boolean;
  neverScroll?: boolean;
  scrollIndex?: number;
  autoResizeWidth?: boolean;
  autoResizeHeight?: boolean;

  get style(): NavigationManagerStyles;
  set style(v: StylePartial<NavigationManagerStyles>);

  protected _initComponentSize(): void;
  protected _updateLayout(): void;

  $itemChanged(): void;

  updatePositionOnAxis(item: lng.Component, position: number): void;
  scrollTo(index: number, duration: number): void;
  transitionDone(): void;
  shouldScrollLeft(): boolean;
  shouldScrollRight(): boolean;
  shouldScrollUp(): boolean;
  shouldScrollDown(): boolean;

  get _directionPropNames(): DirectionProps;
  get _canScrollBack(): boolean;
  get _canScrollNext(): boolean;
  get _isColumn(): boolean;
  get _isRow(): boolean;
  protected _getAlwaysScroll: boolean;
  protected _getNeverScroll: boolean;
  protected _getScrollIndex: number;
}
