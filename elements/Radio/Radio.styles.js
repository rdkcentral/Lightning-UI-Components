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
    backgroundColor: theme.color.coreNeutralDisabled,
    backgroundColorChecked: theme.color.coreNeutral,
    knobColor: theme.color.coreInverse,
    strokeColor: theme.color.coreInverse,
    mode: {
      disabled: {
        backgroundColor: theme.color.coreNeutralDisabled,
        strokeColor: theme.color.coreInverseDisabled
      }
    }
  },
  inverse: {
    backgroundColor: theme.color.coreInverse,
    backgroundColorChecked: theme.color.coreInverse,
    knobColor: theme.color.coreNeutral,
    strokeColor: theme.color.coreNeutral,
    mode: {
      disabled: {
        backgroundColor: theme.color.coreNeutralDisabled,
        strokeColor: theme.color.coreInverseDisabled
      }
    }
  },
  brand: {
    backgroundColor: theme.color.coreInverseDisabled,
    backgroundColorChecked: theme.color.coreBrand,
    knobColor: theme.color.coreNeutral,
    strokeColor: theme.color.coreNeutral,
    mode: {
      disabled: {
        backgroundColor: theme.color.coreInverseDisabled,
        strokeColor: theme.color.coreNeutralDisabled
      }
    }
  }
});
