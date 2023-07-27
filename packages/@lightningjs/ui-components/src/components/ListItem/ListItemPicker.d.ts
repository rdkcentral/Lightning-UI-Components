﻿/**
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
import { Color, StylePartial } from '../../types/lui';
import ListItem, { ListItemStyle } from './ListItem';

type ListItemPickerStyle = ListItemStyle & {
  arrowAlphaValue: number;
  arrowAlphaValueLimit: number;
  arrowWidth: number;
  arrowHeight: number;
  arrowColor: Color;
  iconLeftSrc: string;
  iconRightSrc: string;
};

declare namespace ListItemPicker {
  export interface TemplateSpec extends ListItem.TemplateSpec {
    /**
     * list of selectable options
     */
    options?: string[];

    /**
     * index of current selected option
     */
    selectedIndex?: number;

    style?: StylePartial<ListItemStyle>;
  }
}

declare class ListItemPicker<
  TemplateSpec extends ListItemPicker.TemplateSpec = ListItemPicker.TemplateSpec,
  TypeConfig extends lng.Component.TypeConfig = lng.Component.TypeConfig
> extends ListItem<TemplateSpec, TypeConfig> {
  /**
   * list of selectable options
   */
  options?: string[];

  /**
   * index of current selected option
   */
  selectedIndex?: number;

  /**
   * returns the item from the `options` array at the current `selectedIndex`
   */
  get selectedOption(): string; // TODO is this correct?

  get style(): ListItemPickerStyle;
  set style(v: StylePartial<ListItemPickerStyle>);

  // tags
  get _LeftArrow(): lng.Component;
  get _RightArrow(): lng.Component;
  get _Picker(): lng.Component;
}

export { ListItemPicker as default, ListItemPickerStyle };
