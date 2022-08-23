import Base from '../../Base';
import { WithThemeStylesConstructor } from '../../mixins/withThemeStyles';
import type { Tools } from '@lightningjs/core';

export interface GradientStyles {
  gradientTop?: string;
  gradientColor?: number;
  radius?: Tools.CornerRadius;
}

declare const Gradient_base: WithThemeStylesConstructor<
  typeof Base,
  GradientStyles
>;

export default class Gradient extends Gradient_base {
  style?: GradientStyles;
}
