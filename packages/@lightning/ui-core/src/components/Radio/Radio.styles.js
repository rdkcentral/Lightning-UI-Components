export const base = theme => {
  const size = theme.spacer.xxl;
  return {
    alpha: 1,
    w: size,
    h: size,
    knobHeight: size / 2,
    knobWidth: size / 2,
    radius: size / 2,
    strokeWidth: theme.stroke.sm
  };
};

export const palette = theme => ({
  neutral: {
    backgroundColor: theme.color.fillNeutralDisabled,
    backgroundColorChecked: theme.color.fillNeutral,
    knobColor: theme.color.fillInverse,
    strokeColor: theme.color.strokeInverse
  },
  inverse: {
    backgroundColor: theme.color.fillInverseDisabled,
    backgroundColorChecked: theme.color.fillInverse,
    knobColor: theme.color.fillNeutral,
    strokeColor: theme.color.strokeNeutral
  },
  brand: {
    backgroundColor: theme.color.fillInverseDisabled,
    backgroundColorChecked: theme.color.fillBrand,
    knobColor: theme.color.fillNeutral,
    strokeColor: theme.color.strokeNeutral
  }
});

export const mode = theme => ({
  disabled: { alpha: theme.alpha.inactive }
});
