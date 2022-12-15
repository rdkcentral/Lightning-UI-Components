export const base = theme => ({
  w: theme.spacer.md * 8,
  knobWidth: theme.spacer.xl,
  knobHeight: theme.spacer.xl,
  knobRadius: theme.radius.sm + theme.radius.xs,
  knobPadding: theme.spacer.xxs,
  knobX: theme.spacer.xs,
  knobXChecked: theme.spacer.xxl + theme.spacer.xs,
  strokeRadius: theme.radius.md,
  strokeWeight: theme.stroke.sm
});

export const tone = theme => ({
  neutral: {
    strokeColor: theme.color.fillInverse,
    backgroundColor: theme.color.fillNeutralDisabled,
    backgroundColorChecked: theme.color.fillNeutral,
    knobColor: theme.color.fillInverse,
    knobColorChecked: theme.color.fillInverse,
    mode: {
      disabled: {
        strokeColor: theme.color.fillInverseDisabled,
        backgroundColor: theme.color.fillNeutralDisabled,
        backgroundColorChecked: theme.color.fillNeutralDisabled,
        knobColor: theme.color.fillInverseDisabled,
        knobColorChecked: theme.color.fillInverseDisabled
      }
    }
  },
  inverse: {
    strokeColor: theme.color.fillNeutral,
    backgroundColor: theme.color.fillInverseDisabled,
    backgroundColorChecked: theme.color.fillInverse,
    knobColor: theme.color.fillNeutral,
    knobColorChecked: theme.color.fillNeutral,
    mode: {
      disabled: {
        strokeColor: theme.color.fillInverseDisabled,
        backgroundColor: theme.color.fillNeutralDisabled,
        backgroundColorChecked: theme.color.fillNeutralDisabled,
        knobColor: theme.color.fillInverseDisabled,
        knobColorChecked: theme.color.fillInverseDisabled
      }
    }
  },
  brand: {
    strokeColor: theme.color.fillNeutral,
    backgroundColor: theme.color.fillInverseDisabled,
    backgroundColorChecked: theme.color.fillBrand,
    knobColor: theme.color.fillNeutral,
    knobColorChecked: theme.color.fillNeutral,
    mode: {
      disabled: {
        strokeColor: theme.color.fillNeutralDisabled,
        backgroundColor: theme.color.fillInverseDisabled,
        backgroundColorChecked: theme.color.fillInverseDisabled,
        knobColor: theme.color.fillNeutralDisabled,
        knobColorChecked: theme.color.fillNeutralDisabled
      }
    }
  }
});
