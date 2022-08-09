import { processThemeStyles } from '../../mixins/withThemeStyles';
import { getWidthByUpCount } from '../../utils';
export const variantDefault = 'neutral';

export function base(theme) {
  return {
    descriptionTextProperties: {
      ...theme.typography.body2,
      textColor: theme.colors.coreNeutral,
      maxLines: 2,
      wordWrap: true
    },
    w: getWidthByUpCount(3)
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
