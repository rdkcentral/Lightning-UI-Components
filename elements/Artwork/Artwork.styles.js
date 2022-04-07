import { processThemeStyles } from '../../mixins/withThemeStyles';
export const variantDefault = 'neutral';
export function base(theme) {
  return {
    animationBlurEntrance: {
      delay: theme.animations.functionalEntranceDelay,
      duration: theme.animations.functionalEntranceDuration,
      timingFunction: theme.animations.functionalEntrance
    },
    animationBlurExit: {
      delay: theme.animations.functionalExitDelay,
      duration: theme.animations.functionalExitDuration,
      timingFunction: theme.animations.functionalExit
    },
    animationComponentEntrance: {
      delay: theme.animations.functionalEntranceDelay,
      duration: theme.animations.functionalEntranceDuration,
      timingFunction: theme.animations.functionalEntrance
    },
    animationGradientEntrance: {
      delay: theme.animations.functionalEntranceDelay,
      duration: theme.animations.functionalEntranceDuration,
      timingFunction: theme.animations.functionalEntrance
    },
    animationGradientExit: {
      delay: theme.animations.functionalExitDelay,
      duration: theme.animations.functionalExitDuration,
      timingFunction: theme.animations.functionalExit
    },
    animationImageScaleEntrance: {
      delay: theme.animations.emphasizedStandardDelay,
      duration: theme.animations.emphasizedStandardDuration,
      timingFunction: theme.animations.emphasizedStandard
    },
    animationImageScaleExit: {
      delay: theme.animations.functionalExitDelay,
      duration: theme.animations.functionalExitDuration,
      timingFunction: theme.animations.functionalExit
    },
    blur: 4,
    centerImageRadius: theme.radius.medium,
    fillColor: undefined,
    gradientColor: theme.colors.material,
    imageScale: undefined,
    imageScalePivotX: 0.5,
    imageScalePivotY: 0.5,
    padding: theme.spacing(1),
    radius: 0,
    fallbackSrc: undefined
  };
}

export function variants() {
  return {
    neutral: {},
    inverse: {},
    brand: {}
  };
}

export default (theme, variant = variantDefault) =>
  processThemeStyles(theme, variant, base, variants);
