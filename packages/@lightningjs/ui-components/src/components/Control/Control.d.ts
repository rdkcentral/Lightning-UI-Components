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
import Button, { ButtonStyle } from '../Button';
import { StylePartial } from '../../types/lui';

type LogoStyleObject = {
  radius: lng.Tools.CornerRadius;
  h: number;
  w: number;
};

type ControlStyle = ButtonStyle & {
  iconStyle: Record<string, unknown>;
  logoStyle: LogoStyleObject;
  radius: lng.Tools.CornerRadius;
};

declare namespace Control {
  export interface TemplateSpec extends Button.TemplateSpec {
    /**
     *  URL for the icon asset
     */
    icon?: string;

    /**
     *  URL for the image asset
     */
    logo?: string;

    /**
     * flag that if `true`, hides the title when `Control` is in unfocused or disabled mode
     */
    shouldCollapse?: boolean;
  }
}

declare class Control<
  TemplateSpec extends Control.TemplateSpec = Control.TemplateSpec,
  TypeConfig extends lng.Component.TypeConfig = lng.Component.TypeConfig
> extends Button<TemplateSpec, TypeConfig> {
  /**
   *  URL for the icon asset
   */
  icon?: string;

  /**
   *  URL for the image asset
   */
  logo?: string;

  /**
   * flag that if `true`, hides the title when `Control` is in unfocused or disabled mode
   */
  shouldCollapse?: boolean;

  get style(): ControlStyle;
  set style(v: StylePartial<ControlStyle>);
}

export { Control as default, ControlStyle, LogoStyleObject };
