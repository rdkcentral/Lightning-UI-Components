import Base from '../../Base';
import { WithThemeStylesConstructor } from '../../mixins/withThemeStyles';
import lng from '@lightningjs/core';

export interface FocusRingStyles {
  animationDuration?: number;
  borderWidth?: number;
  color?: number;
  colorTransitionAlpha?: number;
  radius?: lng.Tools.CornerRadius;
  secondaryColor?: number;
  shouldAnimate?: boolean;
  spacing?: number;
  transitionColor?: number;
}

declare const FocusRing_base: WithThemeStylesConstructor<
  typeof Base,
  FocusRingStyles
>;

export default class FocusRing extends FocusRing_base {
  startAnimation(): void;
  stopAnimation(): void;
}
