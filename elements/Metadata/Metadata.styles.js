import { processThemeStyles } from '../../mixins/withThemeStyles';

export const variantDefault = 'neutral';

export function base(theme) {
  return {
    logoWidth: theme.typography.body3.lineHeight,
    logoHeight: theme.typography.body3.lineHeight,
    logoPadding: theme.spacing(2),
    fadeWidth: theme.spacing(8)
  };
}

export function variants(theme) {
  return {
    neutral: {
      titleTextProperties: {
        ...theme.typography.headline1,
        textColor: theme.colors.fillNeutral1
      },
      subtitleTextProperties: {
        ...theme.typography.body3,
        textColor: theme.colors.fillNeutral1
      },
      descriptionTextProperties: {
        ...theme.typography.body2,
        textColor: theme.colors.fillNeutral1Secondary
      }
    },
    inverse: {
      titleTextProperties: {
        ...theme.typography.headline1,
        textColor: theme.colors.fillInverse1
      },
      subtitleTextProperties: {
        ...theme.typography.body3,
        textColor: theme.colors.fillInverse1
      },
      descriptionTextProperties: {
        ...theme.typography.body2,
        textColor: theme.colors.fillInverse1Secondary
      }
    },
    brand: {
      titleTextProperties: {
        ...theme.typography.headline1,
        textColor: theme.colors.fillNeutral1
      },
      subtitleTextProperties: {
        ...theme.typography.body3,
        textColor: theme.colors.fillNeutral1
      },
      descriptionTextProperties: {
        ...theme.typography.body2,
        textColor: theme.colors.fillNeutral1Secondary
      }
    }
  };
}

export default (theme, variant = variantDefault) =>
  processThemeStyles(theme, variant, base, variants);
