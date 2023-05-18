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
import Base from '../Base';

export type NavigationDirectionType = 'none' | 'column' | 'row';
export type FocusItemsType = Array<
  lng.Component.NewPatchTemplate<lng.Component.Constructor> | lng.Component
>;
declare namespace FocusManager {
  export interface TemplateSpec extends Base.TemplateSpec {
    /**
     * the navigation direction
     */
    direction?: NavigationDirectionType;
    /**
     * child element or elements of the FocusManager
     */
    items: Array<
      | lng.Component.NewPatchTemplate<lng.Component.Constructor>
      | typeof lng.Component
    >;
    /**
     * index of currently selected item
     */
    selectedIndex?: number;

    /**
     * enables wrapping behavior, so `selectNext` selects the first item if the current item is the last on the list and vice versa
     */
    wrapSelected?: boolean;
  }
}

declare class FocusManager<
  TemplateSpec extends FocusManager.TemplateSpec,
  TypeConfig extends lng.Component.TypeConfig
> extends Base<TemplateSpec, TypeConfig> {
  // Properties

  /**
   * the navigation direction
   */
  direction?: NavigationDirectionType;

  /**
   * child element or elements of the FocusManager
   */
  items: FocusItemsType;

  /**
   * index of currently selected item
   */
  selectedIndex: number;

  /**
   * enables wrapping behavior, so `selectNext` selects the first item if the current item is the last on the list and vice versa
   */
  wrapSelected: boolean;

  // Accessors

  get Items(): lng.Element;

  /**
   * returns the currently selected component
   */
  get selected(): lng.Component;

  /**
   * returns an array containing the children of the FocusManager that are fully within the visible bounds of the FocusManager
   */
  get fullyOnScreenItems(): Array<lng.Component>;

  // Methods

  /**
   * adds the provided Rows to the end of the FocusManager children
   * @param items array of Components or Component patch objects
   */
  appendItems(items: FocusItemsType): void;

  /**
   * adds the provided Rows to the end of the FocusManager children at the provided index
   * @param items array of Components or Component patch objects
   * @param idx index to insert `items` at
   */
  appendItemsAt(items: FocusItemsType, idx: number): void;

  /**
   * adds the provided Rows to the beginning of the FocusManager children
   * @param items array of Components or Component patch objects
   */
  prependItems(items: FocusItemsType): void;

  /**
   * removes Item from FocusManager children at the given index
   * @param index index of item to remove
   */
  removeItemAt(idx: number): void;

  /**
   * returns the transition value for `x` of FocusManager.Items
   */
  getTransitionXTargetValue(): string;

  /**
   * returns the transition value for `y` of FocusManager.Items
   */
  getTransitionYTargetValue(): string;

  /**
   * A no-op function that is called when `selectedIndex` is set. Can be overridden by classes that extend `FocusManager` for custom render behavior.
   */
  render(): void;

  /**
   * Selects previous item. If this.wrapSelected=true, will select the last element in the list if focus is currently on the first item.
   */
  selectPrevious(): void;

  /**
   * Selects next item. If this.wrapSelected=true, will select the first element in the list if focus is currently on the last item.
   */
  selectNext(): void;

  // tags
  get _Items(): lng.Component;
}

export default FocusManager;
