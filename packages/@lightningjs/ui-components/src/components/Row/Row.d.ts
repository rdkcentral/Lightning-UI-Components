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

import NavigationManager from '../NavigationManager';

declare namespace Row {
  export interface TemplateSpec extends NavigationManager.TemplateSpec {
    /**
     * If true, will only scroll the row if the item is off screen and `alwaysScroll` and `neverScroll` are both false.
     */
    lazyScroll?: boolean;

    /**
     * When `lazyScroll` is `true`,
     * this is the index of item in `items`, and items thereafter, at which lazy scrolling should occur
     * (alwaysScroll functionality will take place before this index)
     */
    startLazyScrollIndex?: number;

    /**
     * When `lazyScroll` is `true`,
     * this is the index of item in `items`, and items preceding, at which lazy scrolling should occur
     * (alwaysScroll functionality will take place after this index)
     */
    stopLazyScrollIndex?: number;
  }
}

declare class Row<
  TemplateSpec extends Row.TemplateSpec = Row.TemplateSpec
> extends NavigationManager<TemplateSpec> {
  // Properties
  /**
   * If true, will only scroll the row if the item is off screen and `alwaysScroll` and `neverScroll` are both false.
   */
  lazyScroll?: boolean;

  /**
   * When `lazyScroll` is `true`,
   * this is the index of item in `items`, and items thereafter, at which lazy scrolling should occur
   * (alwaysScroll functionality will take place before this index)
   */
  startLazyScrollIndex?: number;

  /**
   * When `lazyScroll` is `true`,
   * this is the index of item in `items`, and items preceding, at which lazy scrolling should occur
   * (alwaysScroll functionality will take place after this index)
   */
  stopLazyScrollIndex?: number;

  // Methods
  /**
   * A callback that can be overridden to do something with the items that are currently on screen.
   * This will be called on every new render.
   */
  onScreenEffect(): void;
}

export default Row;
