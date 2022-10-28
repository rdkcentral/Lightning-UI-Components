import lng from '@lightningjs/core';
import Base from '../../Base';
import type { Color, StylePartial } from '../../types/lui';

export type ProgressBarStyles = {
  animationCurve: string;
  animationDelay: number;
  animationDuration: number;
  barColor: Color;
  progressColor: Color;
  radius: lng.Tools.CornerRadius;
};

export default class ProgressBar extends Base {
  progress: string;
  get style(): ProgressBarStyles;
  set style(v: StylePartial<ProgressBarStyles>);
}
