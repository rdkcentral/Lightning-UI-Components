import { processThemeStyles } from '../../mixins/withThemeStyles';

export const variantDefault = 'neutral';

export function base(theme) {
  return {
    w: theme.spacing(8),
    strokeRadius: theme.radius.medium,
    strokeWeight: theme.stroke.small,
    knobWidth: theme.spacing(3),
    knobHeight: theme.spacing(3),
    knobRadius: theme.radius.medium * 0.75,
    knobPadding: theme.spacing(0.25),
    knobCheckedX: theme.spacing(4.5),
    knobUncheckedX: theme.spacing(0.5)
  };
}

export function variants(theme) {
  return {
    neutral: {
      strokeColor: theme.colors.fillInverse1,
      strokeDisabledColor: theme.colors.fillInverse1Disabled,
      backgroundCheckedColor: theme.colors.fillNeutral1,
      backgroundUncheckedColor: theme.colors.fillNeutral1Disabled,
      backgroundDisabledColor: theme.colors.fillNeutral1Disabled,
      knobCheckedColor: theme.colors.fillInverse1,
      knobUncheckedColor: theme.colors.fillInverse1,
      knobDisabledColor: theme.colors.fillInverse1Disabled
    },
    inverse: {
      strokeColor: theme.colors.fillNeutral1,
      strokeDisabledColor: theme.colors.fillInverse1Disabled,
      backgroundCheckedColor: theme.colors.fillInverse1,
      backgroundUncheckedColor: theme.colors.fillInverse1Disabled,
      backgroundDisabledColor: theme.colors.fillNeutral1Disabled,
      knobCheckedColor: theme.colors.fillNeutral1,
      knobUncheckedColor: theme.colors.fillNeutral1,
      knobDisabledColor: theme.colors.fillInverse1Disabled
    },
    brand: {
      strokeColor: theme.colors.fillNeutral1,
      strokeDisabledColor: theme.colors.fillNeutral1Disabled,
      backgroundCheckedColor: theme.colors.fillBrand,
      backgroundUncheckedColor: theme.colors.fillInverse1Disabled,
      backgroundDisabledColor: theme.colors.fillInverse1Disabled,
      knobCheckedColor: theme.colors.fillNeutral1,
      knobUncheckedColor: theme.colors.fillNeutral1,
      knobDisabledColor: theme.colors.fillNeutral1Disabled
    }
  };
}

export default (theme, variant = variantDefault) =>
  processThemeStyles(theme, variant, base, variants);
