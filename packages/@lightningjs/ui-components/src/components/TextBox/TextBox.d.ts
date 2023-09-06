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
import Base from '../Base';
import type { StylePartial } from '../../types/lui';
import type { TextContent } from '../InlineContent/InlineContent';

export type TextBoxStyle = {
  offsetY: number;
  offsetX: number;
  textStyle: lng.textures.TextTexture.Settings | string;
  typography: Record<string, lng.textures.TextTexture.Settings>;
};

export default class TextBox extends Base {
  content?: string | TextContent[];
  fixed?: boolean;
  marquee?: boolean;
  displayOnLoad?: boolean;
  get marqueeOverrideLoopX(): number;
  set marqueeOverrideLoopX(v: number);
  get style(): TextBoxStyle;
  set style(v: StylePartial<TextBoxStyle>);

  // tags
  get _InlineContent(): lng.Component;
  get _Marquee(): lng.Component;
  get _Text(): lng.Component;
}
