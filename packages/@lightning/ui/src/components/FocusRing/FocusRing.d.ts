import lng from '@lightningjs/core';
import { Base } from '@lightning/ui-core';
import type { Color, StylePartial } from '@lightning/ui-core';

export type FocusRingStyle = {
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
  get style(): FocusRingStyle;
  set style(v: StylePartial<FocusRingStyle>);

  // tags
  get _Ring(): lng.Component;
}
