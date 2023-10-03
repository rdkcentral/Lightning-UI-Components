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
import { StylePartial } from '../../types/lui';
import { NavigationDirectionType } from '../FocusManager/FocusManager';

type TabBarStyle = {
  tabsMarginBottom: number;
  tabSpacing: number;
};

type ResolvedTab =
  | lng.Component.NewPatchTemplate<typeof lng.Component>
  | lng.Component;

declare namespace TabBar {
  export interface TemplateSpec extends Base.TemplateSpec {
    /**
     * when true, a lower alpha will be applied to unselected tabs when focus is delegated to the tab content
     */
    alphaSelectedTab?: boolean;

    /**
     * when true, the height of the TabBar will only reflect the height of the Tabs when unfocused or no tab content is available
     */
    collapse?: boolean;

    /**
     * when true, the selected tab index will be reset when the TabBar component is unfocused
     */
    reset?: boolean;

    /**
     * the content displayed when a tab is selected via tabConent property on each tab
     */
    tabs?: Array<ResolvedTab | Promise<ResolvedTab> | (() => ResolvedTab)>;

    //Following properties come from spreading of Row

    /**
     * the navigation direction of the tabBar
     */
    direction?: NavigationDirectionType;

    /**
     * enables wrapping behavior of tabs within the tabBar
     */
    wrapSelected?: boolean;

    /**
     * Determines whether the component will stop scrolling as it nears the end of the tabBar to prevent white space.
     * If true, the component will scroll infinitely when migrating to a different tab within the tabBar.
     */
    alwaysScroll?: boolean;

    /**
     * If true, the component will never scroll when migrating to a different tab within the tabBar, unless `alwaysScroll` is set to true.
     * If false, the component will apply normal scrolling logic when migrating from one tab to another within the tabBar.
     */
    neverScroll?: boolean;

    /**
     * Tab index at which scrolling of the tabBar containing the tabs begins, provided the sum of tabs widths is greater than the width of the tabBar component.
     */
    scrollIndex?: number;

    /**
     * Automatically sets the width of the tabBar containing the tabs to be the same as the Items container inside (this will prevent scrolling).
     */
    autoResizeWidth?: boolean;

    /**
     * Automatically sets the height of the tabBar containing the tabs to be the same as the Items container inside.
     */
    autoResizeHeight?: boolean;

    /**
     * Note: `lazyUpCount` and `lazyUpCountBuffer` work hand in hand.
     * If defined, `lazyUpCount` enables "lazy loading" of items where only an initial number of items are displayed when the Row/Column first renders until further navigation.
     * The initial number of tabs is calculated by `lazyUpCount` + `lazyLoadUpCountBuffer`.
     * The remaining tabs are stored as lazy tabss.
     * Each time `selectNext` is invoked (moving right in Row or down in a Column), an item (that was not initially displayed) will be added to the end until all lazy items are loaded.
     */
    lazyUpCount?: number;

    /**
     * By default `lazyUpCountBuffer` is 2.
     * Changing this value updates the initial number of tabs to display on first render of Row/Column.
     * Note: this behavior will only occur if `lazyUpCount` is defined.
     * ex: only providing `lazyUpCountBuffer: 1` will display all tabs since `lazyUpCount` is not set so the “lazy loading” behavior is not enabled.
     */
    lazyUpCountBuffer?: number;

    /**
     * If true, will only scroll to the next tab in the tabBar if the tab is off screen and `alwaysScroll` and `neverScroll` are both false.
     */
    lazyScroll?: boolean;

    /**
     * When `lazyScroll` is `true`,
     * this is the index of tab in `items`, and items thereafter, at which lazy scrolling should occur
     * (alwaysScroll functionality will take place before this index)
     */
    startLazyScrollIndex?: number;

    /**
     * When `lazyScroll` is `true`,
     * this is the index of tab in `items`, and items preceding, at which lazy scrolling should occur
     * (alwaysScroll functionality will take place after this index)
     */
    stopLazyScrollIndex?: number;
  }
}

declare class TabBar<
  TemplateSpec extends TabBar.TemplateSpec = TabBar.TemplateSpec,
  TypeConfig extends lng.Component.TypeConfig = lng.Component.TypeConfig
> extends Base<TemplateSpec, TypeConfig> {
  /**
   * when true, a lower alpha will be applied to unselected tabs when focus is delegated to the tab content
   */
  alphaSelectedTab?: boolean;

  /**
   * when true, the height of the TabBar will only reflect the height of the Tabs when unfocused or no tab content is available
   */
  collapse?: boolean;

  /**
   * when true, the selected tab index will be reset when the TabBar component is unfocused
   */
  reset?: boolean;

  /**
   * the content displayed when a tab is selected via tabConent property on each tab
   */
  tabs?: Array<ResolvedTab | Promise<ResolvedTab> | (() => ResolvedTab)>;

  //Following properties come from spreading of Row

  /**
   * the navigation direction of the tabBar
   */
  direction?: NavigationDirectionType;

  /**
   * enables wrapping behavior of tabs within the tabBar
   */
  wrapSelected?: boolean;

  /**
   * Determines whether the component will stop scrolling as it nears the end of the tabBar to prevent white space.
   * If true, the component will scroll infinitely when migrating to a different tab within the tabBar.
   */
  alwaysScroll?: boolean;

  /**
   * If true, the component will never scroll when migrating to a different tab within the tabBar, unless `alwaysScroll` is set to true.
   * If false, the component will apply normal scrolling logic when migrating from one tab to another within the tabBar.
   */
  neverScroll?: boolean;

  /**
   * Tab index at which scrolling of the tabBar containing the tabs begins, provided the sum of tabs widths is greater than the width of the tabBar component.
   */
  scrollIndex?: number;

  /**
   * Automatically sets the width of the tabBar containing the tabs to be the same as the Items container inside (this will prevent scrolling).
   */
  autoResizeWidth?: boolean;

  /**
   * Automatically sets the height of the tabBar containing the tabs to be the same as the Items container inside.
   */
  autoResizeHeight?: boolean;

  /**
   * Note: `lazyUpCount` and `lazyUpCountBuffer` work hand in hand.
   * If defined, `lazyUpCount` enables "lazy loading" of items where only an initial number of items are displayed when the Row/Column first renders until further navigation.
   * The initial number of tabs is calculated by `lazyUpCount` + `lazyLoadUpCountBuffer`.
   * The remaining tabs are stored as lazy tabss.
   * Each time `selectNext` is invoked (moving right in Row or down in a Column), an item (that was not initially displayed) will be added to the end until all lazy items are loaded.
   */
  lazyUpCount?: number;

  /**
   * By default `lazyUpCountBuffer` is 2.
   * Changing this value updates the initial number of tabs to display on first render of Row/Column.
   * Note: this behavior will only occur if `lazyUpCount` is defined.
   * ex: only providing `lazyUpCountBuffer: 1` will display all tabs since `lazyUpCount` is not set so the “lazy loading” behavior is not enabled.
   */
  lazyUpCountBuffer?: number;

  /**
   * If true, will only scroll to the next tab in the tabBar if the tab is off screen and `alwaysScroll` and `neverScroll` are both false.
   */
  lazyScroll?: boolean;

  /**
   * When `lazyScroll` is `true`,
   * this is the index of tab in `items`, and items thereafter, at which lazy scrolling should occur
   * (alwaysScroll functionality will take place before this index)
   */
  startLazyScrollIndex?: number;

  /**
   * When `lazyScroll` is `true`,
   * this is the index of tab in `items`, and items preceding, at which lazy scrolling should occur
   * (alwaysScroll functionality will take place after this index)
   */
  stopLazyScrollIndex?: number;

  get style(): TabBarStyle;
  set style(v: StylePartial<TabBarStyle>);

  // tags
  get _Tabs(): lng.Component;
  get _TabContent(): lng.Component;
}

export { TabBar as default, TabBarStyle };
