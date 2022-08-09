import { processThemeStyles } from '../../mixins/withThemeStyles';
import check from './check-icon.png';

export const variantDefault = 'neutral';

export function base(theme) {
  const strokeWidth = theme.stroke.sm;
  const size = theme.spacer.xxl - strokeWidth * 2;
  return {
    w: size,
    h: size,
    radius: size / 2,
    strokeWidth,
    checkW: theme.spacer.lg,
    checkH: theme.spacer.md + theme.spacer.xs,
    checkSrc: check
  };
}

export function variants(theme) {
  return {
    neutral: {
      strokeColor: theme.colors.coreInverse,
      disabledStrokeColor: theme.colors.coreInverseDisabled,
      checkColor: theme.colors.coreInverse,
      checkedBackgroundColor: theme.colors.coreNeutral,
      uncheckedBackgroundColor: theme.colors.coreNeutralDisabled,
      disabledBackgroundColor: theme.colors.coreNeutralDisabled
    },
    inverse: {
      strokeColor: theme.colors.coreNeutral,
      disabledStrokeColor: theme.colors.coreNeutralDisabled,
      checkColor: theme.colors.coreNeutral,
      checkedBackgroundColor: theme.colors.coreInverse,
      uncheckedBackgroundColor: theme.colors.coreInverseDisabled,
      disabledBackgroundColor: theme.colors.coreInverseDisabled
    },
    brand: {
      strokeColor: theme.colors.coreNeutral,
      disabledStrokeColor: theme.colors.coreNeutralDisabled,
      checkColor: theme.colors.coreNeutral,
      checkedBackgroundColor: theme.colors.coreBrand,
      uncheckedBackgroundColor: theme.colors.coreInverseDisabled,
      disabledBackgroundColor: theme.colors.coreInverseDisabled
    }
  };
}

export default (theme, variant = variantDefault) =>
  processThemeStyles(theme, variant, base, variants);
