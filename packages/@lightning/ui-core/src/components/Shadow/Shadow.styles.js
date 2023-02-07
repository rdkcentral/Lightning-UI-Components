export const base = theme => ({
  alpha: 0,
  animation: theme.animation.standardEntrance,
  blur: theme.spacer.xxl,
  color: theme.color.shadowNeutralFocus,
  offsetX: 0,
  offsetY: theme.spacer.lg,
  radius: theme.radius.md,
  spread: theme.spacer.md * -1,

  // TODO: Need to know which offsets between the base and focus style is largest. Could refactor.
  maxOffsetY: theme.spacer.xxl,
  maxOffsetX: 0
});

export const mode = theme => ({
  // Note: styleguide implies also reducing the size of the shadow here,
  // however we currently can't gracefully animate that size change.
  // Just animating the offset and alpha gives a pretty decent effect
  focused: {
    alpha: theme.alpha.secondary,
    offsetY: theme.spacer.xxl
  }
});

export const tone = theme => ({
  neutral: {
    color: theme.color.shadowNeutralFocus
  },
  inverse: {
    color: theme.color.shadowInverseFocus
  },
  brand: {
    color: theme.color.shadowBrandFocus
  }
});
