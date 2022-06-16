import { processThemeStyles } from '../../mixins';

export const variantDefault = 'neutral';

export function base() {
  return {};
}

export function variants() {
  return {
    neutral: {},
    inverse: {},
    brand: {}
  };
}

export default (theme, variant = variantDefault) =>
  processThemeStyles(theme, variant, base, variants);
