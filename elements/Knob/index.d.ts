import Base from '../../Base';
import { WithThemeStylesConstructor } from '../../mixins/withThemeStyles';

export interface KnobStyles {
  circleColor?: string;
  circleSize?: number;
}

declare const Knob_base: WithThemeStylesConstructor<typeof Base, KnobStyles>;

export default class Knob extends Knob_base {}
