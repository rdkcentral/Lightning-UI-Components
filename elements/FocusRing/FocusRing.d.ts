import lng from '@lightningjs/core';
import Base from '../../Base';
import type { Color, StylePartial } from '../../types/lui';

export type FocusRingStyles = {
  animationDuration: number;
  borderWidth: number;
  color: Color;
  colorTransitionAlpha: number;
  radius: lng.Tools.CornerRadius;
  secondaryColor: Color;
  shouldAnimate: boolean;
  spacing: number;
  transitionColor: Color;
};

export default class FocusRing extends Base {
  startAnimation(): void;
  stopAnimation(): void;
  get style(): FocusRingStyles;
  set style(v: StylePartial<FocusRingStyles>);
}
