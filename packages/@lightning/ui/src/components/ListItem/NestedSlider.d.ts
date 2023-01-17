import { Slider } from '@lightning/ui-core';
import { SliderStyles, StylePartial } from '@lightning/ui-core';

// TODO make sure this is right
export type NestedSliderStyles = SliderStyles & {
  innerCircleSize: number;
};

export default class NestedSlider extends Slider {
  get style(): NestedSliderStyles;
  set style(v: StylePartial<NestedSliderStyles>);
}
