import ListItem, { ListItemStyles } from '.';
import { StylePartial } from '@lightning/ui-core';

export type ListItemPickerStyles = ListItemStyles & {
  arrowAlphaValue: number;
  arrowAlphaValueLimit: number;
  arrowWidth: number;
  arrowHeight: number;
  paddingY: number;
};

export default class ListItemPicker extends ListItem {
  options?: Record<string, unknown>;
  selectedOptionIndex?: string;
  get style(): ListItemPickerStyles;
  set style(v: StylePartial<ListItemPickerStyles>);
}
