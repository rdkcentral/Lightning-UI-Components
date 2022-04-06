import type Base from '../../Base';
import type ProgressBar from '../ProgressBar';
import SliderLarge from '.';
import Knob from '../Knob';

export interface SliderStyles extends ProgressBar, Knob {
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

class Slider extends Base {
  max?: number;
  min?: number;
  step?: number;
  style?: SliderStyles;
  value?: number;
}
export { Slider as default, SliderLarge };
