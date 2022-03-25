import type Base from '../../Base';

export interface FocusRingStyles {
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

export default class FocusRing extends Base {
  startAnimation(): void;
  stopAnimation(): void;
  style: FocusRingStyles;
}
