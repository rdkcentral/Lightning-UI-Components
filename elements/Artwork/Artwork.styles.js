export const base = theme => ({
  animationBlurEntrance: theme.animations.utilityEntrance,
  animationBlurExit: theme.animations.utilityExit,
  animationComponentEntrance: theme.animations.utilityEntrance,
  animationGradientEntrance: theme.animations.utilityEntrance,
  animationGradientExit: theme.animations.utilityExit,
  animationImageScaleEntrance: theme.animations.standardEntrance,
  animationImageScaleExit: theme.animations.expressiveEntrance,
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
