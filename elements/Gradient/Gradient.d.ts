import lng from '@lightningjs/core';
import Base from '../../Base';
import type { Color, StylePartial } from '../../types/lui';

export type GradientStyles = {
  gradientTop: string;
  gradientColor: Color;
  radius: lng.Tools.CornerRadius;
};

export default class Gradient extends Base {
  get style(): GradientStyles;
  set style(v: StylePartial<GradientStyles>);
}
