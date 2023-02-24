/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

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
