import lng from '@lightningjs/core';
import Base from '../Base';
import type { StylePartial } from '../../types/lui';

export type MarqueeStyle = {
  fadeW: number;
  offset: number;
  shouldSmooth: boolean;
};

export default class Marquee extends Base {
  autostart?: boolean;
  centerAlign?: boolean;
  contentTexture?: lng.Texture;
  delay?: number;
  repeat?: number;
  title?: string;
  get style(): MarqueeStyle;
  set style(v: StylePartial<MarqueeStyle>);

  // tags
  get _ContentClipper(): lng.Component;
  get _ContentBox(): lng.Component;
  get _Content(): lng.Component;
  get _ContentLoopTexture(): lng.Component;
}
