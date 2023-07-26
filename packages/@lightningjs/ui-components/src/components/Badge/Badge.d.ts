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

import type lng from '@lightningjs/core';
import type Base from '../Base';
import type { Color, StylePartial } from '../../types/lui';

type BadgeStyle = {
  backgroundColor: Color;
  contentSpacing: number;
  iconColor: Color;
  paddingX: number;
  paddingY: number;
  radius: lng.Tools.CornerRadius;
  strokeColor: Color;
  strokeWidth: number;
  textAlign: string;
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
}

declare class Badge<
  TemplateSpec extends Badge.TemplateSpec = Badge.TemplateSpec,
  TypeConfig extends lng.Component.TypeConfig = lng.Component.TypeConfig
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

  // Events
  /**
   * This event is triggered when the Badge component has completed loading its content, and the background has been adjusted to fit the size of the text input.
   */
  $loadedBadge(): void;

  get style(): BadgeStyle;
  set style(v: StylePartial<BadgeStyle>);

  // tags
  get _Text(): lng.Component;
  get _Icon(): lng.Component;
}

export { Badge as default, BadgeStyle };
