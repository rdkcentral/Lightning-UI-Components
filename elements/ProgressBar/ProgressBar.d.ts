import type { Base } from '../../Base';

declare class ProgressBarStyles {
  h?: number;
  radius?: number;
  progressColor?: string;
  barColor?: string;
  animationCurve?: string;
  animationDelay?: number;
  animationDuration?: number;
}

export declare class ProgressBar extends Base {
  progress: string;
  style?: ProgressBarStyles;
}
