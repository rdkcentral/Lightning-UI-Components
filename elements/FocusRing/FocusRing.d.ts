import type { Base } from '../../Base';

declare class FocusRingStyles {
  borderWidth?: number;
  color?: number;
  colorTransitionAlpha?: number;
  radius?: number;
  secondaryColor?: number;
  shouldAnimate?: boolean;
  spacing?: number;
  transitionColor?: number;
}

export declare class FocusRing extends Base {
  startAnimation(): void;
  stopAnimation(): void;
  style: FocusRingStyles;
}