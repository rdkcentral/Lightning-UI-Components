import { Slider } from '@lightning/ui-core';
import { SliderStyle, StylePartial } from '@lightning/ui-core';

// TODO make sure this is right
export type NestedSliderStyle = SliderStyle & {
  innerCircleSize: number;
};

export default class NestedSlider extends Slider {
  get style(): NestedSliderStyle;
  set style(v: StylePartial<NestedSliderStyle>);
}
