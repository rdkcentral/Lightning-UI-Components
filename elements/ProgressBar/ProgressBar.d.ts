import type { Base } from '../../Base';

export interface ProgressBarStyles {
  h?: number;
  radius?: number;
  progressColor?: string;
  barColor?: string;
  animationCurve?: string;
  animationDelay?: number;
  animationDuration?: number;
}

export default class ProgressBar extends Base {
  progress: string;
  style?: ProgressBarStyles;
}
