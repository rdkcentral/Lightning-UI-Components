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
import { StylePartial } from '../../types/lui';
import Artwork from '../Artwork';
import Icon from '../Icon';
import TextBox from '../TextBox';
import ProgressBar from '../ProgressBar';
import MetadataBase from '../MetadataBase';
import Badge from '../Badge';
import Checkbox from '../Checkbox';
import Label from '../Label';
import Surface, { SurfaceStyle } from '../Surface';

type TileStyle = SurfaceStyle & {
  animationEntrance: lng.types.TransitionSettings.Literal;
  animationExit: lng.types.TransitionSettings.Literal;
  iconWidth: number;
  iconHeight: number;
  metadataLocation: 'standard' | 'inset';
  paddingX: number;
  paddingY: number;
  paddingYProgress: number;
  paddingYBetweenContent: number;
  radius: lng.Tools.CornerRadius | string;
};
declare namespace Tile {
  export interface TemplateSpec extends Surface.TemplateSpec {
    /**
     * Object containing all properties supported in the [Artwork component](?path=/docs/components-artwork--artwork)
     */
    artwork: lng.Element.PatchTemplate<Artwork.TemplateSpec>;
    /**
     * Object containing all properties supported in the [Badge component](?path=/docs/components-badge--text)
     */
    badge?: lng.Element.PatchTemplate<Badge.TemplateSpec>;

    /**
     * Object containing all properties supported in the [Checkbox component](?path=/docs/components-checkbox--checkbox)
     */
    checkbox?: lng.Element.PatchTemplate<Checkbox.TemplateSpec>;
    /**
     * If true, changes format of itemLayout to circle
     */
    circle?: boolean;
    /**
     * Object containing all properties supported in the [Label component](?path=/docs/components-label--label)
     */
    label?: lng.Element.PatchTemplate<Label.TemplateSpec>;
    /**
     * icon source
     */
    iconSrc?: string;
    /**
     * Controls where there metadata is displayed in relation to the Tile. Available values are 'standard' and 'inset'
     */
    metadataLocation?: 'standard' | 'inset';
    /**
     * Object containing all properties supported in the [MetadataTile component](?path=/docs/components-metadatatile--metadata-tile)<br /> Can use a different Metadata component by passing in a 'type' and then that component's properties
     */
    metadata?: lng.Element.PatchTemplate<MetadataBase.TemplateSpec>;
    /**
     * Metadata will be shown at all times if set to true, otherwise it will only show when the Tile has focusMetadata will be shown at all times if set to true, otherwise it will only show when the Tile has focus
     */
    persistentMetadata?: boolean;
    /**
     * Object containing all properties supported in the [ProgressBar component](?path=/docs/components-progressbar--progress-bar)
     */
    progressBar?: lng.Element.PatchTemplate<ProgressBar.TemplateSpec>;
  }
}
declare class Tile<
  TemplateSpec extends Tile.TemplateSpec = Tile.TemplateSpec,
  TypeConfig extends lng.Component.TypeConfig = lng.Component.TypeConfig
> extends Surface<TemplateSpec, TypeConfig> {
  // Properties
  /**
   * Object containing all properties supported in the [Artwork component](?path=/docs/components-artwork--artwork)
   */
  artwork: lng.Element.PatchTemplate<Artwork.TemplateSpec>;
  /**
   * Object containing all properties supported in the [Badge component](?path=/docs/components-badge--text)
   */
  badge?: lng.Element.PatchTemplate<Badge.TemplateSpec>;
  /**
   * Object containing all properties supported in the [Checkbox component](?path=/docs/components-checkbox--checkbox)
   */
  checkbox?: lng.Element.PatchTemplate<Checkbox.TemplateSpec>;
  /**
   * If true, changes format of itemLayout to circle
   */
  circle?: boolean;
  /**
   * Object containing all properties supported in the [Label component](?path=/docs/components-label--label)
   */
  label?: lng.Element.PatchTemplate<Label.TemplateSpec>;
  /**
   * Controls where there metadata is displayed in relation to the Tile. Available values are 'standard' and 'inset'
   */
  metadataLocation?: 'standard' | 'inset';
  /**
   * Object containing all properties supported in the [MetadataTile component](?path=/docs/components-metadatatile--metadata-tile)<br /> Can use a different Metadata component by passing in a 'type' and then that component's properties
   */
  metadata?: lng.Element.PatchTemplate<MetadataBase.TemplateSpec>;
  /**
   * Metadata will be shown at all times if set to true, otherwise it will only show when the Tile has focusMetadata will be shown at all times if set to true, otherwise it will only show when the Tile has focus
   */
  persistentMetadata?: boolean;
  /**
   * Object containing all properties supported in the [ProgressBar component](?path=/docs/components-progressbar--progress-bar)
   */
  progressBar?: lng.Element.PatchTemplate<ProgressBar.TemplateSpec>;

  get innerH(): number;
  get style(): TileStyle;
  set style(v: StylePartial<TileStyle>);

  // tags
  get _Artwork(): Artwork;
  get _Content(): TextBox;
  get _Tile(): TextBox;
  get _Badge(): Badge;
  get _Checkbox(): Checkbox;
  get _Icon(): Icon;
  get _Metadata(): MetadataBase;
  get _ProgressBar(): ProgressBar;
  get _Label(): Label;
}

export { Tile as default, TileStyle };
