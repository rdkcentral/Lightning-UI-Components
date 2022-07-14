import { processThemeStyles } from '../../mixins/withThemeStyles';

export const variantDefault = 'neutral';

export function base(theme) {
  return {
    radius: [
      theme.radius.medium,
      theme.radius.medium,
      theme.radius.medium,
      theme.radius.none
    ],
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
