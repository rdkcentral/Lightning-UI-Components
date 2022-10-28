import Base from '../../Base';
import type { Color, StylePartial } from '../../types/lui';
import type { ProgressBarStyles } from '../ProgressBar';

export type SliderStyles = {
  arrowAlphaValue: number;
  arrowAlphaValueLimit: number;
  arrowColor: Color;
  arrowHeight: number;
  arrowSpacing: number;
  arrowWidth: number;
  containerHeight: number;
  innerCircleSize: number;
  minWidth: number;
  progressBarStyles: ProgressBarStyles;
  sliderHeight: number;
  strokeWidth: number;
  circleAnimation: {
    timingFunction: string;
    duration: number;
    delay: number;
  };
};

export default class Slider extends Base {
  max?: number;
  min?: number;
  step?: number;
  value?: number;
  get style(): SliderStyles;
  set style(v: StylePartial<SliderStyles>);
}
