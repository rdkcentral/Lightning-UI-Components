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
import type { Color, StylePartial } from '../../types/lui';
import Surface, { SurfaceStyle } from '../Surface';
import type { TextBoxStyle } from '../TextBox'; // text in Button is all using our own version of TextBox

export type ButtonStyle = SurfaceStyle & {
  justify: 'center' | 'left' | 'right';
  minWidth: number;
  paddingX: number;
  paddingXNoTitle: number;
  titlePadding: number;
  textStyle: TextBoxStyle;
  contentColor: Color;
};

declare namespace Button {
  export interface TemplateSpec extends Surface.TemplateSpec {
    Content: typeof lng.Component<lng.Component.TemplateSpecLoose>;
    /**
     * forces Button to have a statically set width
     * when true, `w` overrides dynamically calculated width
     */
    fixed?: boolean;

    /**
     * alignment of the button's content
     */
    justify?: 'center' | 'left' | 'right';

    /**
     * Lightning components to be placed to the left of the title
     */
    prefix?:
      | typeof lng.Component<lng.Component.TemplateSpecLoose>
      | Array<typeof lng.Component<lng.Component.TemplateSpecLoose>>;

    /**
     * Lightning components to be placed to the right of the title
     */
    suffix?:
      | typeof lng.Component<lng.Component.TemplateSpecLoose>
      | Array<typeof lng.Component<lng.Component.TemplateSpecLoose>>;

    /**
     * Button text
     */
    title?: string;
  }
}

declare class Button<
  TemplateSpec extends Button.TemplateSpec,
  TypeConfig extends lng.Component.TypeConfig
> extends Surface<TemplateSpec, TypeConfig> {
  fixed?: boolean;

  justify?: 'center' | 'left' | 'right';

  prefix?:
    | typeof lng.Component<lng.Component.TemplateSpecLoose>
    | Array<typeof lng.Component<lng.Component.TemplateSpecLoose>>;

  suffix?:
    | typeof lng.Component<lng.Component.TemplateSpecLoose>
    | Array<typeof lng.Component<lng.Component.TemplateSpecLoose>>;

  get style(): ButtonStyle;
  set style(v: StylePartial<ButtonStyle>);

  title?: string;

  // tags
  // TODO do we need these?
  get _Prefix(): lng.Component;
  get _Suffix(): lng.Component;
  get _TextWrapper(): lng.Component;
  get _Title(): lng.Component;
}

export default Button;
