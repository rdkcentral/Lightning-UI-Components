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
import TextBox, { TextBoxStyle } from '../TextBox';

type TooltipStyle = {
  backgroundColor: Color;
  marginBottom: number;
  paddingX: number;
  paddingY: number;
  /** @deprecated */
  pointerW: number;
  pointerWidth: number;
  /** @deprecated */
  pointerH: number;
  pointerHeight: number;
  radius: lng.Tools.CornerRadius;
  textStyle: TextBoxStyle;
  transition: lng.types.TransitionSettings;
};

declare namespace Tooltip {
  export interface TemplateSpec extends Base.TemplateSpec {
    /**
     * Text of tooltip content
     */
    title?: string;

    /**
     * The amount of time, in milliseconds, before the tooltip is displayed after being focused
     */
    delayVisible?: number;

    /**
     * The amount of time, in milliseconds, the tooltip is displayed before transitioning out of the display
     */
    timeVisible?: number;
  }
}

declare class Tooltip<
  TemplateSpec extends Tooltip.TemplateSpec = Tooltip.TemplateSpec,
  TypeConfig extends lng.Component.TypeConfig = lng.Component.TypeConfig
> extends Base<TemplateSpec, TypeConfig> {
  /**
   * text of tooltip
   */
  title?: string;

  /**
   * the amount of time, in milliseconds, before the tooltip is displayed after being focused
   */
  delayVisible?: number;

  /**
   * the amount of time, in milliseconds, the tooltip is displayed before transitioning out of the display
   */
  timeVisible?: number;

  get style(): TooltipStyle;
  set style(v: StylePartial<TooltipStyle>);

  // tags
  get _Background(): lng.Component;
  get _Text(): TextBox;
}

export { Tooltip as default, TooltipStyle };
