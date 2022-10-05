import Base from '../../Base';
import type lng from '@lightningjs/core';
import { WithThemeStylesConstructor } from '../../mixins/withThemeStyles';

export interface ShadowStyles {
  offsetX?: number;
  offsetY?: number;
  blur?: number;
  spread?: number;
  alpha?: number;
  radius?: lng.Tools.CornerRadius;
  color?: number | string;
}

declare const Shadow_base: WithThemeStylesConstructor<
  typeof Base,
  ShadowStyles
>;

export default class Shadow extends Shadow_base {
  maskShadow?: boolean;
}
