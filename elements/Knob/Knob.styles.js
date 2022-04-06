import { processThemeStyles } from '../../mixins/withThemeStyles';

export const variantDefault = 'neutral';

export function base(theme) {
  const size = theme.spacing(2);
  return {
    circleSize: size,
    radius: size / 2 + 2
  };
}

export function variants(theme) {
  return {
    neutral: {
      circleColor: theme.colors.fillNeutralFocus
    },
    inverse: {
      circleColor: theme.colors.fillInverseFocus
    },
    brand: {
      circleColor: theme.colors.fillBrandFocus
    }
  };
}

export default (theme, variant = variantDefault) =>
  processThemeStyles(theme, variant, base, variants);
