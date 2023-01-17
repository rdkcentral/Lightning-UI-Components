import lng from '@lightningjs/core';
import Base from '../Base';
import type { StylePartial } from '../../types/lui';

export type MarqueeStyles = {
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
  get style(): MarqueeStyles;
  set style(v: StylePartial<MarqueeStyles>);

  // tags
  get _ContentClipper(): lng.Component;
  get _ContentBox(): lng.Component;
  get _Content(): lng.Component;
  get _ContentLoopTexture(): lng.Component;
}
