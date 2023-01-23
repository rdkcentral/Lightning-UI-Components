import lng from '@lightningjs/core';
import Base from '../Base';
import type { Color, StylePartial } from '../../types/lui';

export type GradientStyle = {
  gradientTop: string;
  gradientColor: Color;
  radius: lng.Tools.CornerRadius;
};

export default class Gradient extends Base {
  get style(): GradientStyle;
  set style(v: StylePartial<GradientStyle>);
}
