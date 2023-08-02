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
import { Color, StylePartial } from '../../types/lui';
import Card, { CardStyle } from '../Card';
import { TextBoxStyle } from '../TextBox';

type ImageSize = {
  w: number;
  h: number;
};

type CardContentStyle = CardStyle & {
  backgroundColor: Color;
  expandedW: number;
  expandedH: number;
  imageSize: ImageSize;
  metadata: TextBoxStyle;
};

declare namespace CardContent {
  export interface TemplateSpec extends Card.TemplateSpec {
    /**
     * when collapseToMetadata is true and shouldCollapse is enabled, the image collapses to show the metadata
     */
    collapseToMetadata?: boolean;
    /**
     * object containing all properties supported in the MetadataCardContent component
     */
    metadata?: object;
    /**
     * specifies whether the card layout should be oriented horizontally or vertically
     */
    orientation?: ['horizontal', 'vertical'];
    /**
     * will collapse the Card when the Card is not focused
     */
    shouldCollapse?: boolean;
    /**
     *  path to artwork image
     */
    src: string;
    /**
     * object containing all properties supported in the Tile component
     */
    tile?: object;
  }
}
declare class CardContent<
  TemplateSpec extends CardContent.TemplateSpec = CardContent.TemplateSpec,
  TypeConfig extends lng.Component.TypeConfig = lng.Component.TypeConfig
> extends Card<TemplateSpec, TypeConfig> {
  /**
   * when collapseToMetadata is true and shouldCollapse is enabled, the image collapses to show the metadata
   */
  collapseToMetadata?: boolean;
  /**
   * object containing all properties supported in the MetadataCardContent component
   */
  metadata?: object;
  /**
   * specifies whether the card layout should be oriented horizontally or vertically
   */
  orientation?: ['horizontal', 'vertical'];
  /**
   * will collapse the Card when the Card is not focused
   */
  shouldCollapse?: boolean;
  /**
   *  path to artwork image
   */
  src: string;
  /**
   * Object containing all properties supported in the Tile component
   */
  tile?: object;

  get style(): CardContentStyle;
  set style(v: StylePartial<CardContentStyle>);

  // tags
  get _Metadata(): lng.Component;
  get _Tile(): lng.Component;
}

export { CardContent as default, CardContentStyle };
