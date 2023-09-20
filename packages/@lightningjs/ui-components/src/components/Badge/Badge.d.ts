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
import { Color, StylePartial } from '../../types/lui';

type BadgeStyle = {
  backgroundColor: Color;
  contentSpacing: number;
  iconColor: Color;
  offsetY: number;
  paddingX: number;
  paddingY: number;
  radius: lng.Tools.CornerRadius;
  strokeColor: Color;
  strokeWidth: number;
  textStyle: lng.textures.TextTexture.Settings;
};

declare namespace Badge {
  export interface TemplateSpec extends Base.TemplateSpec {
    /**
     * path to image or inline SVG XML
     */
    icon?: string;

    /**
     * width of icon
     */
    iconWidth?: number;

    /**
     * height of icon
     */
    iconHeight?: number;

    /**
     * side of the text where icon will appear on (`left` or `right`)
     */
    iconAlign?: 'left' | 'right';

    /**
     * Badge text
     */
    title?: string;
  }

  export interface TypeConfig extends lng.Component.TypeConfig {
    SignalMapType: SignalMap;
  }
  /**
   * emitted when the Badge component finishes loading its content and adjusts the background to fit the text input size.
   */
  export type SignalMap = {
    loadedBadge(): void;
  };
}

declare class Badge<
  TemplateSpec extends Badge.TemplateSpec = Badge.TemplateSpec,
  TypeConfig extends Badge.TypeConfig = Badge.TypeConfig
> extends Base<TemplateSpec, TypeConfig> {
  /**
   * path to image or inline SVG XML
   */
  icon?: string;

  /**
   * width of icon
   */
  iconWidth?: number;

  /**
   * height of icon
   */
  iconHeight?: number;

  /**
   * side of the text where icon will appear on (`left` or `right`)
   */
  iconAlign?: 'left' | 'right';

  /**
   * Badge text
   */
  title?: string;

  get style(): BadgeStyle;
  set style(v: StylePartial<BadgeStyle>);

  // tags
  get _Background(): lng.Component;
  get _Text(): lng.Component;
  get _Icon(): lng.Component;
}

export { Badge as default, BadgeStyle };
