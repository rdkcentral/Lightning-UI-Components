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
import { TextBoxStyle } from '../TextBox';
import { StylePartial } from '../../types/lui';
import ListItem, { ListItemStyle } from './ListItem';

type ListItemSliderStyle = ListItemStyle & {
  paddingY: number;
  valueTextStyle: TextBoxStyle;
};

declare namespace ListItemSlider {
  export interface TemplateSpec extends ListItem.TemplateSpec {
    /**
     * object containing all properties supported in the [Slider component](?path=/docs/elements-slider--basic)
     */
    slider?: Record<string, unknown>;

    /**
     * current value of slider
     */
    value?: string;

    style?: StylePartial<ListItemSliderStyle>;
  }
}
declare class ListItemSlider<
  TemplateSpec extends ListItemSlider.TemplateSpec = ListItemSlider.TemplateSpec,
  TypeConfig extends lng.Component.TypeConfig = lng.Component.TypeConfig
> extends ListItem<TemplateSpec, TypeConfig> {
  /**
   * object containing all properties supported in the [Slider component](?path=/docs/elements-slider--basic)
   */
  slider?: Record<string, unknown>;

  /**
   * current value of slider
   */
  value?: string;

  get style(): ListItemSliderStyle;
  set style(v: StylePartial<ListItemSliderStyle>);

  // tags
  get _Slider(): lng.Component;
  get _Value(): lng.Component;
}

export { ListItemSlider as default, ListItemSliderStyle };
