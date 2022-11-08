import ListItemBase, { ListItemBaseStyles } from '.';
import { SliderStyles, StylePartial } from '@lightning/ui-core';

export type ListItemSliderStyles = ListItemBaseStyles & {
  paddingY: number;
  sliderStyles: SliderStyles;
};
export default class ListItemSlider extends ListItemBase {
  slider?: Record<string, unknown>;
  value?: string;
  get style(): ListItemSliderStyles;
  set style(v: StylePartial<ListItemSliderStyles>);
}
