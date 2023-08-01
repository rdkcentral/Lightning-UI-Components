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
import type { Color, StylePartial } from '../../types/lui';

type ProgressBarStyle = {
  animation: object;
  barColor: Color;
  progressColor: Color;
  radius: lng.Tools.CornerRadius;
};

declare namespace ProgressBar {
  export interface TemplateSpec extends Base.TemplateSpec {
    /**
     * percentage of the current progress from 0 to 1
     */
    progress?: number;
  }
}

declare class ProgressBar<
  TemplateSpec extends ProgressBar.TemplateSpec = ProgressBar.TemplateSpec,
  TypeConfig extends lng.Component.TypeConfig = lng.Component.TypeConfig
> extends Base<TemplateSpec, TypeConfig> {
  /**
   * percentage of the current progress from 0 to 1
   */
  progress?: number;
  get style(): ProgressBarStyle;
  set style(v: StylePartial<ProgressBarStyle>);

  // tags
  get _Bar(): lng.Component;
  get _Progress(): lng.Component;
}

export { ProgressBar as default, ProgressBarStyle };
