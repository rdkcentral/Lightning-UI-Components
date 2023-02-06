export const base = theme => ({
  arrowAlphaValue: theme.alpha.primary,
  arrowAlphaValueLimit: theme.alpha.secondary,
  arrowWidth: theme.spacer.md,
  arrowHeight: theme.spacer.lg,
  arrowColor: theme.color.fillNeutral
});

export const tone = theme => ({
  neutral: {
    mode: {
      focused: {
        arrowColor: theme.color.fillInverse
      },
      disabled: {
        arrowColor: theme.color.fillNeutralDisabled
      }
    }
  },
  inverse: {
    mode: {
      focused: {
        arrowColor: theme.color.fillNeutral
      },
      disabled: {
        arrowColor: theme.color.fillInverseDisabled
      }
    }
  },
  brand: {
    mode: {
      focused: {
        arrowColor: theme.color.fillInverse
      },
      disabled: {
        arrowColor: theme.color.fillNeutralDisabled
      }
    }
  }
});
