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
import { TextBoxStyle } from '../TextBox';
import { Color, StylePartial } from '../../types/lui';

type ProviderStyle = {
  alpha: number;
  counterBackgroundColor: Color;
  counterTextStyle: TextBoxStyle;
  itemSize: number;
  itemSpacing: number;
  radius: lng.Tools.CornerRadius;
};

declare namespace Provider {
  export interface TemplateSpec extends Base.TemplateSpec {
    /**
     * If true, disables the radius style property for Icon providers
     */
    disableRadius: boolean;

    /**
     * text to override counter's default '+Number' functionality
     */
    counterText?: string;

    /**
     *  list of provider images
     */
    providers?: Array<string>;

    /**
     * the number of providers to show before adding a counter
     */
    visibleCount?: number;
  }
  export interface TypeConfig extends lng.Component.TypeConfig {
    SignalMapType: SignalMap;
  }
  /**
   * emitted when an item in the Provider component changes, indicating a change in the displayed providers
   */
  export type SignalMap = {
    providerChanged(): void;
  };
}

declare class Provider<
  TemplateSpec extends Provider.TemplateSpec = Provider.TemplateSpec,
  TypeConfig extends lng.Component.TypeConfig = lng.Component.TypeConfig
> extends Base<TemplateSpec, TypeConfig> {
  /**
   *  If true, disables the radius style property for Icon providers
   */
  disableRadius: boolean;

  /**
   * Text to override counter's default '+Number' functionality
   */
  counterText?: string;

  /**
   *  An array of provider images or icons to be displayed in the row
   */
  providers?: Array<string>;

  /**
   * The number of providers to show before adding a counter
   */
  visibleCount?: number;

  // Accessors

  /**
   *  Get the number of hidden providers
   */
  get providersHidden(): number;

  get style(): ProviderStyle;
  set style(v: StylePartial<ProviderStyle>);

  // tags
  get _Row(): lng.Component;
}

export { Provider as default, ProviderStyle };
