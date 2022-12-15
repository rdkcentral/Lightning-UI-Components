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

export const tone = theme => ({
  neutral: {
    strokeColor: theme.color.strokeInverse,
    checkColor: theme.color.fillInverse,
    backgroundColor: theme.color.fillNeutralDisabled,
    backgroundColorChecked: theme.color.fillNeutral,
    mode: {
      disabled: {
        backgroundColor: theme.color.fillNeutralDisabled,
        strokeColor: theme.color.strokeInverseDisable
      }
    }
  },
  inverse: {
    strokeColor: theme.color.strokeNeutral,
    checkColor: theme.color.fillNeutral,
    backgroundColor: theme.color.fillInverseDisabled,
    backgroundColorChecked: theme.color.fillInverse,
    mode: {
      disabled: {
        backgroundColor: theme.color.fillInverseDisabled,
        strokeColor: theme.color.strokeNeutralDisabled
      }
    }
  },
  brand: {
    strokeColor: theme.color.strokeNeutral,
    checkColor: theme.color.fillNeutral,
    backgroundColor: theme.color.fillInverseDisabled,
    backgroundColorChecked: theme.color.fillBrand,
    mode: {
      disabled: {
        backgroundColor: theme.color.fillInverseDisabled,
        strokeColor: theme.color.strokeNeutralDisabled
      }
    }
  }
});
