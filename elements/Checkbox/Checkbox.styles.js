import { processThemeStyles } from '../../mixins/withThemeStyles';
import check from './check-icon.png';

export const variantDefault = 'neutral';

export function base(theme) {
  const strokeWidth = theme.stroke.small;
  const size = theme.spacing(4) - strokeWidth * 2;
  return {
    w: size,
    h: size,
    radius: size / 2,
    strokeWidth,
    checkW: theme.spacing(2),
    checkH: theme.spacing(1.5),
    checkSrc: check
  };
}

export function variants(theme) {
  return {
    neutral: {
      strokeColor: theme.colors.fillInverse1,
      disabledStrokeColor: theme.colors.fillInverse1Disabled,
      checkColor: theme.colors.fillInverse1,
      checkedBackgroundColor: theme.colors.fillNeutral1,
      uncheckedBackgroundColor: theme.colors.fillNeutral1Disabled,
      disabledBackgroundColor: theme.colors.fillNeutral1Disabled
    },
    inverse: {
      strokeColor: theme.colors.fillNeutral1,
      disabledStrokeColor: theme.colors.fillNeutral1Disabled,
      checkColor: theme.colors.fillNeutral1,
      checkedBackgroundColor: theme.colors.fillInverse1,
      uncheckedBackgroundColor: theme.colors.fillInverse1Disabled,
      disabledBackgroundColor: theme.colors.fillInverse1Disabled
    },
    brand: {
      strokeColor: theme.colors.fillNeutral1,
      disabledStrokeColor: theme.colors.fillNeutral1Disabled,
      checkColor: theme.colors.fillNeutral1,
      checkedBackgroundColor: theme.colors.fillBrand,
      uncheckedBackgroundColor: theme.colors.fillInverse1Disabled,
      disabledBackgroundColor: theme.colors.fillInverse1Disabled
    }
  };
}

export default (theme, variant = variantDefault) =>
  processThemeStyles(theme, variant, base, variants);
