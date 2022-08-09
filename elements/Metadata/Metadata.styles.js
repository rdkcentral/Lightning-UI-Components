import { processThemeStyles } from '../../mixins/withThemeStyles';

export const variantDefault = 'neutral';

export function base(theme) {
  return {
    logoWidth: theme.typography.body3.lineHeight,
    logoHeight: theme.typography.body3.lineHeight,
    logoPadding: theme.spacer.lg,
    fadeWidth: theme.layout.gutterX.lg
  };
}

export function variants(theme) {
  return {
    neutral: {
      titleTextProperties: {
        ...theme.typography.headline1,
        textColor: theme.colors.coreNeutral
      },
      subtitleTextProperties: {
        ...theme.typography.body3,
        textColor: theme.colors.coreNeutral
      },
      descriptionTextProperties: {
        ...theme.typography.body2,
        textColor: theme.colors.coreNeutralSecondary
      }
    },
    inverse: {
      titleTextProperties: {
        ...theme.typography.headline1,
        textColor: theme.colors.coreInverse
      },
      subtitleTextProperties: {
        ...theme.typography.body3,
        textColor: theme.colors.coreInverse
      },
      descriptionTextProperties: {
        ...theme.typography.body2,
        textColor: theme.colors.coreInverseSecondary
      }
    },
    brand: {
      titleTextProperties: {
        ...theme.typography.headline1,
        textColor: theme.colors.coreNeutral
      },
      subtitleTextProperties: {
        ...theme.typography.body3,
        textColor: theme.colors.coreNeutral
      },
      descriptionTextProperties: {
        ...theme.typography.body2,
        textColor: theme.colors.coreNeutralSecondary
      }
    }
  };
}

export default (theme, variant = variantDefault) =>
  processThemeStyles(theme, variant, base, variants);
