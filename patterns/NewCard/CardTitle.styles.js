import { processThemeStyles } from '../../mixins/withThemeStyles';
export const variantDefault = 'neutral';

// eslint-disable-next-line no-unused-vars
export function base(theme) {
  return {
    descriptionTextProperties: {
      ...theme.typography.body2,
      textColor: theme.colors.coreNeutralSecondary,
      wordWrap: true,
      maxLines: 3
    }
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
