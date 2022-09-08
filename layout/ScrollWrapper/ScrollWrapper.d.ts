import lng from '@lightningjs/core';
import type { __TextType } from '@lightningjs/core';
import Base from '../../Base';
import { WithThemeStylesConstructor } from '../../mixins/withThemeStyles';

export interface ScrollWrapperStyles {
  text: __TextType;
  scrollBarW: number;
  scrollBarH: number;
  fadeHeight: 100;
  scroll: {
    timingFunction: string;
    duration: number;
  };
  contentMarginTop: number;
  contentMarginLeft: number;
  sliderMarginLeft: number;
}

declare const ScrollWrapper_base: WithThemeStylesConstructor<
  typeof Base,
  ScrollWrapperStyles
>;

export default class ScrollWrapper extends ScrollWrapper_base {
  autoScroll?: boolean;
  autoScrollDelay?: number;
  autoScrollSpeed?: number;
  content?: string | (string | lng.Component)[];
  fadeContent?: boolean;
  scrollDuration?: number;
  scrollStep?: number;
  showScrollBar?: boolean;
  shouldWrap?: boolean;
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
}
