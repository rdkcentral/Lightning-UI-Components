import { processThemeStyles } from '../../mixins/withThemeStyles';

export const variantDefault = 'neutral';

export function base(theme) {
  return {
    radius: theme.radius.md,
    textStyle: 'caption',
    marginBottom: theme.spacer.xxxl,
    paddingY: theme.spacer.md,
    paddingX: theme.spacer.lg,
    pointerW: theme.spacer.xl,
    pointerH: theme.spacer.md + theme.spacer.xs,
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
