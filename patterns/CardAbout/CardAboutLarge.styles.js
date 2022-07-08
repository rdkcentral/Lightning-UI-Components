import { processThemeStyles } from '../../mixins/withThemeStyles';
export const variantDefault = 'neutral';

export function base(theme) {
  return {
    w: theme.calculateColumnWidth(2)
  };
}

// eslint-disable-next-line no-unused-vars
export function variants(theme) {
  return {
    neutral: {},
    inverse: {},
    brand: {}
  };
}

export default (theme, variant = variantDefault) =>
  processThemeStyles(theme, variant, base, variants);
