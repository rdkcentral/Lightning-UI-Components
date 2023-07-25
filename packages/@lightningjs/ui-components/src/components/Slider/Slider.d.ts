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
import type { ProgressBarStyle } from '../ProgressBar';

export type SliderStyle = {
  arrowAlphaValue: number;
  arrowAlphaValueLimit: number;
  arrowColor: Color;
  arrowHeight: number;
  arrowSpacing: number;
  arrowWidth: number;
  containerHeight: number;
  iconLeftSrc: string;
  iconRightSrc: string;
  minWidth: number;
  progressBarStyle: ProgressBarStyle;
  showArrows: boolean;
  showKnob: boolean;
  circleAnimation: {
    timingFunction: string;
    duration: number;
    delay: number;
  };
};

declare namespace Slider {
  export interface TemplateSpec extends Base.TemplateSpec {
    /**
     * upper bound of `value`
     */
    max?: number;

    /**
     *  lower bound of `value`
     */
    min?: number;

    /**
     * The increment or decrement step for changing the value of the slider.
     */
    step?: number;

    /**
     * current value of the slider.
     */
    value?: number;

    /**
     * If set to true, the slider will be displayed vertically otherwise, it will be displayed horizontally.
     */
    vertical?: boolean;
  }
}

declare class Slider<
  TemplateSpec extends Slider.TemplateSpec = Slider.TemplateSpec,
  TypeConfig extends lng.Component.TypeConfig = lng.Component.TypeConfig
> extends Base<TemplateSpec, TypeConfig> {
  /**
   * upper bound of `value`
   */
  max?: number;

  /**
   *  lower bound of `value`
   */
  min?: number;

  /**
   * The increment or decrement step for changing the value of the slider.
   */
  step?: number;

  /**
   * current value of the slider.
   */
  value?: number;

  /**
   * If set to true, the slider will be displayed vertically otherwise, it will be displayed horizontally.
   */
  vertical?: boolean;

  get style(): SliderStyle;
  set style(v: StylePartial<SliderStyle>);

  // tags
  get _Container(): lng.Component;
  get _SliderBar(): lng.Component;
  get _Bar(): lng.Component;
  get _Circle(): lng.Component;
  get _LeftArrow(): lng.Component;
  get _RightArrow(): lng.Component;
}

export default Slider;
