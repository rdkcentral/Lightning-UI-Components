export const base = theme => ({
  backgroundColor: theme.colors.coreInverseSecondary,
  radius: theme.radius.md,
  scale: theme.getUnfocusScale,
  animation: {}
});

export const mode = theme => ({
  disabled: {
    backgroundColor: theme.colors.coreInverseDisabled
  },
  focused: {
    scale: theme.getFocusScale,
    animation: {}
  }
});

export const palette = theme => ({
  neutral: {
    mode: {
      focused: {
        backgroundColor: theme.colors.interactiveNeutralFocus
      }
    }
  },
  inverse: {
    mode: {
      focused: {
        backgroundColor: theme.colors.interactiveInverseFocus
      }
    }
  },
  brand: {
    mode: {
      focused: {
        backgroundColor: theme.colors.interactiveBrandFocus
      }
    }
  }
});
