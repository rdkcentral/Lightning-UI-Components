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

type ToggleStyle = {
  backgroundColor: Color;
  backgroundColorChecked: Color;
  knobWidth: number;
  knobHeight: number;
  knobPadding: number;
  knobRadius: lng.Tools.CornerRadius;
  knobColor: Color;
  knobColorChecked: Color;
  /* @deprecated */
  knobX: number;
  /* @deprecated */
  knobXChecked: number;
  strokeColor: Color;
  strokeRadius: lng.Tools.CornerRadius;
  strokeWeight: number;
};

declare namespace Toggle {
  export interface TemplateSpec extends Base.TemplateSpec {
    /**
     * status of the toggle
     */
    checked?: boolean;
  }
}

declare class Toggle<
  TemplateSpec extends Toggle.TemplateSpec = Toggle.TemplateSpec,
  TypeConfig extends lng.Component.TypeConfig = lng.Component.TypeConfig
> extends Base<TemplateSpec, TypeConfig> {
  /**
   * status of the toggle
   */
  checked?: boolean;

  // Method

  toggle(): this; // TODO is this valid?

  get style(): ToggleStyle;
  set style(v: StylePartial<ToggleStyle>);

  // tags

  /**
   * returns the container containing the stroke and knob
   */
  get _Container(): lng.Component;

  /**
   * returns the toggle knob
   */
  get _Knob(): lng.Component;

  /**
   * returns the stroke
   */
  get _Stroke(): lng.Component;
}

export { Toggle as default, ToggleStyle };
