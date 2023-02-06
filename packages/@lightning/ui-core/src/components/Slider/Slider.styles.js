import { getWidthByColumnSpan } from '../../utils/index.js';

export const base = theme => {
  const size = theme.spacer.lg;
  return {
    arrowAlphaValue: 1,
    arrowAlphaValueLimit: 0.5,
    arrowHeight: theme.spacer.lg,
    arrowSpacing: theme.spacer.md,
    arrowWidth: theme.spacer.md,
    containerHeight: theme.spacer.lg + theme.spacer.xs,
    minWidth: getWidthByColumnSpan(theme, 2),
    progressBarStyle: {},
    w: size,
    h: size,
    radius: size / 2,
    sliderHeight: theme.spacer.md,
    showArrows: true,
    showKnob: true,
    circleAnimation: {}
  };
};

export const mode = () => ({
  disabled: {
    arrowAlphaValue: 0
  }
});

export const tone = theme => ({
  neutral: {
    arrowColor: theme.color.fillNeutral,
    circleColor: theme.color.interactiveNeutralFocus
  },
  inverse: {
    arrowColor: theme.color.fillInverse,
    circleColor: theme.color.interactiveInverseFocus
  },
  brand: {
    arrowColor: theme.color.fillNeutral,
    circleColor: theme.color.interactiveNeutralFocus
  }
});
