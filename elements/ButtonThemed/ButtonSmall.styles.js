import { processThemeStyles } from '../../mixins/withThemeStyles';
import { variantDefault as buttonVariantDefault } from './Button.styles';

export const variantDefault = buttonVariantDefault;

export function base(theme) {
  return {
    h: theme.spacing(8),
    minWidth: theme.calculateColumnWidth(theme.layout.columnCount),
    paddingX: theme.spacing(4),
    prefixSize: theme.spacing(3.5),
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
