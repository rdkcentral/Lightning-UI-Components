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

type MarqueeStyle = {
  fadeW: number;
  offset: number;
  shouldSmooth: boolean;
};

declare namespace Marquee {
  export interface TemplateSpec extends Base.TemplateSpec {
    /**
     * Automatically start scrolling the content on initiation
     */
    autoStart?: boolean;

    /**
     * It will center the entire texture if the width of the content is less than the container
     */
    centerAlign?: boolean;

    /**
     * Texture object for the marquee content
     */
    contentTexture?: object;

    /**
     * Color of the text
     */
    color: Color;

    /**
     * Delay in milliseconds before scrolling starts
     */
    delay?: number;

    /**
     * Overrides the length of the marquee loop. Used by withMarqueeSync to synchronize multiple marquee components
     */
    overrideLoopX?: number;

    /**
     * Number of times to repeat scrolling
     */
    repeat?: number;

    /**
     * Text content for the marquee title
     */
    title?: string;

    style?: StylePartial<MarqueeStyle>;
  }
}

declare class Marquee<
  TemplateSpec extends Marquee.TemplateSpec = Marquee.TemplateSpec,
  TypeConfig extends lng.Component.TypeConfig = lng.Component.TypeConfig
> extends Base<TemplateSpec, TypeConfig> {
  /**
   * Automatically start scrolling the content on initiation
   */
  autoStart?: boolean;

  /**
   * It will center the entire texture if the width of the content is less than the container
   */
  centerAlign?: boolean;

  /**
   * Texture object for the marquee content
   */
  contentTexture?: object;

  /**
   * Color of the text
   */
  color: Color;

  /**
   * Delay in milliseconds before scrolling starts
   */
  delay?: number;

  /**
   * Overrides the length of the marquee loop. Used by withMarqueeSync to synchronize multiple marquee components
   */
  overrideLoopX?: number;

  /**
   * Number of times to repeat scrolling
   */
  repeat?: number;

  /**
   * Text content for the marquee title
   */
  title?: string;

  // Methods:

  /**
   * Start scrolling the content
   */
  startScrolling(): void;

  /**
   * Stop scrolling the content
   */
  stopScrolling(): void;

  // Accessors

  /**
   * Get the current title's text content
   */
  get textContent(): string;

  get style(): MarqueeStyle;
  set style(v: StylePartial<MarqueeStyle>);

  // tags
  get _ContentClipper(): lng.Component;
  get _ContentBox(): lng.Component;
  get _Content(): lng.Component;
  get _ContentLoopTexture(): lng.Component;
}

export { Marquee as default, MarqueeStyle };
