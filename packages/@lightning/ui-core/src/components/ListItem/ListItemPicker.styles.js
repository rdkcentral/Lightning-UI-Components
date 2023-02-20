export const base = theme => ({
  arrowAlphaValue: theme.alpha.primary,
  arrowAlphaValueLimit: theme.alpha.secondary,
  arrowWidth: theme.spacer.xxl,
  arrowHeight: theme.spacer.xxl,
  iconLeftSrc: theme.asset.arrowLeft,
  iconRightSrc: theme.asset.arrowRight
});

export const tone = theme => ({
  neutral: {
    mode: {
      focused: {
        arrowColor: theme.color.fillInverse
      }
    }
  },
  inverse: {
    mode: {
      focused: {
        arrowColor: theme.color.fillNeutral
      }
    }
  },
  brand: {
    mode: {
      focused: {
        arrowColor: theme.color.fillInverse
      }
    }
  }
});
