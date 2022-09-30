export const base = () => ({
  alpha1: 0.2,
  alpha2: 1,
  alpha3: 0.6,
  circleSize: 100,
  scale1: 0.4,
  scale2: 1,
  scale3: 0.7,
  smoothness: 0.8
});

export const palette = theme => ({
  neutral: { circleColor: theme.color.coreNeutral },
  inverse: { circleColor: theme.color.coreInverse },
  brand: { circleColor: theme.color.coreBrand }
});
