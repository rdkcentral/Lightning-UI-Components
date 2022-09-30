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
    arrowColor: theme.color.coreNeutral,
    circleColor: theme.color.interactiveNeutralFocus
  },
  inverse: {
    arrowColor: theme.color.coreInverse,
    circleColor: theme.color.interactiveInverseFocus
  },
  brand: {
    arrowColor: theme.color.coreNeutral,
    circleColor: theme.color.interactiveNeutralFocus
  }
});
