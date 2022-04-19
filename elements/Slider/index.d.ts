import Base from '../../Base';
import { WithThemeStylesConstructor } from '../../mixins/withThemeStyles';

export interface SliderStyles {
  arrowAlphaDisabled?: number;
  arrowAlphaValueLimit?: number;
  arrowAlphaValue?: number;
  arrowColor?: string;
  arrowHeight?: number;
  arrowSpacing?: number;
  arrowWidth?: number;
  containerHeight?: number;
  innerCircleSize?: number;
  sliderHeight?: number;
  strokeWidth?: number;
  minWidth?: number;
}

declare const Slider_base: WithThemeStylesConstructor<
  typeof Base,
  SliderStyles
>;

export default class Slider extends Slider_base {
  max?: number;
  min?: number;
  step?: number;
  value?: number;
}
