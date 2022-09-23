const alphas = {
  full: 1,
  none: 0,
  alpha1: 0.1,
  alpha2: 0.3,
  alpha3: 0.5,
  alpha4: 0.7,
  alpha5: 0.9
};

export default {
  inactive: alphas.alpha3,
  primary: alphas.full,
  secondary: alphas.alpha4,
  tertiary: alphas.alpha1,
  ...alphas
};
