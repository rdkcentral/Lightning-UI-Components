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
// text in Button is all using our own version of TextBox
import type { TextBoxStyle } from '../TextBox';

export type ButtonStyle = SurfaceStyle & {
  justify: 'center' | 'left' | 'right';
  minWidth: number;
  paddingX: number;
  paddingXNoTitle: number;
  titlePadding: number;
  textStyle: TextBoxStyle;
  iconColor: Color;
};

export default class Button extends Surface {
  fixed?: boolean;
  justify?: 'center' | 'left' | 'right';
  prefix?: lng.Component | Array<lng.Component>;
  suffix?: lng.Component | Array<lng.Component>;
  title?: string;
  get style(): ButtonStyle;
  set style(v: StylePartial<ButtonStyle>);

  // tags
  get _TextWrapper(): lng.Component;
  get _Title(): lng.Component;
  get _Prefix(): lng.Component;
  get _Suffix(): lng.Component;
}
