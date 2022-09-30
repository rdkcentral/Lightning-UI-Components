const alpha = {
  full: 1,
  none: 0,
  alpha1: 0.1,
  alpha2: 0.3,
  alpha3: 0.5,
  alpha4: 0.7,
  alpha5: 0.9
};

export default {
  primary: alpha.full,
  secondary: alpha.alpha4,
  tertiary: alpha.alpha1,
  inactive: alpha.alpha3,
  ...alpha
};
