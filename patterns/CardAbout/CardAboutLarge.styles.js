import { processThemeStyles } from '../../mixins/withThemeStyles';
import { getWidthByUpCount } from '../../utils';
export const variantDefault = 'neutral';

// eslint-disable-next-line no-unused-vars
export function base(theme) {
  return {
    w: getWidthByUpCount(2)
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
