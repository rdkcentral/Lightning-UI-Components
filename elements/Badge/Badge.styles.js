import { processThemeStyles } from '../../mixins/withThemeStyles';

export const variantDefault = 'brand';

export function base(theme) {
  return {
    paddingX: theme.spacing(1),
    paddingY: theme.spacing(0.5),
    radius: theme.radius.small,
    textStyle: 'caption',
    textAlign: 'center',
    contentSpacing: theme.spacing(0.75)
  };
}

export function variants(theme) {
  return {
    neutral: {
      backgroundColor: theme.colors.coreInverseSecondary,
      textColor: theme.colors.coreNeutral
    },
    inverse: {
      backgroundColor: theme.colors.coreNeutralSecondary,
      textColor: theme.colors.coreInverse
    },
    brand: {
      backgroundColor: theme.colors.coreBrand,
      textColor: theme.colors.coreNeutral
    }
  };
}

export default (theme, variant = variantDefault) =>
  processThemeStyles(theme, variant, base, variants);
