import lng from '@lightningjs/core';
import Base from '../Base';
import type { Color, StylePartial } from '../../types/lui';

export type ProgressBarStyle = {
  animationCurve: string;
  animationDelay: number;
  animationDuration: number;
  barColor: Color;
  progressColor: Color;
  radius: lng.Tools.CornerRadius;
};

export default class ProgressBar extends Base {
  progress: string;
  get style(): ProgressBarStyle;
  set style(v: StylePartial<ProgressBarStyle>);

  // tags
  get _Bar(): lng.Component;
  get _Progress(): lng.Component;
}
