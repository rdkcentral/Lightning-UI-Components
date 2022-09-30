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

export const palette = theme => ({
  neutral: {
    strokeColor: theme.color.coreInverse,
    backgroundColor: theme.color.coreNeutralDisabled,
    backgroundColorChecked: theme.color.coreNeutral,
    knobColor: theme.color.coreInverse,
    knobColorChecked: theme.color.coreInverse,
    mode: {
      disabled: {
        strokeColor: theme.color.coreInverseDisabled,
        backgroundColor: theme.color.coreNeutralDisabled,
        backgroundColorChecked: theme.color.coreNeutralDisabled,
        knobColor: theme.color.coreInverseDisabled,
        knobColorChecked: theme.color.coreInverseDisabled
      }
    }
  },
  inverse: {
    strokeColor: theme.color.coreNeutral,
    backgroundColor: theme.color.coreInverseDisabled,
    backgroundColorChecked: theme.color.coreInverse,
    knobColor: theme.color.coreNeutral,
    knobColorChecked: theme.color.coreNeutral,
    mode: {
      disabled: {
        strokeColor: theme.color.coreInverseDisabled,
        backgroundColor: theme.color.coreNeutralDisabled,
        backgroundColorChecked: theme.color.coreNeutralDisabled,
        knobColor: theme.color.coreInverseDisabled,
        knobColorChecked: theme.color.coreInverseDisabled
      }
    }
  },
  brand: {
    strokeColor: theme.color.coreNeutral,
    backgroundColor: theme.color.coreInverseDisabled,
    backgroundColorChecked: theme.color.coreBrand,
    knobColor: theme.color.coreNeutral,
    knobColorChecked: theme.color.coreNeutral,
    mode: {
      disabled: {
        strokeColor: theme.color.coreNeutralDisabled,
        backgroundColor: theme.color.coreInverseDisabled,
        backgroundColorChecked: theme.color.coreInverseDisabled,
        knobColor: theme.color.coreNeutralDisabled,
        knobColorChecked: theme.color.coreNeutralDisabled
      }
    }
  }
});
