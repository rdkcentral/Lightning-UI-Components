export const base = () => {
  return {
    arrowAlphaValue: 0
  };
};

export const mode = () => ({
  focused: {
    arrowAlphaValue: 1
  }
});

export const tone = theme => ({
  neutral: {
    mode: {
      focused: {
        arrowColor: theme.color.fillInverse,
        progressBarStyle: {
          barColor: theme.color.fillInverseTertiary,
          progressColor: theme.color.fillInverse
        }
      }
    }
  },

  inverse: {
    mode: {
      focused: {
        arrowColor: theme.color.fillInverse,
        progressBarStyles: {
          barColor: theme.color.fillNeutralTertiary,
          progressColor: theme.color.fillNeutral
        }
      }
    }
  },
  brand: {
    mode: {
      focused: {
        arrowColor: theme.color.fillNeutral,
        progressBarStyle: {
          barColor: theme.color.fillBrandTertiary,
          progressColor: theme.color.fillBrand
        }
      }
    }
  }
});
