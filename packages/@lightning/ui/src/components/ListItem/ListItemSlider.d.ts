import lng from '@lightningjs/core';
import { SliderStyles, StylePartial } from '@lightning/ui-core';
import ListItem, { ListItemStyles } from '.';

export type ListItemSliderStyles = ListItemStyles & {
  paddingY: number;
  sliderStyles: SliderStyles;
};
export default class ListItemSlider extends ListItem {
  slider?: Record<string, unknown>;
  value?: string;
  get style(): ListItemSliderStyles;
  set style(v: StylePartial<ListItemSliderStyles>);

  // tags
  get _Slider(): lng.Component;
  get _Value(): lng.Component;
}
