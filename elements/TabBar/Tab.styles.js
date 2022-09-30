export const base = theme => ({
  radius: theme.radius.xl,
  paddingX: theme.spacer.xxxl + theme.spacer.xxs,
  paddingY: theme.spacer.md + theme.spacer.xs,
  noTitlePaddingX: theme.spacer.xl,
  iconSize: theme.spacer.xxxl,
  iconMarginRight: theme.spacer.md,
  textStyle: theme.typography.headline3,
  backgroundColor: theme.color.transparent,
  contentColor: theme.color.coreNeutral
});

export const mode = theme => ({
  focused: {
    backgroundColor: theme.color.interactiveNeutralFocus,
    contentColor: theme.color.coreInverse
  },
  pressed: {
    backgroundColor: theme.color.interactiveNeutralFocusSoft,
    contentColor: theme.color.coreNeutral
  },
  selected: {
    backgroundColor: theme.color.interactiveNeutralFocusSoft,
    contentColor: theme.color.coreNeutral
  },
  disabled: {
    backgroundColor: theme.color.transparent,
    contentColor: theme.color.coreNeutralDisabled
  }
});

export const palette = theme => ({
  neutral: {},
  inverse: {
    mode: {
      focused: {
        contentColor: theme.color.coreNeutral
      }
    }
  },
  brand: {
    mode: {
      focused: {
        contentColor: theme.color.coreNeutral
      }
    }
  }
});
