import lng from '@lightningjs/core';
import { Base } from '@lightning/ui-core';
import type { Color, StylePartial } from '@lightning/ui-core';

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

  // tags
  get _Ring(): lng.Component;
}
