export const base = theme => ({
  backgroundColor: theme.color.coreInverseSecondary,
  radius: theme.radius.md,
  animation: {}
});

export const mode = theme => ({
  disabled: {
    backgroundColor: theme.color.coreInverseDisabled
  }
});

export const palette = theme => ({
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
