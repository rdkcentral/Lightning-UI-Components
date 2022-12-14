export const base = theme => ({
  animationEntrance: theme.animation.standardEntrance,
  animationExit: theme.animation.expressiveEntrance,
  artworkStyles: {},
  badgeStyles: {},
  checkboxStyles: {},
  labelStyles: {},
  metadataStyles: {},
  paddingX: theme.spacer.xl,
  paddingY: theme.spacer.lg,
  paddingYProgress: theme.spacer.lg + theme.spacer.xs,
  progressBarStyles: {},
  radius: theme.radius.md,
  alpha: 1
});

export const palette = theme => ({
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
