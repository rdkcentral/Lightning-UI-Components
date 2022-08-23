export const base = theme => {
  const size = theme.spacer.lg;
  return {
    circleSize: size,
    radius: size / 2
  };
};

export const variants = theme => ({
  neutral: {
    circleColor: theme.colors.interactiveNeutralFocus
  },
  inverse: {
    circleColor: theme.colors.interactiveInverseFocus
  },
  brand: {
    circleColor: theme.colors.coreBrandFocus
  }
});
