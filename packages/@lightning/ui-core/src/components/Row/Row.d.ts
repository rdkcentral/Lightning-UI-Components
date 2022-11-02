import FocusManager from '../FocusManager';
import type { StylePartial } from '../../types/lui';
import Row, { RowStyles } from './Row';

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
  get style(): RowStyles;
  set style(v: StylePartial<RowStyles>);

  shouldScrollLeft(): boolean;
  shouldScrollRight(): boolean;
  onScreenEffect(): void;
  transitionDone(): void;

  $itemChanged(): void;
}