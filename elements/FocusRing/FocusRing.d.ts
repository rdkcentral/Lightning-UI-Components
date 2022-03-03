import type { Base } from '../../Base';

declare class FocusRingStyles {
  radius?: number;
  borderWidth?: number;
  color?: number;
  secondaryColor?: number;
  transitionColor?: number;
  colorTransitionAlpha?: number;
  shouldAnimate?: boolean;
  spacing?: number;
  animationDuration?: number;
}

export declare class FocusRing extends Base {
  startAnimation(): void;
  stopAnimation(): void;
  style: FocusRingStyles;
}
