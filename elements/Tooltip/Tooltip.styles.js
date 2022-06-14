import { processThemeStyles } from '../../mixins/withThemeStyles';

export const variantDefault = 'neutral';

export function base(theme) {
  return {
    radius: theme.radius.medium,
    textStyle: 'caption',
    marginBottom: theme.spacing(5),
    paddingY: theme.spacing(1),
    paddingX: theme.spacing(2),
    pointerW: theme.spacing(3),
    pointerH: theme.spacing(1.5),
    transition: {
      timingFunction: theme.animations.functionalStandard,
      delay: theme.animations.delayXFast,
      duration: theme.animations.durationXFast
    }
  };
}

export function variants(theme) {
  return {
    neutral: {
      backgroundColor: theme.colors.coreNeutral,
      textColor: theme.colors.coreInverse
    },
    inverse: {
      backgroundColor: theme.colors.coreInverse,
      textColor: theme.colors.coreNeutral
    },
    brand: {
      backgroundColor: theme.colors.coreBrand,
      textColor: theme.colors.coreNeutral
    }
  };
}

export default (theme, variant = variantDefault) =>
  processThemeStyles(theme, variant, base, variants);
