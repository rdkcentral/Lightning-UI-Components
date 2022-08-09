import { processThemeStyles } from '../../mixins';

export const variantDefault = 'neutral';

export function base(theme) {
  return {
    itemSize: theme.layout.gutterX.sm,
    itemSpacing: theme.spacer.md,
    counterTextProperties: theme.typography.headline3,
    radius: theme.radius.sm
  };
}

export function variants(theme) {
  return {
    neutral: {
      counterBackgroundColor: theme.colors.coreInverseSecondary
    },
    inverse: {
      counterBackgroundColor: theme.colors.coreNeutralSecondary
    },
    brand: {
      counterBackgroundColor: theme.colors.coreInverseSecondary
    }
  };
}

export default (theme, variant = variantDefault) =>
  processThemeStyles(theme, variant, base, variants);
