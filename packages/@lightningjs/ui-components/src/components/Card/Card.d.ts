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

import type lng from '@lightningjs/core';
import Surface, { SurfaceStyle } from '../Surface';
import { TextBoxStyle } from '../TextBox';
import type { Color, StylePartial } from '../../types/lui';

export type CardStyle = SurfaceStyle & {
  backgroundColorDisabled: Color;
  backgroundColorFocused: Color;
  backgroundColorUnfocused: Color;
  paddingHorizontal: number;
  paddingVertical: number;
  radius: lng.Tools.CornerRadius;
  titleTextStyle: TextBoxStyle;
};

export default class Card extends Surface {
  title?: string;
  get style(): CardStyle;
  set style(v: StylePartial<CardStyle>);

  // tags
  get _Title(): lng.Component;
}
