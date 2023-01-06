import lng from '@lightningjs/core';
import Base from '../Base';
import type { Color, StylePartial } from '../../types/lui';

export type KnobStyles = {
  circleColor: Color;
  radius: lng.Tools.CornerRadius;
};

export default class Knob extends Base {
  get style(): KnobStyles;
  set style(v: StylePartial<KnobStyles>);
}
