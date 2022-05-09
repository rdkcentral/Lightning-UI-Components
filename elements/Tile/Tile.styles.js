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
    artworkFocusScale: undefined,
    badgeStyles: {},
    checkboxStyles: {},
    focusRing: true,
    labelStyles: {},
    metadataStyles: {},
    paddingX: theme.spacing(3),
    paddingY: theme.spacing(2),
    progressBarStyles: {},
    radius: theme.radius.medium
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
