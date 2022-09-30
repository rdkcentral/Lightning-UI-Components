const alpha = {
  full: 1,
  none: 0,
  alpha1: 0.15,
  alpha2: 0.3,
  alpha3: 0.6,
  alpha4: 0.8,
  alpha5: 0.9
};

export default {
  primary: alpha.full,
  secondary: alpha.alpha3,
  tertiary: alpha.alpha1,
  inactive: alpha.alpha2,
  ...alpha
};
