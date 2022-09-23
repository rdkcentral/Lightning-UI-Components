const alphas = {
  alpha1: 0.15,
  alpha2: 0.3,
  alpha3: 0.6,
  alpha4: 0.8,
  alpha5: 0.9
};

export default {
  inactive: alphas.alpha2,
  secondary: alphas.alpha3,
  tertiary: alphas.alpha1,
  ...alphas
};
