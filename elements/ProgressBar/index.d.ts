import Base from '../../Base';
import { WithThemeStylesConstructor } from '../../mixins/withThemeStyles';

export interface ProgressBarStyles {
  h?: number;
  radius?: number;
  progressColor?: string;
  barColor?: string;
  animationCurve?: string;
  animationDelay?: number;
  animationDuration?: number;
}

declare const ProgressBar_base: WithThemeStylesConstructor<
  typeof Base,
  ProgressBarStyles
>;

export default class ProgressBar extends ProgressBar_base {
  progress: string;
}
