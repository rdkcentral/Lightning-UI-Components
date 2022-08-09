import { processThemeStyles } from '../../mixins/withThemeStyles';

export const variantDefault = 'neutral';

export function base(theme) {
  return {
    paddingX: theme.spacer.md,
    paddingY: theme.spacer.xs,
    radius: theme.radius.sm,
    textStyle: 'caption',
    textAlign: 'center',
    contentSpacing: theme.spacer.sm
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
