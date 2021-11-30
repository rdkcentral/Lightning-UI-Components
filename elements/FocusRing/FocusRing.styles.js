import { processThemeStyles } from '../../mixins/withThemeStyles';

export const variantDefault = 'neutral';

export function base(theme) {
  return {
    radius: theme.radius.medium,
    spacing: theme.spacing(1.5)
  };
}

export function variants(theme) {
  return {
    neutral: {
      color: theme.colors.fillNeutral1,
      secondaryColor: theme.colors.fillNeutral1Tertiary
    },
    inverse: {
      color: theme.colors.fillInverse1,
      secondaryColor: theme.colors.fillInverse1Tertiary
    },
    brand: {
      color: theme.colors.fillBrand,
      secondaryColor: theme.colors.fillBrandTertiary
    }
  };
}

export default (theme, variant = variantDefault) =>
  processThemeStyles(theme, variant, base, variants);
