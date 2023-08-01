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
import Icon from '../Icon';
import { Color, StylePartial } from '../../types/lui';

type CheckboxStyle = {
  alpha: number;
  backgroundColor: Color;
  backgroundColorChecked: Color;
  checkColor: Color;
  checkH: number;
  checkW: number;
  checkSrc: string;
  radius: lng.Tools.CornerRadius;
  strokeColor: Color;
  strokeWidth: number;
};

declare namespace Checkbox {
  export interface TemplateSpec extends Base.TemplateSpec {
    /**
     * Indicates whether the checkbox is checked or unchecked.
     * Setting this to `true` will check the checkbox, and setting it to `false` will uncheck it.
     */
    checked?: boolean;
  }
}

declare class Checkbox<
  TemplateSpec extends Checkbox.TemplateSpec = Checkbox.TemplateSpec,
  TypeConfig extends lng.Component.TypeConfig = lng.Component.TypeConfig
> extends Base<TemplateSpec, TypeConfig> {
  /**
   * Indicates whether the checkbox is checked or unchecked.
   * Setting this to `true` will check the checkbox, and setting it to `false` will uncheck it.
   */
  checked?: boolean;

  // Method
  /**
   * Toggles the checkbox state and updates the UI.
   */
  toggle(): void;

  get style(): CheckboxStyle;
  set style(v: StylePartial<CheckboxStyle>);

  // tags
  get _Check(): Icon;
  get _Body(): lng.Component;
  get _Stroke(): lng.Component;
}

export { Checkbox as default, CheckboxStyle };
