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
import Base from '../Base';
import type { Color, StylePartial } from '../../types/lui';

export type ShadowStyle = {
  alpha: number;
  blur: number;
  color: Color;
  offsetX: number;
  offsetY: number;
  radius: lng.Tools.CornerRadius;
  spread: number;
  maxOffsetX: number;
  maxOffsetY: number;
};

export default class Shadow extends Base {
  maskShadow?: boolean;
  get style(): ShadowStyle;
  set style(v: StylePartial<ShadowStyle>);

  // tags
  get _Frame(): lng.Component;
  get _Shadow(): lng.Component;
}
