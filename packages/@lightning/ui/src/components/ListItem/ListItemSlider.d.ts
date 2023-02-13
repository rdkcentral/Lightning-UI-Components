import lng from '@lightningjs/core';
import { TextBoxStyle, StylePartial } from '@lightning/ui-core';
import ListItem, { ListItemStyle } from '.';

export type ListItemSliderStyle = ListItemStyle & {
  paddingY: number;
  valueTextStyle: TextBoxStyle;
};
export default class ListItemSlider extends ListItem {
  slider?: Record<string, unknown>;
  value?: string;
  get style(): ListItemSliderStyle;
  set style(v: StylePartial<ListItemSliderStyle>);

  // tags
  get _Slider(): lng.Component;
  get _Value(): lng.Component;
}
