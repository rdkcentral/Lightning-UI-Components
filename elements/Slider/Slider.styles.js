import { getWidthByColumnSpan } from '../../utils';

export const base = theme => {
  const size = theme.spacer.lg;
  return {
    arrowAlphaValue: 1,
    arrowAlphaValueLimit: 0.5,
    arrowHeight: theme.spacer.lg,
    arrowSpacing: theme.spacer.md,
    arrowWidth: theme.spacer.md,
    containerHeight: theme.spacer.lg + theme.spacer.xs,
    innerCircleSize: size,
    minWidth: getWidthByColumnSpan(2),
    progressBarStyles: {},
    radius: size / 2,
    sliderHeight: theme.spacer.md,
    circleAnimation: {}
  };
};

export const mode = () => ({
  disabled: {
    arrowAlphaValue: 0
  }
});

export const palette = theme => ({
  neutral: {
    arrowColor: theme.colors.coreNeutral,
    circleColor: theme.colors.interactiveNeutralFocus
  },
  inverse: {
    arrowColor: theme.colors.coreInverse,
    circleColor: theme.colors.interactiveInverseFocus
  },
  brand: {
    arrowColor: theme.colors.coreNeutral,
    circleColor: theme.colors.interactiveNeutralFocus
  }
});
