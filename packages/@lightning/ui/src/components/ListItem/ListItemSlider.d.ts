import ListItem, { ListItemStyles } from '.';
import { SliderStyles, StylePartial } from '@lightning/ui-core';

export type ListItemSliderStyles = ListItemStyles & {
  paddingY: number;
  sliderStyles: SliderStyles;
};
export default class ListItemSlider extends ListItem {
  slider?: Record<string, unknown>;
  value?: string;
  get style(): ListItemSliderStyles;
  set style(v: StylePartial<ListItemSliderStyles>);
}
