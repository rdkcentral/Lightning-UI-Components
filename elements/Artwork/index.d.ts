import type Base from '../../Base';

type aspectRatio = '16x9' | '3x4' | '4x3' | '2x1' | '1x1';

type transitionObject = {
  delay: number;
  duration: number;
  timingFunction: string;
};

export interface ArtworkStyles {
  animationBlurEntrance?: transitionObject;
  animationComponentEntrance?: transitionObject;
  animationGradientEntrance?: transitionObject;
  animationImageScaleEntrance?: transitionObject;
  animationBlurExit?: transitionObject;
  animationGradientExit?: transitionObject;
  animationImageScaleExit?: transitionObject;
  blur?: number;
  centerImageRadius?: number;
  fallbackSrc?: undefined;
  fillColor?: number;
  gradientColor?: number;
  imageScale?: number;
  imageScalePivotX?: number;
  imageScalePivotY?: number;
  padding?: number;
  radius?: number;
}

export default class Artwork extends Base {
  blur?: boolean;
  fallbackSrc?: string;
  foregroundH?: number;
  foregroundSrc?: string;
  foregroundW?: number;
  gradient?: boolean;
  mode?: 'default' | 'circle' | 'square' | 'contain';
  src: string; // Inherited from lng.Element
  srcCallback?: (obj: {
    closestAspectRatio: string;
    aspectRatio: string;
    src: string;
    w: number;
    h: number;
  }) => string;
  srcCallbackAspectRatios?: aspectRatio[];
  style?: ArtworkStyles;
}
