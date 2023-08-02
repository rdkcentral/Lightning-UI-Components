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
import { StylePartial } from '../../types/lui';

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

type InlineContentStyle = {
  textY: number;
  /** @deprecated */
  iconW: number;
  iconWidth: number;
  /** @deprecated */
  iconH: number;
  iconHeight: number;
  contentSpacing: number;
  marginBottom: number;
  textStyle: lng.textures.TextTexture.Settings;
  maxLines: number;
  justify: JustifyContent;
};

declare namespace InlineContent {
  export interface TemplateSpec extends Base.TemplateSpec {
    /**
     * list of data to render inline
     * TODO: Feel like there should be more to this
     */
    content?: TextContent[];
    /**
     * object setting flexItem props on all content items
     */
    contentProperties?: FlexItem;
    /**
     * y value of all badges
     */
    badgeY?: number;
    /**
     * styling to update the Badge component
     */
    badgeProperties?: Partial<Badge>;
    /**
     * alignment of first line flexbox content
     */
    justify?: JustifyContent;
    /**
     * determines whether the containing flexbox should wrap the content onto the next line
     */
    contentWrap?: boolean;
    /**
     * set of nested objects containing [Lightning Text](https://rdkcentral.github.io/Lightning/docs/textures/text) properties which can be referenced in the [Content Element Properties](#content-element-properties) to apply styling to individual text elements
     */
    customStyleMappings?: Record<string, unknown>;
    /**
     * maximum number of lines to render before truncation
     */
    maxLines?: number;
    /**
     * suffix appended to last line of content if it will exceed the `maxLines`
     */
    maxLinesSuffix?: string;
  }
  export interface TypeConfig extends lng.Component.TypeConfig {
    SignalMapType: SignalMap;
  }
  export type SignalMap = {
    // signals: _createIcon & _createBadge
  };

  // events: $loadedInlineContent(): void;
}
declare class InlineContent<
  TemplateSpec extends InlineContent.TemplateSpec = InlineContent.TemplateSpec,
  TypeConfig extends InlineContent.TypeConfig = InlineContent.TypeConfig
> extends Base<TemplateSpec, TypeConfig> {
  /**
   * list of data to render inline
   * TODO: Feel like there should be more to this
   */
  content?: TextContent[];
  /**
   * object setting flexItem props on all content items
   */
  contentProperties?: FlexItem;
  /**
   * y value of all badges
   */
  badgeY?: number;
  /**
   * styling to update the Badge component
   */
  badgeProperties?: Partial<Badge>;
  /**
   * alignment of first line flexbox content
   */
  justify?: JustifyContent;
  /**
   * determines whether the containing flexbox should wrap the content onto the next line
   */
  contentWrap?: boolean;
  /**
   * set of nested objects containing [Lightning Text](https://rdkcentral.github.io/Lightning/docs/textures/text) properties which can be referenced in the [Content Element Properties](#content-element-properties) to apply styling to individual text elements
   */
  customStyleMappings?: Record<string, unknown>;
  /**
   * maximum number of lines to render before truncation
   */
  maxLines?: number;
  /**
   * suffix appended to last line of content if it will exceed the `maxLines`
   */
  maxLinesSuffix?: string;

  get style(): InlineContentStyle;
  set style(v: StylePartial<InlineContentStyle>);
}

export { InlineContent as default, InlineContentStyle };
