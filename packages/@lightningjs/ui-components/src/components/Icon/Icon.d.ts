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

type IconStyle = {
  color: Color;
};

declare namespace Icon {
  export interface TemplateSpec extends Base.TemplateSpec {
    /**
     * path to image or inline SVG XML
     */
    color: number; //TODO: return type of color is string or number and is it optional
    /**
     * when `true`, icon width and height will not dynamically resize to the final texture's `finalW` and `finalH` properties
     */
    fixed?: boolean;

    /**
     * path to image or inline SVG XML
     */
    icon?: string;
  }
  export interface TypeConfig extends lng.Component.TypeConfig {
    SignalMapType: SignalMap;
  }

  /**
   * emitted when an item in the Icon component changes.
   */
  export type SignalMap = {
    itemChanged(icon: Icon): void;
  };
}

declare class Icon<
  TemplateSpec extends Icon.TemplateSpec = Icon.TemplateSpec,
  TypeConfig extends lng.Component.TypeConfig = lng.Component.TypeConfig
> extends Base<TemplateSpec, TypeConfig> {
  /**
   * path to image or inline SVG XML
   */
  color: number;

  /**
   * when `true`, icon width and height will not dynamically resize to the final texture's `finalW` and `finalH` properties
   */
  fixed?: boolean;

  /**
   * path to image or inline SVG XML
   */
  icon?: string;

  get style(): IconStyle;
  set style(v: StylePartial<IconStyle>);
}

export { Icon as default, IconStyle };
