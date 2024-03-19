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
import { StylePartial } from '../../types/lui';
import TextBox from '../TextBox';
import type TextBoxStyle from '../TextBox/TextBox.style';
import CardTitle, { CardTitleStyle } from './CardTitle';

type CardRadioStyle = CardTitleStyle & {
  descriptionTextStyle: TextBoxStyle;
  subtitleTextStyle: TextBoxStyle;
};

declare namespace CardRadio {
  export interface TemplateSpec extends CardTitle.TemplateSpec {
    /**
     * Object containing all properties supported in the Radio Component
     * TODO: See if the types can be updated when Radio has been updated
     */
    radio?: Record<string, unknown>;
    /**
     * text to be displayed in the subtitle section of the card
     */
    subtitle?: string | TextBox[];
  }
}
declare class CardRadio<
  TemplateSpec extends CardRadio.TemplateSpec = CardRadio.TemplateSpec,
  TypeConfig extends lng.Component.TypeConfig = lng.Component.TypeConfig
> extends CardTitle<TemplateSpec, TypeConfig> {
  /**
   * Object containing all properties supported in the Radio Component
   */
  radio?: Record<string, unknown>;
  /**
   * text to be displayed in the subtitle section of the card
   */
  subtitle?: string | TextBox[];

  get style(): CardRadioStyle;
  set style(v: StylePartial<CardRadioStyle>);

  //tags
  get _Subtitle(): TextBox;
}

export { CardRadio as default, CardRadioStyle };
