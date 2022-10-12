import type lng from '@lightningjs/core';
import TitleRow from '../TitleRow';
import type { TitleRowStyles } from '../TitleRow';

export interface ControlRowStyles extends TitleRowStyles {
  extraItemSpacing?: number;
}

type controlRowItem = Array<
  lng.Component.NewPatchTemplate<typeof lng.Component> | lng.Component
>;

export default class ControlRow extends TitleRow {
  leftControls?: controlRowItem;
  contentItems?: controlRowItem;
  rightControls?: controlRowItem;
  extraItemSpacing?: number;
  loadMoreItems(): void;
  addContentItems(items: controlRowItem[]);
  addContentItemsAt(items: controlRowItem[], index: number);
  removeContentItemsAt(index: number);
  addLeftControls(items: controlRowItem[]);
  addLeftControlsAt(items: controlRowItem[], index: number);
  removeLeftControlsAt(index: number);
  addRightControls(items: controlRowItem[]);
  addRightControlsAt(items: controlRowItem[], index: number);
  removeRightControlsAt(index: number);
}
