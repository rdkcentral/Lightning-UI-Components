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
import type { Color, StylePartial } from '../../types/lui';

export type CheckboxStyle = {
  alpha: number;
  backgroundColor: Color;
  backgroundColorChecked: Color;
  checkColor: Color;
  checkH: number;
  checkW: number;
  checkSrc: string;
  radius: lng.Tools.CornerRadius;
  strokeColor: Color;
  strokeWidth: number;
};

export default class Checkbox extends Base {
  checked?: boolean;
  toggle(): Checkbox;
  get style(): CheckboxStyle;
  set style(v: StylePartial<CheckboxStyle>);

  // tags
  get _Check(): lng.Component;
  get _Body(): lng.Component;
  get _Stroke(): lng.Component;
}
