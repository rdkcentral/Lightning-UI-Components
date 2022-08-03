import { processThemeStyles } from '../../mixins';

export const variantDefault = 'neutral';

export function base(theme) {
  return {
    detailsTextProperties: theme.typography.body3,
    providerStyle: {
      fadeWidth: theme.spacing(8),
      itemSize: theme.spacing(6)
    }
  };
}

export function variants(theme) {
  return {
    neutral: {
      detailsTextProperties: {
        textColor: theme.colors.coreNeutral
      }
    },
    inverse: {
      detailsTextProperties: {
        textColor: theme.colors.coreInverse
      }
    },
    brand: {
      detailsTextProperties: {
        textColor: theme.colors.coreNeutral
      }
    }
  };
}

export default (theme, variant = variantDefault) =>
  processThemeStyles(theme, variant, base, variants);
