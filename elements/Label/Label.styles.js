import { processThemeStyles } from '../../mixins/withThemeStyles';

export const variantDefault = 'neutral';

export function base(theme) {
  return {
    radius: [
      theme.radius.md,
      theme.radius.md,
      theme.radius.md,
      theme.radius.none
    ],
    paddingX: theme.spacer.lg,
    paddingY: theme.spacer.md,
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
