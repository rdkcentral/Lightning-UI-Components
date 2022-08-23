import check from './check-icon.png';

export const base = theme => {
  const strokeWidth = theme.stroke.sm;
  const size = theme.spacer.xxl - strokeWidth * 2;
  return {
    w: size,
    h: size,
    checkW: theme.spacer.lg,
    checkH: theme.spacer.md + theme.spacer.xs,
    checkSrc: check,
    radius: size / 2,
    strokeWidth
  };
};

export const palette = theme => ({
  neutral: {
    strokeColor: theme.colors.coreInverse,
    checkColor: theme.colors.coreInverse,
    checkedBackgroundColor: theme.colors.coreNeutral,
    uncheckedBackgroundColor: theme.colors.coreNeutralDisabled,
    mode: {
      disabled: {
        backgroundColor: theme.colors.coreNeutralDisabled,
        strokeColor: theme.colors.coreInverseDisable
      }
    }
  },
  inverse: {
    strokeColor: theme.colors.coreNeutral,
    checkColor: theme.colors.coreNeutral,
    checkedBackgroundColor: theme.colors.coreInverse,
    uncheckedBackgroundColor: theme.colors.coreInverseDisabled,
    mode: {
      disabled: {
        backgroundColor: theme.colors.coreInverseDisabled,
        strokeColor: theme.colors.coreNeutralDisabled
      }
    }
  },
  brand: {
    strokeColor: theme.colors.coreNeutral,
    checkColor: theme.colors.coreNeutral,
    checkedBackgroundColor: theme.colors.coreBrand,
    uncheckedBackgroundColor: theme.colors.coreInverseDisabled,
    mode: {
      disabled: {
        backgroundColor: theme.colors.coreInverseDisabled,
        strokeColor: theme.colors.coreNeutralDisabled
      }
    }
  }
});
