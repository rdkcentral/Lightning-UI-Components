import { processThemeStyles } from '../../mixins/withThemeStyles';
import { variantDefault as buttonVariantDefault } from './Button.styles';
import { getWidthByColumnSpan } from '../../utils';

export const variantDefault = buttonVariantDefault;

export function base(theme) {
  return {
    h: theme.spacer.md * 8,
    minWidth: getWidthByColumnSpan(1),
    paddingX: theme.spacer.xxl,
    prefixSize: theme.spacer.xl + theme.spacer.xs,
    textStyle: theme.typography.button2
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
