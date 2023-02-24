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
import Card, { CardStyle } from './Card';
import type { StylePartial } from '../../types/lui';

export type CardSectionStyle = CardStyle & {
  iconHeight: number;
  iconWidth: number;
};

export default class CardSection extends Card {
  iconHeight?: number;
  iconSrc?: number;
  iconWidth?: number;
  get style(): CardSectionStyle;
  set style(v: StylePartial<CardSectionStyle>);

  // tags
  get _Icon(): lng.Component;
}
