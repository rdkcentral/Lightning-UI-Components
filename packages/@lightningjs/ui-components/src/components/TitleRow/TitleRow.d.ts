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
import type Row from '../Row';
import FocusManager from '../FocusManager';
import type { NavigationManagerStyle } from '../NavigationManager/NavigationManager';
import type { StylePartial } from '../../types/lui';
import type { TextBoxStyle } from '../TextBox';

// Why does `TitleRow` extend `Row` but use style props from `NavigationManager`?
/**
 * `Row` style props are the same as `NavigationManager` style props.
 * We are not re-mapping properties and defining a `RowStyle` in `Row` since `Row` inherits all of `NavigationManager` style props.
 * Hence `TitleRowStyle` uses `NavigationManagerStyle` rather than the previous `RowStyle`
 */

type TitleRowStyle = NavigationManagerStyle & {
  w: number;
  titleMarginLeft: number;
  titleTextStyle: TextBoxStyle;
  titleMarginBottom: number;
  /** @deprecated */
  rowMarginTop: number;
};

declare namespace TitleRow {
  export interface TemplateSpec extends Row.TemplateSpec {
    /**
     * Title text to be displayed above the `Row` items
     */
    title?: string;
  }
}

declare class TitleRow<
  TemplateSpec extends TitleRow.TemplateSpec = TitleRow.TemplateSpec,
  TypeConfig extends FocusManager.TypeConfig = FocusManager.TypeConfig
> extends Row<TemplateSpec, TypeConfig> {
  // Properties
  /**
   * Title text to be displayed above the `Row` items
   */
  title?: string;

  // Accessors
  get style(): TitleRowStyle;
  set style(v: StylePartial<TitleRowStyle>);

  // Tags
  get _Title(): lng.Component;
}
export { TitleRow as default, TitleRowStyle };
