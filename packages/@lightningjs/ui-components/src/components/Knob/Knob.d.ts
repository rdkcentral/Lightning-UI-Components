import lng from '@lightningjs/core';
import Base from '../Base';
import type { Color, StylePartial } from '../../types/lui';

export type KnobStyle = {
  circleColor: Color;
  radius: lng.Tools.CornerRadius;
};

export default class Knob extends Base {
  get style(): KnobStyle;
  set style(v: StylePartial<KnobStyle>);

  // tags
  get _Circle(): lng.Component;
}
