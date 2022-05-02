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
      arrowColor: theme.colors.coreNeutral,
      circleColor: theme.colors.interactiveNeutralFocus
    },
    inverse: {
      arrowColor: theme.colors.coreInverse,
      circleColor: theme.colors.interactiveInverseFocus
    },
    brand: {
      arrowColor: theme.colors.coreInverse,
      circleColor: theme.colors.coreBrandFocus
    }
  };
}

export default (theme, variant = variantDefault) =>
  processThemeStyles(theme, variant, base, variants);
