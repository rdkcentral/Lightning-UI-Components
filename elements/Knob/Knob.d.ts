import Base from '../../Base';
import type { Color, StylePartial } from '../../types/lui';

export type KnobStyles = {
  circleColor: Color;
  circleSize: number;
};

export default class Knob extends Base {
  get style(): KnobStyles;
  set style(v: StylePartial<KnobStyles>);
}
