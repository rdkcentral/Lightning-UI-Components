import { processThemeStyles } from '../../mixins/withThemeStyles';

export const variantDefault = 'neutral';

export function base(theme) {
  return {
    backgroundColorUnfocused: theme.colors.coreInverseSecondary,
    backgroundColorDisabled: theme.colors.coreInverseDisabled,
    radius: theme.radius.medium,
    getFocusScale: theme.getFocusScale,
    getUnfocusScale: theme.getUnfocusScale
  };
}

export function variants(theme) {
  return {
    neutral: {
      backgroundColorFocused: theme.colors.interactiveNeutralFocus
    },
    inverse: {
      backgroundColorFocused: theme.colors.interactiveInverseFocus
    },
    brand: {
      backgroundColorFocused: theme.colors.interactiveBrandFocus
    }
  };
}

export default (theme, variant = variantDefault) =>
  processThemeStyles(theme, variant, base, variants);
