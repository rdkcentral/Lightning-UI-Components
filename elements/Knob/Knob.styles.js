export const base = theme => {
  const size = theme.spacer.lg;
  return {
    circleSize: size,
    radius: size / 2
  };
};

export const variants = theme => ({
  neutral: {
    circleColor: theme.color.interactiveNeutralFocus
  },
  inverse: {
    circleColor: theme.color.interactiveInverseFocus
  },
  brand: {
    circleColor: theme.color.coreBrandFocus
  }
});
