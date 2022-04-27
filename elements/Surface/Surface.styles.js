import { processThemeStyles } from '../../mixins/withThemeStyles';

export const variantDefault = 'neutral';

export function base(theme) {
  return {
    backgroundColorUnfocused: theme.colors.fillInverse1Secondary,
    backgroundColorDisabled: theme.colors.fillInverse1Disabled,
    radius: theme.radius.medium
  };
}

export function variants(theme) {
  return {
    neutral: {
      backgroundColorFocused: theme.colors.fillNeutralFocusSoft
    },
    inverse: {
      backgroundColorFocused: theme.colors.fillInverseFocusSoft
    },
    brand: {
      backgroundColorFocused: theme.colors.fillBrandFocusSoft
    }
  };
}

export default (theme, variant = variantDefault) =>
  processThemeStyles(theme, variant, base, variants);
