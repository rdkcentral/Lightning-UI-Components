import Base from '../../Base';
import { WithThemeStylesConstructor } from '../../mixins/withThemeStyles';

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

declare const FocusRing_base: WithThemeStylesConstructor<
  typeof Base,
  FocusRingStyles
>;

export default class FocusRing extends FocusRing_base {
  startAnimation(): void;
  stopAnimation(): void;
}
