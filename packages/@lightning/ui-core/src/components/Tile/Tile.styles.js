export const base = theme => ({
  animationEntrance: theme.animation.standardEntrance,
  animationExit: theme.animation.expressiveEntrance,
  paddingX: theme.spacer.xl,
  paddingY: theme.spacer.lg,
  paddingYProgress: theme.spacer.lg + theme.spacer.xs,
  radius: theme.radius.md,
  alpha: 1
});

export const tone = theme => ({
  neutral: {
    mode: {
      focused: {
        backgroundColor: theme.color.interactiveNeutralFocusSoft
      }
    }
  },
  inverse: {
    mode: {
      focused: {
        backgroundColor: theme.color.interactiveInverseFocusSoft
      }
    }
  },
  brand: {
    mode: {
      focused: {
        backgroundColor: theme.color.interactiveBrandFocusSoft
      }
    }
  }
});

export const mode = theme => ({
  disabled: {
    alpha: theme.alpha.inactive
  }
});
