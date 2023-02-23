import type lng from '@lightningjs/core';
import type { StylePartial } from '../../types/lui';
import TitleRow, { TitleRowStyle } from '../TitleRow';

export type ControlRowStyle = TitleRowStyle & {
  extraItemSpacing: number;
};

type ControlRowItem = Array<
  lng.Component.NewPatchTemplate<typeof lng.Component> | lng.Component
>;

export default class ControlRow extends TitleRow {
  leftControls?: ControlRowItem;
  contentItems?: ControlRowItem;
  rightControls?: ControlRowItem;
  extraItemSpacing?: number;
  get style(): ControlRowStyle;
  set style(v: StylePartial<ControlRowStyle>);

  loadMoreItems(): void;
  addContentItems(items: ControlRowItem[]);
  addContentItemsAt(items: ControlRowItem[], index: number);
  removeContentItemsAt(index: number);
  addLeftControls(items: ControlRowItem[]);
  addLeftControlsAt(items: ControlRowItem[], index: number);
  removeLeftControlsAt(index: number);
  addRightControls(items: ControlRowItem[]);
  addRightControlsAt(items: ControlRowItem[], index: number);
  removeRightControlsAt(index: number);
}
