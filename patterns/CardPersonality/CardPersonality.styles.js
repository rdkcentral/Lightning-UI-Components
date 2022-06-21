import { processThemeStyles } from '../../mixins/withThemeStyles';
export const variantDefault = 'neutral';

// eslint-disable-next-line no-unused-vars
export function base(theme) {
  return {
    descriptionTextProperties: {
      ...theme.typography.body3,
      textColor: theme.colors.coreNeutralSecondary,
      wordWrap: true,
      maxLines: 1
    },
    titleTextProperties: {
      ...theme.typography.headline3,
      wordWrapTrue: true,
      maxLines: 1,
      textColor: theme.colors.coreNeutral
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
