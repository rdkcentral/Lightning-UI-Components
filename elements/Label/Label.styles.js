import { processThemeStyles } from '../../mixins/withThemeStyles';

export const variantDefault = 'brand';

export function base(theme) {
  return {
    radiusTopLeft: theme.radius.medium,
    radiusTopRight: theme.radius.medium,
    radiusBottomRight: theme.radius.medium,
    radiusBottomLeft: theme.radius.none,
    paddingX: theme.spacing(2),
    paddingY: theme.spacing(1),
    textStyle: 'caption'
  };
}

export function variants(theme) {
  return {
    neutral: {
      titleColor: theme.colors.material,
      backgroundColor: theme.colors.coreNeutral
    },
    inverse: {
      titleColor: theme.colors.coreNeutral,
      backgroundColor: theme.colors.coreInverse
    },
    brand: {
      titleColor: theme.colors.coreNeutral,
      backgroundColor: theme.colors.coreBrand
    }
  };
}

export default (theme, variant = variantDefault) =>
  processThemeStyles(theme, variant, base, variants);
