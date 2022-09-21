import Base from '../../Base';
import { WithThemeStylesConstructor } from '../../mixins/withThemeStyles';
import lng from '@lightningjs/core';

export interface GradientStyles {
  gradientTop?: string;
  gradientColor?: number;
  radius?: lng.Tools.CornerRadius;
}

declare const Gradient_base: WithThemeStylesConstructor<
  typeof Base,
  GradientStyles
>;

export default class Gradient extends Gradient_base {
  style: GradientStyles;
}
