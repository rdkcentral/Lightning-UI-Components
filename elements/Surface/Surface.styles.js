import { processThemeStyles } from '../../mixins/withThemeStyles';

export const variantDefault = 'neutral';

export function base(theme) {
  return {
    radius: theme.radius.medium
  };
}

export function variants(theme) {
  return {
    neutral: {
      backgroundColorFocused: theme.colors.fillNeutralFocus,
      backgroundColorUnfocused: theme.colors.fillNeutral1Secondary,
      backgroundColorDisabled: theme.colors.fillInverse1Disabled
    },
    inverse: {
      backgroundColorFocused: theme.colors.fillInverseFocus,
      backgroundColorUnfocused: theme.colors.fillInverse1Secondary,
      backgroundColorDisabled: theme.colors.fillInverse1Disabled
    },
    brand: {
      backgroundColorFocused: theme.colors.fillBrandFocus,
      backgroundColorUnfocused: theme.colors.fillBrandSecondary,
      backgroundColorDisabled: theme.colors.fillBrandDisabled
    }
  };
}

export default (theme, variant = variantDefault) =>
  processThemeStyles(theme, variant, base, variants);
