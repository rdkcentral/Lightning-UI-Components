import { processThemeStyles } from '../../mixins/withThemeStyles';
export const variantDefault = 'neutral';

export function base(theme) {
  return {
    iconWidth: theme.spacer.xxl,
    iconHeight: theme.spacer.xxl,
    h: theme.spacer.md * 20
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
