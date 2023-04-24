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
import type { Color, StylePartial } from '../../types/lui';
import Surface, { SurfaceStyle } from '../Surface';
// text should be using our own version of TextBox
import { TextBoxStyle } from '../TextBox';

export type TabStyle = SurfaceStyle & {
  backgroundColor: Color;
  contentColor: Color;
  iconMarginRight: number;
  iconSize: number;
  noTitlePaddingX: number;
  paddingX: number;
  paddingY: number;
  radius: number;
  textStyle: TextBoxStyle;
};

export default class Tab extends Surface {
  icon?: string;
  title?: string;
  get _textW(): number;
  get _iconW(): number;
  get _iconH(): number;
  get _paddingX(): number;
  get style(): TabStyle;
  set style(v: StylePartial<TabStyle>);

  // tags
  get _Content(): lng.Component;
  get _Icon(): lng.Component;
  get _Text(): lng.Component;
}
