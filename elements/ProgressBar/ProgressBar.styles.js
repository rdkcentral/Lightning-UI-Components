import { processThemeStyles } from '../../mixins/withThemeStyles';

export const variantDefault = 'neutral';

export function base(theme) {
  return {
    h: theme.spacing(1),
    radius: theme.radius.xsmall,
    animationCurve: theme.animations.functionalStandard,
    animationDelay: theme.animations.functionalStandardDelay,
    animationDuration: theme.animations.functionalStandardDuration
  };
}

export function variants(theme) {
  return {
    neutral: {
      progressColor: theme.colors.coreNeutral,
      barColor: theme.colors.coreNeutralTertiary
    },
    inverse: {
      progressColor: theme.colors.coreInverse,
      barColor: theme.colors.coreInverseTertiary
    },
    brand: {
      progressColor: theme.colors.coreBrand,
      barColor: theme.colors.coreBrandTertiary
    }
  };
}

export default (theme, variant = variantDefault) =>
  processThemeStyles(theme, variant, base, variants);
