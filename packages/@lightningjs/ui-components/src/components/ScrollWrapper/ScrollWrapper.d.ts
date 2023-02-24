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
import type { StylePartial } from '../../types/lui';
import type { TextBoxStyle } from '../TextBox';

export type ScrollWrapperStyle = {
  textStyle: TextBoxStyle;
  scrollBarW: number;
  scrollBarH: number;
  fadeHeight: 100;
  scroll: {
    timingFunction: string;
    duration: number;
  };
  contentMarginTop: number;
  contentMarginLeft: number;
  sliderMarginLeft: number;
};

export default class ScrollWrapper extends Base {
  autoScroll?: boolean;
  autoScrollDelay?: number;
  autoScrollSpeed?: number;
  content?: string | (string | lng.Component)[];
  fadeContent?: boolean;
  scrollDuration?: number;
  scrollStep?: number;
  showScrollBar?: boolean;
  shouldWrap?: boolean;
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  get style(): ScrollWrapperStyle;
  set style(v: StylePartial<ScrollWrapperStyle>);

  // tags
  get _FadeContainer(): lng.Component;
  get _Slider(): lng.Component;
  get _ScrollContainer(): lng.Component;
  get _ScrollableText(): lng.Component;
}
