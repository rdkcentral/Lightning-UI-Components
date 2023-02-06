export const base = () => {
  return {
    showArrows: false,
    showKnob: false
  };
};

export const mode = () => ({
  focused: {
    showArrows: true
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
        arrowColor: theme.color.fillNeutral,
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
        arrowColor: theme.color.fillInverse,
        progressBarStyle: {
          barColor: theme.color.fillBrandTertiary,
          progressColor: theme.color.fillBrand
        }
      }
    }
  }
});
