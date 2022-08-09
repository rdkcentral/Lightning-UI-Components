import { processThemeStyles } from '../../mixins/withThemeStyles';

export const variantDefault = 'neutral';

export function base(theme) {
  const size = theme.spacer.xxl;
  return {
    w: size,
    h: size,
    radius: size / 2,
    strokeWidth: theme.stroke.md,
    knobHeight: size / 2,
    knobWidth: size / 2
  };
}

export function variants(theme) {
  return {
    neutral: {
      strokeColor: theme.colors.coreInverse,
      knobColor: theme.colors.coreInverse,
      backgroundColor: theme.colors.coreNeutral,
      backgroundColorOff: theme.colors.coreNeutralDisabled,
      backgroundColorInactive: theme.colors.coreNeutralDisabled,
      strokeColorInactive: theme.colors.coreInverseDisabled
    },
    inverse: {
      strokeColor: theme.colors.coreNeutral,
      knobColor: theme.colors.coreNeutral,
      backgroundColor: theme.colors.coreInverse,
      backgroundColorOff: theme.colors.coreInverse,
      backgroundColorInactive: theme.colors.coreNeutralDisabled,
      strokeColorInactive: theme.colors.coreInverseDisabled
    },
    brand: {
      strokeColor: theme.colors.coreNeutral,
      knobColor: theme.colors.coreNeutral,
      backgroundColor: theme.colors.coreBrand,
      backgroundColorOff: theme.colors.coreInverseDisabled,
      backgroundColorInactive: theme.colors.coreInverseDisabled,
      strokeColorInactive: theme.colors.coreNeutralDisabled
    }
  };
}

export default (theme, variant = variantDefault) =>
  processThemeStyles(theme, variant, base, variants);
