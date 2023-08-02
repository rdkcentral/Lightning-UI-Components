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
import FocusManager from '../FocusManager/FocusManager';
import NavigationManager from '../NavigationManager';

declare namespace Column {
  export interface TemplateSpec extends NavigationManager.TemplateSpec {
    /**
     * When navigation between multiple Columns,
     * plinko functionality enables navigation to the item in the next Column that is closest to the index of the item in the previous Column.
     */
    plinko?: boolean;
  }

  export interface FireAncestorsMap {
    $columnEmpty(): void;
  }
}

declare class Column<
  TemplateSpec extends Column.TemplateSpec = Column.TemplateSpec,
  TypeConfig extends FocusManager.TypeConfig = FocusManager.TypeConfig
> extends NavigationManager<TemplateSpec, TypeConfig> {
  // Properties
  /**
   * When navigation between multiple Columns,
   * plinko functionality enables navigation to the item in the next Column that is closest to the index of the item in the previous Column.
   */
  plinko?: boolean;

  // Methods
  /**
   * Returns the item right before the item that has skipPlinko or before prev if no item has skipPlinko
   * @param prev component existing right before the current component
   * @param next component existing right after the current component
   */
  checkSkipPlinko(prev: lng.Component, next: lng.Component): lng.Component;

  /**
   * A callback that can be overridden to do something with the items that are currently on screen.
   * This will be called on every new render.
   */
  onScreenEffect(): void;

  /**
   * Removes the passed in item from the items array and updates the selectedIndex, if necessary
   * @param item component to be removed
   */
  $removeItem(item: lng.Component): void;

  /**
   * An event that, when triggered, calls a method that forces the component to update.
   */
  $columnChanged(): void;
}

export default Column;
