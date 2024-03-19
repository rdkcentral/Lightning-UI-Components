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
import ScrollSlider from './ScrollSlider';
import Base from '../Base';
import { StylePartial } from '../../types/lui';
import ScrollWrapperStyle from './ScrollWrapper.style';

declare namespace ScrollWrapper {
  export interface TemplateSpec extends Base.TemplateSpec {
    /**
     * whether or not to auto scroll the content
     */
    autoScroll?: boolean;

    /**
     * delay, in ms, before auto scroll starts
     */
    autoScrollDelay?: number;

    /**
     * time delay, in ms, before each scroll step
     */
    autoScrollSpeed?: number;

    /**
     * Content is items that are viewable in the container. It can be an
     * array of strings or an array of lightning elements that can be patched in
     */
    content?: string | (string | lng.Component)[];

    /**
     * fade out content at the bottom of the ScrollWrapper
     */
    fadeContent?: boolean;

    /**
     * determines the direction items are placed in flexContainer
     */
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';

    /**
     * animation duration for the scroll
     */
    scrollDuration?: number;

    /**
     * how many pixels to scroll by on every up/down keypress
     */
    scrollStep?: number;

    /**
     * determines if items should wrap around ScrollContainer
     */
    shouldWrap?: boolean;

    /**
     * show the scroll bar when focused
     */
    showScrollBar?: boolean;
  }
}

declare class ScrollWrapper<
  TemplateSpec extends ScrollWrapper.TemplateSpec = ScrollWrapper.TemplateSpec,
  TypeConfig extends lng.Component.TypeConfig = lng.Component.TypeConfig
> extends Base<TemplateSpec, TypeConfig> {
  /**
   * whether or not to auto scroll the content
   */
  autoScroll?: boolean;

  /**
   * delay, in ms, before auto scroll starts
   */
  autoScrollDelay?: number;

  /**
   * time delay, in ms, before each scroll step
   */
  autoScrollSpeed?: number;

  /**
   * Content is items that are viewable in the container. It can be an
   * array of strings or an array of lightning elements that can be patched in
   */
  content?: string | (string | lng.Component)[];

  /**
   * fade out content at the bottom of the ScrollWrapper
   */
  fadeContent?: boolean;

  /**
   * determines the direction items are placed in flexContainer
   */
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';

  /**
   * animation duration for the scroll
   */
  scrollDuration?: number;

  /**
   * how many pixels to scroll by on every up/down keypress
   */
  scrollStep?: number;

  /**
   * determines if items should wrap around ScrollContainer
   */
  shouldWrap?: boolean;

  /**
   * show the scroll bar when focused
   */
  showScrollBar?: boolean;

  /**
   * Resets the `y` value of both the content and the scroll bar
   */
  resetScroll(): void;

  get style(): ScrollWrapperStyle;
  set style(v: StylePartial<ScrollWrapperStyle>);

  // tags
  get _FadeContainer(): lng.Component;
  get _Slider(): ScrollSlider;
  get _ScrollContainer(): lng.Component;
  get _ScrollableText(): lng.Component;
}

export { ScrollWrapper as default };
