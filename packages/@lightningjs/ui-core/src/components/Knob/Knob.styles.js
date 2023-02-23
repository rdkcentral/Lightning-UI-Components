export const base = theme => {
  const size = theme.spacer.lg;
  return {
    w: size,
    h: size,
    radius: size / 2
  };
};

export const tone = theme => ({
  neutral: {
    circleColor: theme.color.interactiveNeutralFocus,
    mode: {
      disabled: {
        circleColor: theme.color.fillNeutralDisabled
      }
    }
  },
  inverse: {
    circleColor: theme.color.interactiveInverseFocus,
    mode: {
      disabled: {
        circleColor: theme.color.fillInverseDisabled
      }
    }
  },
  brand: {
    circleColor: theme.color.interactiveBrandFocus,
    mode: {
      disabled: {
        circleColor: theme.color.fillInverseDisabled
      }
    }
  }
});
