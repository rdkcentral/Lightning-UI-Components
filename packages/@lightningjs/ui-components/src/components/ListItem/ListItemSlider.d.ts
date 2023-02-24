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
import type { StylePartial } from '../../types/lui';
import ListItem, { ListItemStyle } from '.';

export type ListItemSliderStyle = ListItemStyle & {
  paddingY: number;
  valueTextStyle: TextBoxStyle;
};
export default class ListItemSlider extends ListItem {
  slider?: Record<string, unknown>;
  value?: string;
  get style(): ListItemSliderStyle;
  set style(v: StylePartial<ListItemSliderStyle>);

  // tags
  get _Slider(): lng.Component;
  get _Value(): lng.Component;
}
