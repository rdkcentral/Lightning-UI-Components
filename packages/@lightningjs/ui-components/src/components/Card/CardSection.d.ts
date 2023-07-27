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
import { StylePartial } from '../../types/lui';
import { TextBoxStyle } from '../TextBox';

type CardSectionStyle = CardStyle & {
  iconHeight: number;
  iconWidth: number;
  titleTextStyle: TextBoxStyle;
};

declare namespace CardSection {
  export interface TemplateSpec extends Card.TemplateSpec {
    /**
     * height of the icon on the right
     */
    iconHeight?: number;
    /**
     * icon source
     */
    iconSrc?: number;
    /**
     * width of the icon on the right
     */
    iconWidth?: number;
  }
}

declare class CardSection<
  TemplateSpec extends CardSection.TemplateSpec = CardSection.TemplateSpec,
  TypeConfig extends lng.Component.TypeConfig = lng.Component.TypeConfig
> extends Card<TemplateSpec, TypeConfig> {
  // Properties
  /**
   * height of the icon on the right
   */
  iconHeight?: number;
  /**
   * icon source
   */
  iconSrc?: number;
  /**
   * width of the icon on the right
   */
  iconWidth?: number;

  get style(): CardSectionStyle;
  set style(v: StylePartial<CardSectionStyle>);

  // tags
  get _Icon(): lng.Component;
}

export { CardSection as default, CardSectionStyle };
