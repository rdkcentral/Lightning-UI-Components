import { processThemeStyles } from '../../mixins/withThemeStyles';
export const variantDefault = 'neutral';

export function base(theme) {
  const size = theme.spacing(3);
  return {
    w: size,
    h: size,
    radius: size / 2,
    knobHeight: size / 2,
    knobWidth: size / 2
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
