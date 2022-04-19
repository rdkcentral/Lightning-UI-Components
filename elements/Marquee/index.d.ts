import lng from '@lightningjs/core';
import Base from '../../Base';
import { WithThemeStylesConstructor } from '../../mixins/withThemeStyles';

export interface MarqueeStyles {
  fadeW?: number;
  shouldSmooth?: boolean;
  offset?: number;
}

declare const Marquee_base: WithThemeStylesConstructor<
  typeof Base,
  MarqueeStyles
>;

export default class Marquee extends Marquee_base {
  title?: string;
  contentTexture?: lng.__ElementPatchObj;
  centerAlign?: boolean;
  autostart?: boolean;
  delay?: number;
  repeat?: number;
  style?: MarqueeStyles;
}
