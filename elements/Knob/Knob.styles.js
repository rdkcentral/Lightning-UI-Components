import { processThemeStyles } from '../../mixins/withThemeStyles';

export const variantDefault = 'neutral';

export function base(theme) {
  const size = theme.spacer.lg;
  return {
    circleSize: size,
    radius: size / 2
  };
}

export function variants(theme) {
  return {
    neutral: {
      circleColor: theme.colors.interactiveNeutralFocus
    },
    inverse: {
      circleColor: theme.colors.interactiveInverseFocus
    },
    brand: {
      circleColor: theme.colors.coreBrandFocus
    }
  };
}

export default (theme, variant = variantDefault) =>
  processThemeStyles(theme, variant, base, variants);
