import { processThemeStyles } from '../../mixins/withThemeStyles';
export const variantDefault = 'neutral';

export function base(theme) {
  const size = theme.spacing(2);
  return {
    arrowAlphaDisabled: 0,
    arrowAlphaValue: 1,
    arrowAlphaValueLimit: 0.5,
    arrowHeight: theme.spacing(2),
    arrowSpacing: theme.spacing(1),
    arrowWidth: theme.spacing(1),
    containerHeight: theme.spacing(2.5),
    innerCircleSize: size,
    minWidth: theme.calculateColumnWidth(10),
    progressBarStyles: {},
    radius: size / 2,
    sliderHeight: theme.spacing(1)
  };
}

export function variants(theme) {
  return {
    neutral: {
      arrowColor: theme.colors.fillNeutral1,
      circleColor: theme.colors.fillNeutralFocus
    },
    inverse: {
      arrowColor: theme.colors.fillInverse1,
      circleColor: theme.colors.fillInverseFocus
    },
    brand: {
      arrowColor: theme.colors.fillInverse1,
      circleColor: theme.colors.fillBrandFocus
    }
  };
}

export default (theme, variant = variantDefault) =>
  processThemeStyles(theme, variant, base, variants);
