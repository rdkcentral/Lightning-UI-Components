export const base = theme => {
  const strokeWidth = theme.stroke.sm;
  const size = theme.spacer.xxl - strokeWidth * 2;
  return {
    alpha: 1,
    w: size,
    h: size,
    checkW: theme.spacer.lg,
    checkH: theme.spacer.md + theme.spacer.xs,
    checkSrc: theme.asset.check,
    radius: size / 2,
    strokeWidth
  };
};

export const tone = theme => ({
  neutral: {
    strokeColor: theme.color.strokeInverse,
    checkColor: theme.color.textInverse,
    backgroundColor: theme.color.fillNeutralDisabled,
    backgroundColorChecked: theme.color.fillNeutral
  },
  inverse: {
    strokeColor: theme.color.strokeNeutral,
    checkColor: theme.color.textNeutral,
    backgroundColor: theme.color.fillInverseDisabled,
    backgroundColorChecked: theme.color.fillInverse
  },
  brand: {
    strokeColor: theme.color.strokeNeutral,
    checkColor: theme.color.textNeutral,
    backgroundColor: theme.color.fillInverseDisabled,
    backgroundColorChecked: theme.color.fillBrand
  }
});

export const mode = theme => ({
  disabled: { alpha: theme.alpha.inactive }
});
