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
  sliderHeight: number;
  circleAnimation: {
    timingFunction: string;
    duration: number;
    delay: number;
  };
};

export default class Slider extends Base {
  max?: number;
  min?: number;
  step?: number;
  value?: number;
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
