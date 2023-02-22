export const base = theme => ({
  alpha1: theme.alpha.tertiary,
  alpha2: theme.alpha.primary,
  alpha3: theme.alpha.secondary,
  circleSize: theme.spacer.xxl,
  scale1: 0.25,
  scale2: 1,
  scale3: 0.5,
  smoothness: theme.animation.duration.slow
});

export const tone = theme => ({
  neutral: { circleColor: theme.color.fillNeutral },
  inverse: { circleColor: theme.color.fillInverse },
  brand: { circleColor: theme.color.fillBrand }
});
