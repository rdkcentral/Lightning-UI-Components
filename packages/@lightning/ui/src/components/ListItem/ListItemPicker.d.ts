import lng from '@lightningjs/core';
import { StylePartial } from '@lightning/ui-core';
import ListItem, { ListItemStyle } from '.';

export type ListItemPickerStyle = ListItemStyle & {
  arrowAlphaValue: number;
  arrowAlphaValueLimit: number;
  arrowWidth: number;
  arrowHeight: number;
  paddingY: number;
};

export default class ListItemPicker extends ListItem {
  options?: Record<string, unknown>;
  selectedOptionIndex?: string;
  get selectedOption(): Record<string, unknown>; // TODO is this correct?
  get selectedIndex(): number;
  get style(): ListItemPickerStyle;
  set style(v: StylePartial<ListItemPickerStyle>);

  // tags
  get _LeftArrow(): lng.Component;
  get _RightArrow(): lng.Component;
  get _Picker(): lng.Component;
}
