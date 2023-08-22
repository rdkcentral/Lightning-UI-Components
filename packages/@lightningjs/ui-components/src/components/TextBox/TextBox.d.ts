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
import { StylePartial } from '../../types/lui';
import Marquee from '../Marquee';
import InlineContent from '../InlineContent';

// TODO: Properly export TextContent from root level of ui-components so we don't have to grab it from InlineContent
type ContentBase = {
  title?: string;
  announce?: string;
  style?: string | Record<string, unknown>;
};

type TextContent =
  | string
  | (ContentBase & ({ text: string } | { icon: string } | { badge: string }));

type TextBoxStyle = {
  offsetY: number;
  offsetX: number;
  textStyle: lng.textures.TextTexture.Settings | string;
  typography: Record<string, lng.textures.TextTexture.Settings>;
};

declare namespace TextBox {
  export interface TemplateSpec extends Base.TemplateSpec {
    /**
     * Text to be displayed in element
     * This could be a string or content InlineContent, a string or an array from InlineContent
     */
    content?: string | TextContent[];
    /**
     * If true, allows the width of the text to be set with `w`
     */
    fixed?: boolean;
    /**
     * If true, allows text to be scrollable
     */
    marquee?: boolean;
  }
  export interface TypeConfig extends lng.Component.TypeConfig {
    SignalMapType: SignalMap;
  }

  export type SignalMap = {
    /**
     * emits when w and/or height has changed
     */
    textBoxChanged(): void;
    /**
     * emits when Marquee content has been loaded
     */
    willMarque(): void;
  };
}
declare class TextBox<
  TemplateSpec extends TextBox.TemplateSpec = TextBox.TemplateSpec,
  TypeConfig extends TextBox.TypeConfig = TextBox.TypeConfig
> extends Base<TemplateSpec, TypeConfig> {
  // Properties

  /**
   * Text to be displayed in element
   * Takes in a string or an Array from InlineContent
   */
  content?: string | TextContent[];
  /**
   * If true, allows the width of the text to be set with `w`
   */
  fixed?: boolean;
  /**
   * If true, allows text to be scrollable
   */
  marquee?: boolean;
  hideOnLoad?: boolean;

  // Accessors

  /**
   * returns a string from content
   */
  get title(): string;
  /**
   * returns a number used to alter the length of the marquee loop
   */
  get marqueeOverrideLoopX(): number;
  /**
   * sets the number used to determine the length of the marquee loop
   */
  set marqueeOverrideLoopX(v: number);

  get style(): TextBoxStyle;
  set style(v: StylePartial<TextBoxStyle>);

  // Methods
  /**
   * A method that calls the private _toggleMarquee method to toggle text to scroll or not scroll
   */
  toggleMarquee(): void;

  // tags
  get _InlineContent(): InlineContent;
  get _Marquee(): Marquee;
  get _Text(): TextBox;
}

export { TextBox as default, TextBoxStyle, TextContent };
