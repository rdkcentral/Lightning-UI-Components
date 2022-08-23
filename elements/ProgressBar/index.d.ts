import Base from '../../Base';
import { WithThemeStylesConstructor } from '../../mixins/withThemeStyles';
import { Tools } from '@lightningjs/core';

export interface ProgressBarStyles {
  animationCurve?: string;
  animationDelay?: number;
  animationDuration?: number;
  barColor?: string;
  progressColor?: string;
  radius?: Tools.CornerRadius;
}

declare const ProgressBar_base: WithThemeStylesConstructor<
  typeof Base,
  ProgressBarStyles
>;

export default class ProgressBar extends ProgressBar_base {
  progress: string;
}
