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
        progressBarStyle: {
          barColor: theme.color.fillInverseTertiary,
          progressColor: theme.color.fillInverse
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
