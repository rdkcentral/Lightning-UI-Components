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
import { TextContent } from '../InlineContent/InlineContent';

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
    // signals: _setDimensions
    _updateInlineContent();
    // signals: _loadedMarqueeContent
    _updateMarquee();

    // signal: willMarquee
    _loadedMarqueeContent();

    // signal: textBoxChanged
    _notifyAncestors(w = this.w, h = this.h);
  };
}
declare class TextBox<
  TemplateSpec extends TextBox.TemplateSpec = TextBox.TemplateSpec,
  TypeConfig extends TextBox.TypeConfig = TextBox.TypeConfig
> extends Base<TemplateSpec, TypeConfig> {
  // Properties
  /**
   * Text to be displayed in element
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

  get marqueeOverrideLoopX(): number;
  set marqueeOverrideLoopX(v: number);

  get style(): TextBoxStyle;
  set style(v: StylePartial<TextBoxStyle>);
  // Methods
  toggleMarquee();

  // tags
  get _InlineContent(): lng.Component;
  get _Marquee(): lng.Component;
  get _Text(): lng.Component;
}

export { TextBox as default, TextBoxStyle };
