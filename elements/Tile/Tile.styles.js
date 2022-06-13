import { processThemeStyles } from '../../mixins';
export const variantDefault = 'neutral';

export function base(theme) {
  return {
    animationEntrance: {
      delay: theme.animations.emphasizedEntranceDelay,
      duration: theme.animations.emphasizedEntranceDuration,
      timingFunction: theme.animations.emphasizedEntrance
    },
    animationExit: {
      delay: theme.animations.emphasizedExitDelay,
      duration: theme.animations.emphasizedExitDuration,
      timingFunction: theme.animations.emphasizedExit
    },
    artworkStyles: {
      animationImageScaleEntrance: {
        delay: theme.animations.emphasizedEntranceDelay,
        duration: theme.animations.emphasizedEntranceDuration,
        timingFunction: theme.animations.emphasizedEntrance
      },
      animationImageScaleExit: {
        delay: theme.animations.emphasizedExitDelay,
        duration: theme.animations.emphasizedExitDuration,
        timingFunction: theme.animations.emphasizedExit
      }
    },
    badgeStyles: {},
    checkboxStyles: {},
    labelStyles: {},
    metadataStyles: {},
    paddingX: theme.spacing(3),
    paddingY: theme.spacing(2),
    progressBarStyles: {},
    radius: theme.radius.medium,
    disabledAlpha: theme.alphas.inactive / 100
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
