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
    strokeColor: theme.color.coreInverse,
    checkColor: theme.color.coreInverse,
    checkedBackgroundColor: theme.color.coreNeutral,
    uncheckedBackgroundColor: theme.color.coreNeutralDisabled,
    mode: {
      disabled: {
        backgroundColor: theme.color.coreNeutralDisabled,
        strokeColor: theme.color.coreInverseDisable
      }
    }
  },
  inverse: {
    strokeColor: theme.color.coreNeutral,
    checkColor: theme.color.coreNeutral,
    checkedBackgroundColor: theme.color.coreInverse,
    uncheckedBackgroundColor: theme.color.coreInverseDisabled,
    mode: {
      disabled: {
        backgroundColor: theme.color.coreInverseDisabled,
        strokeColor: theme.color.coreNeutralDisabled
      }
    }
  },
  brand: {
    strokeColor: theme.color.coreNeutral,
    checkColor: theme.color.coreNeutral,
    checkedBackgroundColor: theme.color.coreBrand,
    uncheckedBackgroundColor: theme.color.coreInverseDisabled,
    mode: {
      disabled: {
        backgroundColor: theme.color.coreInverseDisabled,
        strokeColor: theme.color.coreNeutralDisabled
      }
    }
  }
});
