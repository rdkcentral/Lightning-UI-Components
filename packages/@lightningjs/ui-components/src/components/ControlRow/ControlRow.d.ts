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

import lng from '@lightningjs/core';
import { StylePartial } from '../../types/lui';
import TitleRow, { TitleRowStyle } from '../TitleRow';

type ControlRowItem = {
  extraItemSpacing?: number;
};

type ControlRowStyle = TitleRowStyle & {
  extraItemSpacing: number;
};

declare namespace ControlRow {
  export interface TemplateSpec extends TitleRow.TemplateSpec {
    /**
     * additional space to be added between controls and content items
     */
    extraItemSpacing?: number;
  }
}
export interface TypeConfig extends lng.Component.TypeConfig {
  SignalMapType: SignalMap;
}
/**
 * This signal is emitted when an item is selected after an index determined by the lazyLoadBuffer property.
 */
export type SignalMap = {
  loadMoreItems(): void;
};

declare class ControlRow<
  TemplateSpec extends ControlRow.TemplateSpec = ControlRow.TemplateSpec,
  TypeConfig extends lng.Component.TypeConfig = lng.Component.TypeConfig
> extends TitleRow<TemplateSpec, TypeConfig> {
  /**
   * additional space to be added between controls and content items
   */
  extraItemSpacing?: number;

  // Methods
  /**
   * Adds items to the end of the row.
   * @param items An array of ControlRowItem to be added.
   */
  addContentItems(items: ControlRowItem[]): void;

  /**
   * Adds items at a specified index of the row.
   * @param items An array of ControlRowItem to be added.
   * @param index The index where the items should be added.
   */
  addContentItemsAt(items: ControlRowItem[], index: number): void;

  /**
   * Removes an item at the specified index.
   * @param index The index of the item to be removed.
   */
  removeContentItemsAt(index: number): void;

  /**
   * Adds controls to the end of the left controls.
   * @param controls An array of ControlRowItem or ComponentPatchObj<ControlSmall> to be added as controls.
   */
  addLeftControls(
    controls: ControlRowItem[] | ComponentPatchObj<ControlSmall>[]
  ): void;

  /**
   * Adds controls at a specified index of the left controls.
   * @param controls An array of ControlRowItem or ComponentPatchObj<ControlSmall> to be added as controls.
   * @param index The index where the controls should be added.
   */
  addLeftControlsAt(
    controls: ControlRowItem[] | ComponentPatchObj<ControlSmall>[],
    index: number
  ): void;

  /**
   * Removes a left control at the specified index.
   * @param index The index of the left control to be removed.
   */
  removeLeftControlAt(index: number): void;

  /**
   * Adds controls to the end of the right controls.
   * @param controls An array of ControlRowItem or ComponentPatchObj<ControlSmall> to be added as controls.
   */
  addRightControls(
    controls: ControlRowItem[] | ComponentPatchObj<ControlSmall>[]
  ): void;

  /**
   * Adds controls at a specified index of the right controls.
   * @param controls An array of ControlRowItem or ComponentPatchObj<ControlSmall> to be added as controls.
   * @param index The index where the controls should be added.
   */
  addRightControlsAt(
    controls: ControlRowItem[] | ComponentPatchObj<ControlSmall>[],
    index: number
  ): void;

  /**
   * Removes a right control at the specified index.
   * @param index The index of the right control to be removed.
   */
  removeRightControlAt(index: number): void;

  get style(): ControlRowStyle;
  set style(v: StylePartial<ControlRowStyle>);
}

export { ControlRow as default, ControlRowStyle };
