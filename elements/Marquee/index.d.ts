import lng from '@lightningjs/core';
import Base from '../../Base';
import { WithThemeStylesConstructor } from '../../mixins/withThemeStyles';

export interface MarqueeStyles {
  fadeW?: number;
  offset?: number;
  shouldSmooth?: boolean;
}

declare const Marquee_base: WithThemeStylesConstructor<
  typeof Base,
  MarqueeStyles
>;

export default class Marquee extends Marquee_base {
  autostart?: boolean;
  centerAlign?: boolean;
  contentTexture?: lng.__ElementPatchObj;
  delay?: number;
  repeat?: number;
  title?: string;
  style: MarqueeStyles;
}
