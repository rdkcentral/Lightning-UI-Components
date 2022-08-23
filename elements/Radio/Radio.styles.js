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
    backgroundColor: theme.colors.coreNeutralDisabled,
    backgroundColorChecked: theme.colors.coreNeutral,
    knobColor: theme.colors.coreInverse,
    strokeColor: theme.colors.coreInverse,
    mode: {
      disabled: {
        backgroundColor: theme.colors.coreNeutralDisabled,
        strokeColor: theme.colors.coreInverseDisabled
      }
    }
  },
  inverse: {
    backgroundColor: theme.colors.coreInverse,
    backgroundColorChecked: theme.colors.coreInverse,
    knobColor: theme.colors.coreNeutral,
    strokeColor: theme.colors.coreNeutral,
    mode: {
      disabled: {
        backgroundColor: theme.colors.coreNeutralDisabled,
        strokeColor: theme.colors.coreInverseDisabled
      }
    }
  },
  brand: {
    backgroundColor: theme.colors.coreInverseDisabled,
    backgroundColorChecked: theme.colors.coreBrand,
    knobColor: theme.colors.coreNeutral,
    strokeColor: theme.colors.coreNeutral,
    mode: {
      disabled: {
        backgroundColor: theme.colors.coreInverseDisabled,
        strokeColor: theme.colors.coreNeutralDisabled
      }
    }
  }
});
