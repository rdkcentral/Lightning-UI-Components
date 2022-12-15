export const base = theme => ({
  offsetX: 0,
  offsetY: theme.spacer.lg,
  blur: theme.spacer.xxl,
  spread: theme.spacer.md * -1,
  alpha: 0,
  radius: theme.radius.md,
  color: theme.color.shadowNeutralFocus,
  animation: theme.animation.expressiveEntrance
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
