import type lng from '@lightningjs/core';
import type Base from '../Base';
import type { Color, StylePartial } from '../../types/lui';

type AspectRatio = '16x9' | '3x4' | '4x3' | '2x1' | '1x1';

type TransitionObject = {
  delay: number;
  duration: number;
  timingFunction: string;
};

export type ArtworkStyles = {
  animationBlurEntrance: TransitionObject;
  animationBlurExit: TransitionObject;
  animationComponentEntrance: TransitionObject;
  animationGradientEntrance: TransitionObject;
  animationGradientExit: TransitionObject;
  animationImageScaleEntrance: TransitionObject;
  animationImageScaleExit: TransitionObject;
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
  zIndex: {
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
}
