export const base = theme => ({
  paddingY: theme.spacer.xl,
  paddingVertical: theme.spacer.xxxl,
  sliderStyles: {},
  valueTextStyle: {
    ...theme.typography.headline3,
    maxLines: 1,
    textColor: theme.color.textNeutralSecondary
  }
});

export const mode = theme => ({
  disabled: {
    valueTextStyle: { textColor: theme.color.textNeutralDisabled }
  },
  focused: {
    valueTextStyle: { textColor: theme.color.textInverseSecondary }
  }
});

export const tone = theme => ({
  neutral: {
    mode: {
      focused: {
        valueTextStyle: { textColor: theme.color.textInverseSecondary }
      }
    }
  },
  inverse: {
    mode: {
      focused: {
        valueTextStyle: { textColor: theme.color.textNeutralSecondary }
      }
    }
  },
  brand: {
    mode: {
      focused: {
        valueTextStyle: { textColor: theme.color.textInverseSecondary }
      }
    }
  }
});
