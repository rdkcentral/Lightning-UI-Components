export const base = theme => ({
  radius: theme.radius.xl,
  paddingX: theme.spacer.xxxl + theme.spacer.xxs,
  paddingY: theme.spacer.md + theme.spacer.xs,
  noTitlePaddingX: theme.spacer.xl,
  iconSize: theme.spacer.xxxl,
  iconMarginRight: theme.spacer.md,
  textStyle: theme.typography.headline3,
  backgroundColor: theme.colors.transparent,
  contentColor: theme.colors.coreNeutral
});

export const mode = theme => ({
  focused: {
    backgroundColor: theme.colors.interactiveNeutralFocus,
    contentColor: theme.colors.coreInverse
  },
  pressed: {
    backgroundColor: theme.colors.interactiveNeutralFocusSoft,
    contentColor: theme.colors.coreNeutral
  },
  selected: {
    backgroundColor: theme.colors.interactiveNeutralFocusSoft,
    contentColor: theme.colors.coreNeutral
  },
  disabled: {
    backgroundColor: theme.colors.transparent,
    contentColor: theme.colors.coreNeutralDisabled
  }
});

export const palette = theme => ({
  neutral: {},
  inverse: {
    mode: {
      focused: {
        contentColor: theme.colors.coreNeutral
      }
    }
  },
  brand: {
    mode: {
      focused: {
        contentColor: theme.colors.coreNeutral
      }
    }
  }
});
