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
    strokeColor: theme.colors.coreInverse,
    backgroundColor: theme.colors.coreNeutralDisabled,
    backgroundColorChecked: theme.colors.coreNeutral,
    knobColor: theme.colors.coreInverse,
    knobColorChecked: theme.colors.coreInverse,
    mode: {
      disabled: {
        strokeColor: theme.colors.coreInverseDisabled,
        backgroundColor: theme.colors.coreNeutralDisabled,
        backgroundColorChecked: theme.colors.coreNeutralDisabled,
        knobColor: theme.colors.coreInverseDisabled,
        knobColorChecked: theme.colors.coreInverseDisabled
      }
    }
  },
  inverse: {
    strokeColor: theme.colors.coreNeutral,
    backgroundColor: theme.colors.coreInverseDisabled,
    backgroundColorChecked: theme.colors.coreInverse,
    knobColor: theme.colors.coreNeutral,
    knobColorChecked: theme.colors.coreNeutral,
    mode: {
      disabled: {
        strokeColor: theme.colors.coreInverseDisabled,
        backgroundColor: theme.colors.coreNeutralDisabled,
        backgroundColorChecked: theme.colors.coreNeutralDisabled,
        knobColor: theme.colors.coreInverseDisabled,
        knobColorChecked: theme.colors.coreInverseDisabled
      }
    }
  },
  brand: {
    strokeColor: theme.colors.coreNeutral,
    backgroundColor: theme.colors.coreInverseDisabled,
    backgroundColorChecked: theme.colors.coreBrand,
    knobColor: theme.colors.coreNeutral,
    knobColorChecked: theme.colors.coreNeutral,
    mode: {
      disabled: {
        strokeColor: theme.colors.coreNeutralDisabled,
        backgroundColor: theme.colors.coreInverseDisabled,
        backgroundColorChecked: theme.colors.coreInverseDisabled,
        knobColor: theme.colors.coreNeutralDisabled,
        knobColorChecked: theme.colors.coreNeutralDisabled
      }
    }
  }
});
