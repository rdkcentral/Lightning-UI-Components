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
import TextBox, { TextBoxStyle } from '../TextBox';
import { StylePartial } from '../../types/lui';

type CardTitleStyle = CardStyle & {
  descriptionTextStyle: TextBoxStyle;
  detailsTextProperties: TextBoxStyle;
};

declare namespace CardTitle {
  export interface TemplateSpec extends Card.TemplateSpec {
    /**
     * text to be displayed in the description section
     */
    description?: string | TextBox[];
    /**
     * text to be displayed in the details section
     */
    details?: string | TextBox[];
  }
}

declare class CardTitle<
  TemplateSpec extends CardTitle.TemplateSpec = CardTitle.TemplateSpec,
  TypeConfig extends lng.Component.TypeConfig = lng.Component.TypeConfig
> extends Card<TemplateSpec, TypeConfig> {
  /**
   * text to be displayed in the description section
   */
  description?: string | TextBox[];
  /**
   * text to be displayed in the details section
   */
  details?: string | TextBox[];

  get style(): CardTitleStyle;
  set style(v: StylePartial<CardTitleStyle>);

  // tags
  get _Description(): lng.Component;
  get _Details(): lng.Component;
}

export { CardTitle as default, CardTitleStyle };
