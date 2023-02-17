import Slider, { SliderStyle } from '../Slider';
import type { StylePartial } from '../../types/lui';

// TODO make sure this is right
export type NestedSliderStyle = SliderStyle & {
  innerCircleSize: number;
};

export default class NestedSlider extends Slider {
  get style(): NestedSliderStyle;
  set style(v: StylePartial<NestedSliderStyle>);
}
