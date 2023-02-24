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
import Badge from '../Badge';
import Base from '../Base';
import type { StylePartial } from '../../types/lui';

type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

type ContentBase = {
  title?: string;
  announce?: string;
  style?: string | Record<string, unknown>;
};

export type TextContent =
  | string
  | (ContentBase & ({ text: string } | { icon: string } | { badge: string }));

type FlexItem = {
  grow?: number;
  shrink?: number;
  alignSelf?:
    | 'auto'
    | 'normal'
    | 'self-start'
    | 'self-end'
    | 'flex-start'
    | 'center'
    | 'baseline'
    | 'stretch'
    | 'safe'
    | 'unsafe';
  order?: unknown;
  'flex-basis'?: unknown;
  minWidth?: number;
  minHeight?: number;
  maxWidth?: number;
  maxHeight?: number;
  margin?: number;
  marginLeft?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
};

export type InlineContentStyle = {
  textY: number;
  iconW: number;
  iconH: number;
  contentSpacing: number;
  marginBottom: number;
  textStyle: lng.textures.TextTexture.Settings;
  maxLines: number;
  justify: JustifyContent;
};

export default class InlineContent extends Base {
  content?: TextContent[];
  contentProperties?: FlexItem;
  badgeY?: number;
  badgeProperties?: Partial<Badge>;
  justify?: JustifyContent;
  contentWrap?: boolean;
  customStyleMappings?: Record<string, unknown>;
  get style(): InlineContentStyle;
  set style(v: StylePartial<InlineContentStyle>);
}
