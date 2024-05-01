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
import { Color, StylePartial } from '../../types/lui';
import Surface, { SurfaceStyle } from '../Surface';
// text should be using our own version of TextBox
import TextBox from '../TextBox';
import type TextBoxStyle from '../TextBox/TextBox.style';
import Icon from '../Icon';

type TabStyle = SurfaceStyle & {
  backgroundColor: Color;
  contentColor: Color;
  iconMarginRight: number;
  iconSize: number;
  /**
   * @deprecated
   * use paddingXNoTitle instead
   * of noTitlePaddingX
   */
  noTitlePaddingX: number;
  paddingXNoTitle: number;
  paddingX: number;
  paddingY: number;
  radius: number;
  textStyle: TextBoxStyle;
};

declare namespace Tab {
  export interface TemplateSpec extends Surface.TemplateSpec {
    /**
     * path to icon to prepend tab title with
     */
    icon?: string;

    /**
     * text to display on tab
     */
    title?: string;
  }
}

declare class Tab<
  TemplateSpec extends Tab.TemplateSpec = Tab.TemplateSpec,
  TypeConfig extends lng.Component.TypeConfig = lng.Component.TypeConfig
> extends Surface<TemplateSpec, TypeConfig> {
  /**
   * path to icon to prepend tab title with
   */
  icon?: string;

  /**
   * text to display on tab
   */
  title?: string;

  get _textW(): number;
  get _iconW(): number;
  get _iconH(): number;
  get _paddingX(): number;
  get style(): TabStyle;
  set style(v: StylePartial<TabStyle>);

  // tags
  get _Content(): lng.Component;
  get _Icon(): Icon;
  get _Text(): TextBox;
}

export { Tab as default, TabStyle };
