import { processThemeStyles } from '../../mixins/withThemeStyles';

export const variantDefault = 'neutral';

export function base(theme) {
  const size = theme.spacing(4);
  return {
    w: size,
    h: size,
    radius: size / 2,
    strokeWidth: theme.stroke.medium,
    knobHeight: size / 2,
    knobWidth: size / 2
  };
}

export function variants(theme) {
  return {
    neutral: {
      strokeColor: theme.colors.fillInverse1,
      knobColor: theme.colors.fillInverse1,
      backgroundColor: theme.colors.fillNeutral1,
      backgroundColorOff: theme.colors.fillNeutral1Disabled,
      backgroundColorInactive: theme.colors.fillNeutral1Disabled,
      strokeColorInactive: theme.colors.fillInverse1Disabled
    },
    inverse: {
      strokeColor: theme.colors.fillNeutral1,
      knobColor: theme.colors.fillNeutral1,
      backgroundColor: theme.colors.fillInverse1,
      backgroundColorOff: theme.colors.fillInverse1,
      backgroundColorInactive: theme.colors.fillNeutral1Disabled,
      strokeColorInactive: theme.colors.fillInverse1Disabled
    },
    brand: {
      strokeColor: theme.colors.fillNeutral1,
      knobColor: theme.colors.fillNeutral1,
      backgroundColor: theme.colors.fillBrand,
      backgroundColorOff: theme.colors.fillInverse1Disabled,
      backgroundColorInactive: theme.colors.fillInverse1Disabled,
      strokeColorInactive: theme.colors.fillNeutral1Disabled
    }
  };
}

export default (theme, variant = variantDefault) =>
  processThemeStyles(theme, variant, base, variants);
