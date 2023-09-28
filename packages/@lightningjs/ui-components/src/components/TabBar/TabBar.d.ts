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

    /**
     * enables wrapping behavior
     */
    wrapSelected?: boolean;
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

  /**
   * enables wrapping behavior
   */
  wrapSelected?: boolean;

  get style(): TabBarStyle;
  set style(v: StylePartial<TabBarStyle>);

  // tags
  get _Tabs(): lng.Component;
  get _TabContent(): lng.Component;
}

export { TabBar as default, TabBarStyle };
