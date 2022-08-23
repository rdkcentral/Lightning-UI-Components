import { getThemeAnimation } from '../../utils';

export const base = theme => ({
  animationBlurEntrance: getThemeAnimation('functionalEntrance'),
  animationBlurExit: getThemeAnimation('functionalExit'),
  animationComponentEntrance: getThemeAnimation('functionalEntrance'),
  animationGradientEntrance: getThemeAnimation('functionalEntrance'),
  animationGradientExit: getThemeAnimation('functionalExit'),
  animationImageScaleEntrance: getThemeAnimation('emphasizedEntrance'),
  animationImageScaleExit: getThemeAnimation('expressiveEntrance'),
  blur: 4,
  centerImageRadius: theme.radius.md,
  fallbackSrc: undefined,
  fillColor: theme.colors.material,
  gradientColor: theme.colors.material,
  imageScale: undefined,
  imageScalePivotX: 0.5,
  imageScalePivotY: 0.5,
  padding: theme.spacer.md,
  radius: 0,
  zIndex: {
    image: 1,
    blur: 2,
    centerImage: 3,
    fill: 4,
    gradient: 5,
    foreground: 6
  }
});
