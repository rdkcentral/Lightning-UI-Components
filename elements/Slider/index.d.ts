import Base from '../../Base';
import { WithThemeStylesConstructor } from '../../mixins/withThemeStyles';
import { ProgressBarStyles } from '../ProgressBar';

export interface SliderStyles {
  arrowAlphaValue?: number;
  arrowAlphaValueLimit?: number;
  arrowColor?: string;
  arrowHeight?: number;
  arrowSpacing?: number;
  arrowWidth?: number;
  containerHeight?: number;
  innerCircleSize?: number;
  minWidth?: number;
  progressBarStyles?: ProgressBarStyles;
  sliderHeight?: number;
  strokeWidth?: number;
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
