export const base = theme => {
  const size = theme.spacer.xxl;
  return {
    w: size,
    h: size,
    knobHeight: size / 2,
    knobWidth: size / 2,
    radius: size / 2,
    strokeWidth: theme.stroke.md
  };
};

export const palette = theme => ({
  neutral: {
    backgroundColor: theme.color.fillNeutralDisabled,
    backgroundColorChecked: theme.color.fillNeutral,
    knobColor: theme.color.fillInverse,
    strokeColor: theme.color.fillInverse,
    mode: {
      disabled: {
        backgroundColor: theme.color.fillNeutralDisabled,
        strokeColor: theme.color.fillInverseDisabled
      }
    }
  },
  inverse: {
    backgroundColor: theme.color.fillInverse,
    backgroundColorChecked: theme.color.fillInverse,
    knobColor: theme.color.fillNeutral,
    strokeColor: theme.color.fillNeutral,
    mode: {
      disabled: {
        backgroundColor: theme.color.fillNeutralDisabled,
        strokeColor: theme.color.fillInverseDisabled
      }
    }
  },
  brand: {
    backgroundColor: theme.color.fillInverseDisabled,
    backgroundColorChecked: theme.color.fillBrand,
    knobColor: theme.color.fillNeutral,
    strokeColor: theme.color.fillNeutral,
    mode: {
      disabled: {
        backgroundColor: theme.color.fillInverseDisabled,
        strokeColor: theme.color.fillNeutralDisabled
      }
    }
  }
});
