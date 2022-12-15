export const base = theme => ({
  backgroundColor: theme.color.fillInverseSecondary,
  radius: theme.radius.md,
  animation: {}
});

export const mode = theme => ({
  focused: {
    backgroundColor: theme.color.interactiveNeutralFocus
  },
  disabled: {
    backgroundColor: theme.color.fillInverseDisabled
  }
});

export const tone = theme => ({
  neutral: {
    mode: {
      focused: {
        backgroundColor: theme.color.interactiveNeutralFocus
      }
    }
  },
  inverse: {
    mode: {
      focused: {
        backgroundColor: theme.color.interactiveInverseFocus
      }
    }
  },
  brand: {
    mode: {
      focused: {
        backgroundColor: theme.color.interactiveBrandFocus
      }
    }
  }
});
