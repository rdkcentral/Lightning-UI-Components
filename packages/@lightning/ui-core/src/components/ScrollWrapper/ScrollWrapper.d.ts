import lng from '@lightningjs/core';
import Base from '../Base';
import type { StylePartial } from '../../types/lui';
import type { TextBoxStyle } from '../TextBox';

export type ScrollWrapperStyle = {
  textStyle: TextBoxStyle;
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
  get style(): ScrollWrapperStyle;
  set style(v: StylePartial<ScrollWrapperStyle>);

  // tags
  get _FadeContainer(): lng.Component;
  get _Slider(): lng.Component;
  get _ScrollContainer(): lng.Component;
  get _ScrollableText(): lng.Component;
}
