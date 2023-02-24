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
import type { StylePartial } from '../../types/lui';
import type { TextBoxStyle } from '../TextBox';

export type GridOverlayStyle = {
  propertyTextStyle: TextBoxStyle;
  valueTextStyle: TextBoxStyle;
};

export default class GridOverlay extends Base {
  showColumns?: boolean;
  showGutters?: boolean;
  showMargins?: boolean;
  showSafe?: boolean;
  showText?: boolean;
  get style(): GridOverlayStyle;
  set style(v: StylePartial<GridOverlayStyle>);

  // tags
  get _Columns(): lng.Component;

  get _Gutters(): lng.Component;
  get _GutterHorizontal(): lng.Component;

  get _Margins(): lng.Component;
  get _MarginHorizontal(): lng.Component;
  get _MarginLeft(): lng.Component;
  get _MarginRight(): lng.Component;
  get _MarginVertical(): lng.Component;
  get _MarginTop(): lng.Component;

  get _Safe(): lng.Component;
  get _SafeBottom(): lng.Component;
  get _SafeHorizontal(): lng.Component;
  get _SafeLeft(): lng.Component;
  get _SafeRight(): lng.Component;
  get _SafeTop(): lng.Component;
  get _SafeVertical(): lng.Component;

  get _TextColumnCount(): lng.Component;
  get _TextGutterY(): lng.Component;
  get _TextMarginX(): lng.Component;
  get _TextMarginY(): lng.Component;
  get _TextPanel(): lng.Component;
  get _TextSafe(): lng.Component;
  get _TextScreenH(): lng.Component;
  get _TextScreenW(): lng.Component;
}
