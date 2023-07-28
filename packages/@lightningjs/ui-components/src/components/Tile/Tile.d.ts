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
import { MetadataBaseStyle } from '../MetadataBase';
import { StylePartial } from '../../types/lui';
import Surface, { SurfaceStyle } from '../Surface';
import { Artwork } from '..';

type TileStyle = SurfaceStyle & {
  animationEntrance: Record<string, unknown>;
  animationExit: Record<string, unknown>;
  metadataLocation: 'standard' | 'inset';
  paddingX: number;
  paddingY: number;
  paddingYProgress: number;
  paddingYBetweenContent: number;
  radius: lng.Tools.CornerRadius | string;
};

// Utility type to get a PatchTemplate by Component constructor.
// TODO: Replace this with an official version from Lightning when one exists
// type PatchTemplate<T extends lng.Element.Constructor> =
//   lng.Element.PatchTemplate<lng.Element.ExtractTemplateSpec<InstanceType<T>>>;
declare namespace Tile {
  export interface TemplateSpec extends Surface.TemplateSpec {
    Content: typeof lng.Component<lng.Component.TemplateSpecLoose>;
    /**
     * Object containing all properties supported in the [Artwork component](?path=/docs/components-artwork--artwork)
     */
    artwork: lng.Element.PatchTemplate<Artwork.TemplateSpec>;
    /**
     * Object containing all properties supported in the [Badge component](?path=/docs/components-badge--text)
     */
    badge?: Record<string, unknown>;
    /**
     * Object containing all properties supported in the [Checkbox component](?path=/docs/components-checkbox--checkbox)
     */
    checkbox?: Record<string, unknown>;
    /**
     * Object containing all properties supported in the [Label component](?path=/docs/components-label--label)
     */
    label?: Record<string, unknown>;
    /**
     * Controls where there metadata is displayed in relation to the Tile. Available values are 'standard' and 'inset'
     */
    metadataLocation?: string;
    /**
     * Object containing all properties supported in the [MetadataTile component](?path=/docs/components-metadatatile--metadata-tile)<br /> Can use a different Metadata component by passing in a 'type' and then that component's properties
     */
    metadata?: MetadataBaseStyle;
    /**
     * Metadata will be shown at all times if set to true, otherwise it will only show when the Tile has focusMetadata will be shown at all times if set to true, otherwise it will only show when the Tile has focus
     */
    persistentMetadata?: boolean;
    /**
     * Object containing all properties supported in the [ProgressBar component](?path=/docs/components-progressbar--progress-bar)
     */
    progressBar?: Record<string, unknown>;
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
  artwork: lightning.Element.PatchTemplate<Artwork.TemplateSpec>;
  /**
   * Object containing all properties supported in the [Badge component](?path=/docs/components-badge--text)
   */
  badge?: Record<string, unknown>;
  /**
   * Object containing all properties supported in the [Checkbox component](?path=/docs/components-checkbox--checkbox)
   */
  checkbox?: Record<string, unknown>;
  /**
   * Object containing all properties supported in the [Label component](?path=/docs/components-label--label)
   */
  label?: Record<string, unknown>;
  /**
   * Controls where there metadata is displayed in relation to the Tile. Available values are 'standard' and 'inset'
   */
  metadataLocation?: string;
  /**
   * Object containing all properties supported in the [MetadataTile component](?path=/docs/components-metadatatile--metadata-tile)<br /> Can use a different Metadata component by passing in a 'type' and then that component's properties
   */
  metadata?: MetadataBaseStyle;
  /**
   * Metadata will be shown at all times if set to true, otherwise it will only show when the Tile has focusMetadata will be shown at all times if set to true, otherwise it will only show when the Tile has focus
   */
  persistentMetadata?: boolean;
  /**
   * Object containing all properties supported in the [ProgressBar component](?path=/docs/components-progressbar--progress-bar)
   */
  progressBar?: Record<string, unknown>;

  get innerH(): number;
  get style(): TileStyle;
  set style(v: StylePartial<TileStyle>);

  // Signals
  // _imageLoaded
  // _updateBadge
  // _updateLabel
  // _metadataLoaded

  // tags
  get _Artwork(): lng.Component;
  get _Content(): lng.Component;
  get _Tile(): lng.Component;
  get _Badge(): lng.Component;
  get _Checkbox(): lng.Component;
  get _Metadata(): lng.Component;
  get _ProgressBar(): lng.Component;
  get _Label(): lng.Component;
}

export { Tile as default, TileStyle };
