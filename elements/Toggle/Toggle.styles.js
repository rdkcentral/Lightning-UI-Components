import { processThemeStyles } from '../../mixins/withThemeStyles';

export const variantDefault = 'neutral';

export function base(theme) {
  return {
    w: theme.spacer.md * 8,
    strokeRadius: theme.radius.md,
    strokeWeight: theme.stroke.sm,
    knobWidth: theme.spacer.xl,
    knobHeight: theme.spacer.xl,
    knobRadius: theme.radius.sm + theme.radius.xs,
    knobPadding: theme.spacer.xxs,
    knobCheckedX: theme.spacer.xxl + theme.spacer.xs,
    knobUncheckedX: theme.spacer.xs
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
