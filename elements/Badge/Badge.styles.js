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
      backgroundColor: theme.colors.fillInverse1Secondary,
      textColor: theme.colors.fillNeutral1
    },
    inverse: {
      backgroundColor: theme.colors.fillNeutral1Secondary,
      textColor: theme.colors.fillInverse1
    },
    brand: {
      backgroundColor: theme.colors.fillBrand,
      textColor: theme.colors.fillNeutral1
    }
  };
}

export default (theme, variant = variantDefault) =>
  processThemeStyles(theme, variant, base, variants);
