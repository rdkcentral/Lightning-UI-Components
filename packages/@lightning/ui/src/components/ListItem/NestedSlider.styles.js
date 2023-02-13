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
        progressBar: {
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
        progressBar: {
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
        progressBar: {
          barColor: theme.color.fillBrandTertiary,
          progressColor: theme.color.fillBrand
        }
      }
    }
  }
});
