import type lng from '@lightningjs/core';
import type Base from '../Base';
import type { Color, StylePartial } from '../../types/lui';

type AspectRatio = '16x9' | '3x4' | '4x3' | '2x1' | '1x1';

export type ArtworkStyles = {
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

export default class Artwork extends Base {
  blur?: boolean;
  fallbackSrc?: string;
  foregroundH?: number;
  foregroundSrc?: string;
  foregroundW?: number;
  gradient?: boolean;
  shouldScale?: boolean;
  mode?: 'default' | 'circle' | 'square' | 'contain';
  src: string; // Inherited from lng.Element
  srcCallback?: (obj: {
    closestAspectRatio: string;
    aspectRatio: string;
    src: string;
    w: number;
    h: number;
  }) => string;
  srcCallbackAspectRatios?: AspectRatio[];
  get style(): ArtworkStyles;
  set style(v: StylePartial<ArtworkStyles>);

  // tags
  get _Blur(): lng.Component;
  get _CenterImage(): lng.Component;
  get _FillColor(): lng.Component;
  get _ForegroundImage(): lng.Component;
  get _Gradient(): lng.Component;
  get _Image(): lng.Component;
  get _Item(): lng.Component;
}
