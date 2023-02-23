import lng from '@lightningjs/core';
import { Color, StylePartial } from '@lightningjs/ui-components';
import ListItem, { ListItemStyle } from '.';

export type ListItemPickerStyle = ListItemStyle & {
  arrowAlphaValue: number;
  arrowAlphaValueLimit: number;
  arrowWidth: number;
  arrowHeight: number;
  arrowColor: Color;
  iconLeftSrc: string;
  iconRightSrc: string;
};

export default class ListItemPicker extends ListItem {
  options?: Record<string, unknown>;
  selectedIndex?: number;
  get selectedOption(): Record<string, unknown>; // TODO is this correct?
  get style(): ListItemPickerStyle;
  set style(v: StylePartial<ListItemPickerStyle>);

  // tags
  get _LeftArrow(): lng.Component;
  get _RightArrow(): lng.Component;
  get _Picker(): lng.Component;
}
