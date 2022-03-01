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
      progressColor: theme.colors.fillNeutral1,
      barColor: theme.colors.fillNeutral1Tertiary
    },
    inverse: {
      progressColor: theme.colors.fillInverse1,
      barColor: theme.colors.fillInverse1Tertiary
    },
    brand: {
      progressColor: theme.colors.fillBrand,
      barColor: theme.colors.fillBrandTertiary
    }
  };
}

export default (theme, variant = variantDefault) =>
  processThemeStyles(theme, variant, base, variants);
