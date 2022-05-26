import { processThemeStyles } from '../../mixins/withThemeStyles';
import { calculateColumnWidth } from '../../themes/base/layout';
export const variantDefault = 'neutral';

export function base(theme) {
  return {
    backgroundColorDisabled: theme.colors.coreInverseDisabled,
    backgroundColorUnfocused: theme.colors.coreInverseSecondary,
    paddingHorizontal: theme.spacing(3),
    paddingVertical: theme.spacing(3),
    radius: theme.radius.medium,
    textColorDisabled: theme.colors.coreNeutralDisabled,
    titleTextProperties: {
      ...theme.typography.headline1,
      wordWrapTrue: true,
      maxLines: 2,
      textColor: theme.colors.coreNeutral
    },
    w: calculateColumnWidth(6)
  };
}

// eslint-disable-next-line no-unused-vars
export function variants(theme) {
  return {
    neutral: {
      backgroundColorFocused: theme.colors.interactiveNeutralFocusSoft
    },
    inverse: {
      backgroundColorFocused: theme.colors.interactiveInverseFocusSoft
    },
    brand: {
      backgroundColorFocused: theme.colors.interactiveBrandFocusSoft
    }
  };
}

export default (theme, variant = variantDefault) =>
  processThemeStyles(theme, variant, base, variants);
