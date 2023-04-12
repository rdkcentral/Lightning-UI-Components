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
import Base from '../Base/Base';
import type { Color, StylePartial } from '../../types/lui';

export type TransitionObject = {
  delay: number;
  duration: number;
  timingFunction: string;
};

export type SurfaceStyle = {
  animation: TransitionObject;
  backgroundColor: Color;
  radius: lng.Tools.CornerRadius;
  scale: number;
};

declare namespace Surface {
  export interface TemplateSpec extends Base.TemplateSpec {}

  export interface EventMap extends Base.EventMap {}

  export interface TypeConfig extends Base.TypeConfig {
    get innerH(): number;
    get innerW(): number;
    get style(): SurfaceStyle;
    set style(v: StylePartial<SurfaceStyle>);

    // tags
    get _Background(): typeof lng.Component; // TODO should this be typeof?
  }
}

declare class Surface<
  TemplateSpec extends Surface.TemplateSpec = Surface.TemplateSpec,
  TypeConfig extends Surface.TypeConfig = Surface.TypeConfig
> extends Base<Base.TemplateSpec, Base.TypeConfig> {}

export default Surface;
