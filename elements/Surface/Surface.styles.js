import { processThemeStyles } from '../../mixins/withThemeStyles';

export const variantDefault = 'neutral';

export function base(theme) {
  return {
    backgroundColorUnfocused: theme.colors.coreInverseSecondary,
    backgroundColorDisabled: theme.colors.coreInverseDisabled,
    radius: theme.radius.medium
  };
}

export function variants(theme) {
  return {
    neutral: {
      backgroundColorFocused: theme.colors.interactiveNeutralFocusSoft
    },
    inverse: {
      backgroundColorFocused: theme.colors.interactiveInverseFocusSoft
    },
    brand: {
      backgroundColorFocused: theme.colors.coreBrandFocusSoft
    }
  };
}

export default (theme, variant = variantDefault) =>
  processThemeStyles(theme, variant, base, variants);
