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
import MetadataBase, { MetadataBaseStyle } from '../MetadataBase';
import Provider, { ProviderStyle } from '../Provider';
import TextBox from '../TextBox';
import type TextBoxStyle from '../TextBox/TextBox.style';
import { StylePartial } from '../../types/lui';

type MetadataCardContentStyle = MetadataBaseStyle & {
  detailsTextStyle: TextBoxStyle;
  descriptionTextStyle: TextBoxStyle;
  fadeWidth: number;
  provider: ProviderStyle;
};

declare namespace MetadataCardContent {
  export interface TemplateSpec extends MetadataBase.TemplateSpec {
    /**
     * text of title content
     */
    title?: string;
    /**
     * description text below title
     */
    description?: string;
    /**
     * details text directly below description
     */
    descriptionDetails?: string;
    /**
     * details text at bottom left of component
     */
    details?: string;
    /**
     * Object containing all properties supported in the Provider component
     */
    Provider?: lng.Element.PatchTemplate<Provider.TemplateSpec>;
  }
}

declare class MetadataCardContent<
  TemplateSpec extends MetadataBase.TemplateSpec = MetadataBase.TemplateSpec,
  TypeConfig extends MetadataBase.TypeConfig = MetadataBase.TypeConfig
> extends MetadataBase<TemplateSpec, TypeConfig> {
  /**
   * text of title content
   */
  title?: string;

  /**
   * description text below title
   */
  description?: string;
  /**
   * details text directly below description
   */
  descriptionDetails?: string;
  /**
   * details text at bottom left of component
   */
  details?: string;
  /**
   * Object containing all properties supported in the Provider component
   */
  Provider?: lng.Element.PatchTemplate<Provider.TemplateSpec>;

  get style(): MetadataCardContentStyle;
  set style(v: StylePartial<MetadataCardContentStyle>);

  // Tags

  get _Text(): TextBox;
  get _Title(): TextBox;
  get _Description(): TextBox;
  get _DescriptionDetails(): TextBox;
  get _DetailsWrapper(): TextBox;
  get _DetailsFader(): TextBox;
  get _Details(): TextBox;
  get _Provider(): lng.Component;
}

export { MetadataCardContent as default, MetadataCardContentStyle };
