export const base = theme => ({
  animationBlurEntrance: theme.animation.utilityEntrance,
  animationBlurExit: theme.animation.utilityExit,
  animationComponentEntrance: theme.animation.utilityEntrance,
  animationGradientEntrance: theme.animation.utilityEntrance,
  animationGradientExit: theme.animation.utilityExit,
  animationImageScaleEntrance: theme.animation.standardEntrance,
  animationImageScaleExit: theme.animation.standardEntrance,
  blur: 4,
  centerImageRadius: theme.radius.md,
  fallbackSrc: undefined,
  fillColor: theme.color.material,
  gradientColor: theme.color.material,
  imageScale: undefined,
  imageScalePivotX: 0.5,
  imageScalePivotY: 0.5,
  padding: theme.spacer.md,
  radius: 0,
  zIndexSet: {
    image: 1,
    blur: 2,
    centerImage: 3,
    fill: 4,
    gradient: 5,
    foreground: 6
  }
});
