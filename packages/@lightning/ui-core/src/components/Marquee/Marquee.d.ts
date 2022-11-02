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
}
