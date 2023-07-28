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

type LabelStyle = {
  backgroundColor: Color;
  paddingX: number;
  paddingY: number;
  radius: lng.Tools.CornerRadius;
  textStyle: lng.textures.TextTexture.Settings;
};

declare namespace Label {
  export interface TemplateSpec extends Base.TemplateSpec {
    /**
     * text to display in label
     */
    title: string;
  }
  export interface TypeConfig extends lng.Component.TypeConfig {
    SignalMapType: SignalMap;
  }
  export type SignalMap = {
    updateBackground(): void;
  };
}
declare class Label<
  TemplateSpec extends Label.TemplateSpec = Label.TemplateSpec
> extends Base<TemplateSpec> {
  /**
   * text to display in label
   */
  title: string;
  get style(): LabelStyle;
  set style(v: StylePartial<LabelStyle>);

  // tags
  get _Background(): lng.Component;
  get _Text(): lng.Component;
}

export { Label as default, LabelStyle };
