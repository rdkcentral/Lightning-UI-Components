import { processThemeStyles } from '../../mixins/withThemeStyles';

export const variantDefault = 'neutral';

// eslint-disable-next-line no-unused-vars
export function base(theme) {
  return {};
}

export function variants(theme) {
  return {
    neutral: { color: theme.colors.fillNeutral1 },
    inverse: { color: theme.colors.fillInverse1 },
    brand: { color: theme.colors.fillBrand }
  };
}

export default (theme, variant = variantDefault) =>
  processThemeStyles(theme, variant, base, variants);
