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
import { TextBoxStyle } from '../TextBox';

type GridOverlayStyle = {
  propertyTextStyle: TextBoxStyle;
  valueTextStyle: TextBoxStyle;
};

declare namespace GridOverlay {
  export interface TemplateSpec extends Base.TemplateSpec {
    /**
     * when set to true, it displays the column span rectangles.
     */
    showColumns?: boolean;

    /**
     * when set to true, it displays the rulers for spacing between columns.
     */
    showGutters?: boolean;

    /**
     * when set to true, it displays the X and Y margin rulers.
     */
    showMargins?: boolean;

    /**
     * when set to true, it displays the X and Y "safe" zone rulers. This represents the area where content should not be rendered to avoid screen clipping on a device.
     */
    showSafe?: boolean;

    /**
     * when set to true, it displays the textbox containing the exact numbers associated with the screen, margin, safe, and gutter sizes.
     */
    showText?: boolean;
  }
  export interface TypeConfig extends lng.Component.TypeConfig {
    SignalMapType: SignalMap;
  }
  /**
   * This signal indicates that the spacer's appearance and layout have been adjusted based on its properties
   */
  export type SignalMap = {
    spacerLoaded(): void;
  };
}
declare class GridOverlay<
  TemplateSpec extends GridOverlay.TemplateSpec = GridOverlay.TemplateSpec,
  TypeConfig extends lng.Component.TypeConfig = lng.Component.TypeConfig
> extends Base<TemplateSpec, TypeConfig> {
  /**
   * when set to true, it displays the column span rectangles.
   */
  showColumns?: boolean;

  /**
   * when set to true, it displays the rulers for spacing between columns.
   */
  showGutters?: boolean;

  /**
   * when set to true, it displays the X and Y margin rulers.
   */
  showMargins?: boolean;

  /**
   * when set to true, it displays the X and Y "safe" zone rulers. This represents the area where content should not be rendered to avoid screen clipping on a device.
   */
  showSafe?: boolean;

  /**
   * when set to true, it displays the textbox containing the exact numbers associated with the screen, margin, safe, and gutter sizes.
   */
  showText?: boolean;

  get style(): GridOverlayStyle;
  set style(v: StylePartial<GridOverlayStyle>);

  // tags
  get _Line(): lng.Component;
  get _TickLeft(): lng.Component;
  get _TickRight(): lng.Component;

  get _Columns(): lng.Component;

  get _Gutters(): lng.Component;
  get _GutterHorizontal(): lng.Component;

  get _Margins(): lng.Component;
  get _MarginHorizontal(): lng.Component;
  get _MarginLeft(): lng.Component;
  get _MarginRight(): lng.Component;
  get _MarginVertical(): lng.Component;
  get _MarginTop(): lng.Component;

  get _Safe(): lng.Component;
  get _SafeBottom(): lng.Component;
  get _SafeHorizontal(): lng.Component;
  get _SafeLeft(): lng.Component;
  get _SafeRight(): lng.Component;
  get _SafeTop(): lng.Component;
  get _SafeVertical(): lng.Component;

  get _TextColumnCount(): lng.Component;
  get _TextGutterY(): lng.Component;
  get _TextMarginX(): lng.Component;
  get _TextMarginY(): lng.Component;
  get _TextPanel(): lng.Component;
  get _TextSafe(): lng.Component;
  get _TextScreenH(): lng.Component;
  get _TextScreenW(): lng.Component;
}

export { GridOverlay as default, GridOverlayStyle };
