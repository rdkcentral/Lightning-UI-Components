import type Base from '../../Base';

export interface KnobStyles {
  circleColor?: string;
  circleSize?: number;
}

export default class Knob extends Base {
  style?: KnobStyles;
}
