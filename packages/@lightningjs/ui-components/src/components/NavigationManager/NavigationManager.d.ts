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
import type { StylePartial } from '../../types/lui';
import FocusManager from '../FocusManager';

export type TransitionObject = {
  delay: number;
  duration: number;
  timingFunction: string;
};

export type DirectionProps = {
  axis: string;
  crossAxis: string;
  lengthDimension: string;
  crossDimension: string;
  innerCrossDimension: string;
};

export type NavigationManagerStyle = {
  alwaysScroll: boolean;
  itemSpacing: number;
  itemTransition: TransitionObject;
  neverScroll: boolean;
  scrollIndex: number;
};

declare namespace NavigationManager {
  export interface TemplateSpec extends FocusManager.TemplateSpec {
    /**
     * Determines whether the component will stop scrolling as it nears the end to prevent white space.
     * If true, the component will scroll infinitely.
     */
    alwaysScroll?: boolean;

    /**
     * If true, the component will never scroll, unless `alwaysScroll` is set to true.
     * If false, the component will apply normal scrolling logic.
     */
    neverScroll?: boolean;

    /**
     * Item index at which scrolling begins, provided the sum of item widths is greater than the width of the Row component.
     */
    scrollIndex?: number;

    /**
     * Automatically sets the width of the row to be the same as the Items container inside (this will prevent scrolling).
     */
    autoResizeWidth?: boolean;

    /**
     * Automatically sets the height of the row to be the same as the Items container inside.
     */
    autoResizeHeight?: boolean;

    /**
     * Note: `lazyUpCount` and `lazyUpCountBuffer` work hand in hand.
     * If defined, `lazyUpCount` enables "lazy loading" of items where only an initial number of items are displayed when the Row/Column first renders until further navigation.
     * The initial number of items is calculated by `lazyUpCount` + `lazyLoadUpCountBuffer`.
     * The remaining items are stored as lazy items.
     * Each time `selectNext` is invoked (moving right in Row or down in a Column), an item (that was not initially displayed) will be added to the end until all lazy items are loaded.
     */
    lazyUpCount?: number;

    /**
     * By default `lazyUpCountBuffer` is 2.
     * Changing this value updates the initial number of items to display on first render of Row/Column.
     * Note: this behavior will only occur if `lazyUpCount` is defined.
     * ex: only providing `lazyUpCountBuffer: 1` will display all items since `lazyUpCount` is not set so the “lazy loading” behavior is not enabled.
     */
    lazyUpCountBuffer?: number;
  }
}

declare class NavigationManager<
  TemplateSpec extends NavigationManager.TemplateSpec = NavigationManager.TemplateSpec
> extends FocusManager<TemplateSpec> {
  // Properties
  /**
   * Determines whether the component will stop scrolling as it nears the end to prevent white space.
   * If true, the component will scroll infinitely.
   */
  alwaysScroll?: boolean;

  /**
   * If true, the component will never scroll, unless alwaysScroll is set to true.
   * If false, the component will apply normal scrolling logic.
   */
  neverScroll?: boolean;

  /**
   * Item index at which scrolling begins, provided the sum of item widths is greater than the width of the Row component.
   */
  scrollIndex?: number;

  /**
   * Automatically sets the width of the row to be the same as the Items container inside (this will prevent scrolling).
   */
  autoResizeWidth?: boolean;

  /**
   * Automatically sets the height of the row to be the same as the Items container inside.
   */
  autoResizeHeight?: boolean;

  /**
   * If set, this is used to calculate the initial number of items to display on the first render (`lazyUpCount` + `lazyLoadUpCountBuffer`).
   * The remaining items are stored as lazy items.
   * Each time the user navigates further, the next lazy item will be added.
   */
  lazyUpCount?: number;

  /**
   * If `lazyUpCount` is set, this is used to calculate the initial number of items to display on the first render (`lazyUpCount` + `lazyLoadUpCountBuffer`).
   * The remaining items are stored as lazy items.
   * Each time the user navigates further, the next lazy item will be added.
   */
  lazyUpCountBuffer?: number;

  // Accessors
  get style(): NavigationManagerStyle;
  set style(v: StylePartial<NavigationManagerStyle>);

  // Methods
  /**
   * An event that, when triggered, calls a method that forces the component to update.
   */
  $itemChanged(): void;

  /**
   * Updates the position of a component along the main axis of the NavigationManager component.
   * For components where `direction` is `'row'`, it will update the `x` property on the passed in component(`item`) to the passed in value(`position`).
   * For components where `direction` is `'column'`, it will update the `y` property on the passed in component(`item`) to the passed in value(`position`).
   * @param item component whose property will be updated
   * @param position value to replace either the `x` or `y` property of item
   */
  updatePositionOnAxis(item: lng.Component, position: number): void;

  /**
   * Scrolls to the child at the supplied index at the rate of `duration` * (`this.selectedIndex` - `index`)
   * @param index index of item to scroll to
   * @param duration how long, in ms, it should take to scroll to the item at index
   */
  scrollTo(index: number, duration: number): void;

  /**
   * A method that is invoked upon any transitions to the component's axis property finishing (ex. 'x' for Row, 'y' for Column).
   * It is not set by default and can be overwritten.
   */
  transitionDone(): void;

  /**
   * Returns a boolean for whether or not the component should scroll left
   * based off if the component's `direction` property is `'row'`, the selected item's index is past the `scrollIndex`, and that content that is out of view can be scrolled to.
   */
  shouldScrollLeft(): boolean;

  /**
   * Returns a boolean for whether or not the component should scroll right
   * based off if the component's `direction` property is `'row'`, the selected item's index is past the `scrollIndex`, and that content that is out of view can be scrolled to.
   */
  shouldScrollRight(): boolean;

  /**
   * Returns a boolean for whether or not the component should scroll up
   * based off if the component's `direction` property is `'column'`, the selected item's index is past the `scrollIndex`, and that content that is out of view can be scrolled to.
   */
  shouldScrollUp(): boolean;

  /**
   * Returns a boolean for whether or not the component should scroll down
   * based off if the component's `direction` property is `'column'`, the selected item's index is past the `scrollIndex`, and that content that is out of view can be scrolled to.
   */
  shouldScrollDown(): boolean;
}

export default NavigationManager;
