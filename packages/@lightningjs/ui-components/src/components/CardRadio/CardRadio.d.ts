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

import type { StylePartial } from '../../types/lui';
import { TextBoxStyle } from '../TextBox';
import CardTitle, { CardTitleStyle } from '../Card/CardTitle';

export type CardRadioStyle = CardTitleStyle & {
  alpha: number;
  descriptionTextStyle: TextBoxStyle;
  iconHeight: number;
  iconWidth: number;
  subtitleTextStyle: TextBoxStyle;
};
export default class CardRadio extends CardTitle {
  subtitle?: string;
  get style(): CardRadioStyle;
  set style(v: StylePartial<CardRadioStyle>);
}
