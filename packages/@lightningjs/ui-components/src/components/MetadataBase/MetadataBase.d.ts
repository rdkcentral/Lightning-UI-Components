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
import { StylePartial } from '../../types/lui';
import TextBox from '../TextBox';
import type TextBoxStyle from '../TextBox/TextBox.style';
import Icon from '../Icon';

type MetadataBaseStyle = {
  descriptionTextStyle: TextBoxStyle;
  fadeWidth: number;
  logoWidth: number;
  logoHeight: number;
  logoPadding: number;
  detailsTextStyle: TextBoxStyle;
  titleTextStyle: TextBoxStyle;
};

declare namespace MetadataBase {
  export interface TemplateSpec extends Base.TemplateSpec {
    /**
     * third line or description of the content
     */
    description?: string;
    /**
     * relevant content data in the middle
     */
    details?: string;
    /**
     * logo to display at bottom of component
     */
    logo?: string;
    /**
     * height of logo
     */
    logoHeight?: number;
    /**
     * width of logo
     */
    logoWidth?: number;
    /**
     * which side to place logo (`right` or `left`)
     */
    logoPosition?: string;
    /**
     * title of logo to use for announcer
     */
    logoTitle?: string;
    /**
     * sets the marquee for Title and Description to the same value so they sync
     */
    marquee?: boolean;
    /**
     * @deprecated
     * relevant content data in the middle
     */
    subtitle?: string;
    /**
     * first line or headline of the content
     */
    title?: string;
  }
  export interface TypeConfig extends lng.Component.TypeConfig {
    SignalMapType: SignalMap;
  }
  /**
   * emits when an update to the height of logo and/or text happens
   */
  export type SignalMap = {
    updateMetadataHeight(): void;
  };
}

declare class MetadataBase<
  TemplateSpec extends MetadataBase.TemplateSpec = MetadataBase.TemplateSpec,
  TypeConfig extends MetadataBase.TypeConfig = MetadataBase.TypeConfig
> extends Base<TemplateSpec, TypeConfig> {
  // Properties
  /**
   * third line or description of the content
   */
  description?: string;
  /**
   * relevant content data in the middle
   */
  details?: string;
  /**
   * logo to display at bottom of component
   */
  logo?: string;
  /**
   * height of logo
   */
  logoHeight?: number;
  /**
   * width of logo
   */
  logoWidth?: number;
  /**
   * which side to place logo (`right` or `left`)
   */
  logoPosition?: string;
  /**
   * title of logo to use for announcer
   */
  logoTitle?: string;
  /**
   * TODO: confirm type and get a description
   */
  marquee?: boolean;
  /**
   * @deprecated
   * relevant content data in the middle
   */
  subtitle?: string;
  /**
   * first line or headline of the content
   */
  title?: string;

  get style(): MetadataBaseStyle;
  set style(v: StylePartial<MetadataBaseStyle>);

  // Tags
  get _Title(): TextBox;
  get _DetailsWrapper(): TextBox;
  get _Details(): TextBox;
  get _Description(): TextBox;
  get _Logo(): Icon;
}

export { MetadataBase as default, MetadataBaseStyle };
