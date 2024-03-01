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
import Button, { ButtonStyle } from '../Button';
import TextBox from '../TextBox';
import type TextBoxStyle from '../TextBox/TextBox.style';
import { StylePartial } from '../../types/lui';

type LogoStyleObject = {
  radius: lng.Tools.CornerRadius;
  h: number;
  w: number;
};

type ListItemStyle = ButtonStyle & {
  alpha: number;
  descriptionTextStyle: TextBoxStyle;
  logoStyle: LogoStyleObject;
  paddingX: number;
  suffixH: number;
  /** @deprecated */
  titlePadding: number;
  contentSpacing: number;
  titleTextStyle: TextBoxStyle;
};

declare namespace ListItem {
  export interface TemplateSpec extends Button.TemplateSpec {
    /**
     * description text
     */
    description?: string;

    /**
     * Logo to be placed to the left of the title and description
     */
    prefixLogo?: string;

    /**
     * flag that if `true`, hides the title when `ListItem` is in unfocused or disabled mode
     */
    shouldCollapse?: boolean;

    /**
     * Logo to be placed to the right of the title and description
     */
    suffixLogo?: string;

    style?: StylePartial<ListItemStyle>;
  }
}

declare class ListItem<
  TemplateSpec extends ListItem.TemplateSpec = ListItem.TemplateSpec,
  TypeConfig extends lng.Component.TypeConfig = lng.Component.TypeConfig
> extends Button<TemplateSpec, TypeConfig> {
  /**
   * description text
   */
  description?: string;

  /**
   * Logo to be placed to the left of the title and description
   */
  prefixLogo?: string;

  /**
   * flag that if `true`, hides the title when `ListItem` is in unfocused or disabled mode
   */
  shouldCollapse?: boolean;

  /**
   * Logo to be placed to the right of the title and description
   */
  suffixLogo?: string;

  get style(): ListItemStyle;
  set style(v: StylePartial<ListItemStyle>);

  // tags
  get _Description(): TextBox;
}

export { ListItem as default, ListItemStyle, LogoStyleObject };
