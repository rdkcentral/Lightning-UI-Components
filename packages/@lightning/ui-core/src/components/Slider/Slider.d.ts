import lng from '@lightningjs/core';
import Base from '../Base';
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
  minWidth: number;
  progressBarStyles: ProgressBarStyles;
  sliderHeight: number;
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

  // tags
  get _Container(): lng.Component;
  get _SliderBar(): lng.Component;
  get _Bar(): lng.Component;
  get _Circle(): lng.Component;
  get _LeftArrow(): lng.Component;
  get _RightArrow(): lng.Component;
}
