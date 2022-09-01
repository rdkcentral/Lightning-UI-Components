import Base from '../../Base';
import { WithThemeStylesConstructor } from '../../mixins/withThemeStyles';

export interface DistractorStyles {
  alpha1?: number;
  alpha2?: number;
  alpha3?: number;
  circleColor?: string;
  circleSize?: number;
  scale1?: number;
  scale2?: number;
  scale3?: number;
  smoothness?: number;
}

declare const Distractor_base: WithThemeStylesConstructor<
  typeof Base,
  DistractorStyles
>;

export default class Distractor extends Distractor_base {
  style: DistractorStyles;
}
