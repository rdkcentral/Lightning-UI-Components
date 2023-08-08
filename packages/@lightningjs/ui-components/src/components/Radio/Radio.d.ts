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

type RadioStyle = {
  alpha: number;
  backgroundColor: Color;
  backgroundColorChecked: Color;
  knobColor: Color;
  knobHeight: number;
  knobWidth: number;
  radius: lng.Tools.CornerRadius;
  strokeColor: Color;
  strokeWidth: number;
};

declare namespace Radio {
  export interface TemplateSpec extends Base.TemplateSpec {
    /**
     * status of the radio button
     */
    checked?: boolean;
  }
}

declare class Radio<
  TemplateSpec extends Radio.TemplateSpec = Radio.TemplateSpec,
  TypeConfig extends lng.Component.TypeConfig = lng.Component.TypeConfig
> extends Base<TemplateSpec, TypeConfig> {
  /**
   * status of the radio button
   */
  checked?: boolean;

    // Method
  /**
   * Toggles the radio state and updates the UI.
   */
  toggle(): void;

  get style(): RadioStyle;
  set style(v: StylePartial<RadioStyle>);

  // tags

  /**
   * returns the radio knob
   */
  get _Knob(): lng.Component;

  /**
   * returns the body of the radio
   */
  get _Body(): lng.Component;

  /**
   * returns the stroke
   */
  get _Stroke(): lng.Component;
}

export { Radio as default, RadioStyle };
