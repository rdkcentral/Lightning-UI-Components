import lng from '@lightningjs/core';
import Base from '../Base';
import type { StylePartial } from '../../types/lui';
import type { TextBoxStyles } from '../TextBox';

export type ScrollWrapperStyles = {
  textStyle: TextBoxStyles;
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
};

export default class ScrollWrapper extends Base {
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
  get style(): ScrollWrapperStyles;
  set style(v: StylePartial<ScrollWrapperStyles>);

  // tags
  get _FadeContainer(): lng.Component;
  get _Slider(): lng.Component;
  get _ScrollContainer(): lng.Component;
  get _ScrollableText(): lng.Component;
}
