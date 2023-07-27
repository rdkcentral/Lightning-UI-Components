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
import { Color, StylePartial } from '../../types/lui';

type AspectRatio = '16x9' | '3x4' | '4x3' | '2x1' | '1x1';

type ArtworkStyle = {
  animationBlurEntrance: lng.types.TransitionSettings.Literal;
  animationBlurExit: lng.types.TransitionSettings.Literal;
  animationComponentEntrance: lng.types.TransitionSettings.Literal;
  animationGradientEntrance: lng.types.TransitionSettings.Literal;
  animationGradientExit: lng.types.TransitionSettings.Literal;
  animationImageScaleEntrance: lng.types.TransitionSettings.Literal;
  animationImageScaleExit: lng.types.TransitionSettings.Literal;
  blur: number;
  centerImageRadius: number;
  fallbackSrc: string;
  fillColor: Color;
  gradientColor: Color;
  imageScale: number;
  imageScalePivotX: number;
  imageScalePivotY: number;
  padding: number;
  radius: lng.Tools.CornerRadius;
  zIndexSet: {
    image: number;
    blur: number;
    centerImage: number;
    fill: number;
    gradient: number;
    foreground: number;
  };
};

declare namespace Artwork {
  export interface TemplateSpec extends Base.TemplateSpec {
    /**
     * When true, a blur will be applied to the image this will default to true if circleImage is true
     */
    blur?: boolean;
    /**
     * When true, a fill will be applied over the image this will default to false
     */
    fill?: boolean;
    /**
     * Sets the fallback image that will be shown in if the src request fails
     */
    fallbackSrc?: string;
    /**
     * Height value for the foregroundSrc if defined
     */
    foregroundH?: number;
    /**
     * Sets the fallback image that will be shown in if the src request fails
     */
    foregroundSrc?: string;
    /**
     * Width value for the foregroundSrc if defined
     */
    foregroundW?: number;
    /**
     * When true, a gradient will be added over all other elements
     */
    gradient?: boolean;
    /**
     * When true, scale will be applied over the image and this will default to false
     */
    shouldScale?: boolean;
    /**
     * Selection of image display modes
     */
    format?: 'default' | 'circle' | 'square' | 'contain';
    /**
     * Which image will be displayed
     */
    src: string; // Inherited from lng.Element
    /**
     * optional callback that can be used to generate custom strings to request an image. The callback will be passed an object containing the following parameters: aspectRatio, src, w, h. Be default aspect ratio will match the closest value from srcCallbackAspectRatios
     */
    srcCallback?: (obj: {
      closestAspectRatio: string;
      aspectRatio: string;
      src: string;
      w: number;
      h: number;
    }) => string;
    /**
     * srcCallback will receive an aspectRatio parameter when called, this array is used to find the closest value for your use case
     */
    srcCallbackAspectRatios?: AspectRatio[];
  }
  export interface TypeConfig extends lng.Component.TypeConfig {
    SignalMapType: SignalMap;
  }
  /**
   * emitted on initial loading of image
   */
  export type SignalMap = {
    resolveLoading(): void;
  };
}

declare class Artwork<
  TemplateSpec extends Artwork.TemplateSpec = Artwork.TemplateSpec,
  TypeConfig extends Artwork.TypeConfig = Artwork.TypeConfig
> extends Base<TemplateSpec, TypeConfig> {
  // Properties
  /**
   * When true, a blur will be applied to the image this will default to true if circleImage is true
   */
  blur?: boolean;
  /**
   * When true, a fill will be applied over the image this will default to false
   */
  fill?: boolean;
  /**
   * Sets the fallback image that will be shown in if the src request fails
   */
  fallbackSrc?: string;
  /**
   * Height value for the foregroundSrc if defined
   */
  foregroundH?: number;
  /**
   * Image location for item that should be placed on top of the artwork above all other layers
   */
  foregroundSrc?: string;
  /**
   * Width value for the foregroundSrc if defined
   */
  foregroundW?: number;
  /**
   * When true, a gradient will be added over all other elements
   */
  gradient?: boolean;
  /**
   * When true, scale will be applied over the image and this will default to false
   */
  shouldScale?: boolean;
  /**
   * Selection of image display modes
   */
  format?: 'default' | 'circle' | 'square' | 'contain';
  /**
   * Which image will be displayed
   */
  src: string; // Inherited from lng.Element
  /**
   * optional callback that can be used to generate custom strings to request an image. The callback will be passed an object containing the following parameters: aspectRatio, src, w, h. Be default aspect ratio will match the closest value from srcCallbackAspectRatios
   */
  srcCallback?: (obj: {
    closestAspectRatio: string;
    aspectRatio: string;
    src: string;
    w: number;
    h: number;
  }) => string;

  /**
   * srcCallback will receive an aspectRatio parameter when called, this array is used to find the closest value for your use case
   */
  srcCallbackAspectRatios?: AspectRatio[];

  get style(): ArtworkStyle;
  set style(v: StylePartial<ArtworkStyle>);

  // tags
  get _Blur(): lng.Component;
  get _CenterImage(): lng.Component;
  get _FillColor(): lng.Component;
  get _ForegroundImage(): lng.Component;
  get _Gradient(): lng.Component;
  get _Image(): lng.Component;
  get _Item(): lng.Component;
}

export { Artwork as default, ArtworkStyle };
