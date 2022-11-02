export const base = theme => ({
  duration: 2,
  keyframes: [0, 0.17, 0.58, 1],
  lockedRatio: 10 / 3,
  lockedPaddingRatio: 5 / 3,
  radius: theme.radius.none,
  repeat: -1,
  w: theme.spacer.sm
});

export const palette = theme => ({
  neutral: { color: theme.color.fillNeutral },
  inverse: { color: theme.color.fillInverse },
  brand: { color: theme.color.fillBrand }
});
