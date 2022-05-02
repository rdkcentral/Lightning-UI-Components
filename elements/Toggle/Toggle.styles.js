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
      strokeColor: theme.colors.coreInverse,
      strokeDisabledColor: theme.colors.coreInverseDisabled,
      backgroundCheckedColor: theme.colors.coreNeutral,
      backgroundUncheckedColor: theme.colors.coreNeutralDisabled,
      backgroundDisabledColor: theme.colors.coreNeutralDisabled,
      knobCheckedColor: theme.colors.coreInverse,
      knobUncheckedColor: theme.colors.coreInverse,
      knobDisabledColor: theme.colors.coreInverseDisabled
    },
    inverse: {
      strokeColor: theme.colors.coreNeutral,
      strokeDisabledColor: theme.colors.coreInverseDisabled,
      backgroundCheckedColor: theme.colors.coreInverse,
      backgroundUncheckedColor: theme.colors.coreInverseDisabled,
      backgroundDisabledColor: theme.colors.coreNeutralDisabled,
      knobCheckedColor: theme.colors.coreNeutral,
      knobUncheckedColor: theme.colors.coreNeutral,
      knobDisabledColor: theme.colors.coreInverseDisabled
    },
    brand: {
      strokeColor: theme.colors.coreNeutral,
      strokeDisabledColor: theme.colors.coreNeutralDisabled,
      backgroundCheckedColor: theme.colors.coreBrand,
      backgroundUncheckedColor: theme.colors.coreInverseDisabled,
      backgroundDisabledColor: theme.colors.coreInverseDisabled,
      knobCheckedColor: theme.colors.coreNeutral,
      knobUncheckedColor: theme.colors.coreNeutral,
      knobDisabledColor: theme.colors.coreNeutralDisabled
    }
  };
}

export default (theme, variant = variantDefault) =>
  processThemeStyles(theme, variant, base, variants);
