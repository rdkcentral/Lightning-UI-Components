export const base = theme => ({
  radius: theme.radius.xl,
  paddingX: theme.spacer.xxxl + theme.spacer.xxs,
  paddingY: theme.spacer.md + theme.spacer.xs,
  noTitlePaddingX: theme.spacer.xl,
  iconSize: theme.spacer.xxxl,
  iconMarginRight: theme.spacer.md,
  textStyle: {
    ...theme.typography.headline3,
    textColor: theme.color.textNeutral
  },
  backgroundColor: theme.color.fillTransparent,
  contentColor: theme.color.fillNeutral
});

export const mode = theme => ({
  focused: {
    backgroundColor: theme.color.interactiveNeutralFocus,
    contentColor: theme.color.fillInverse,
    textStyle: { textColor: theme.color.textInverse }
  },
  selected: {
    backgroundColor: theme.color.interactiveNeutralFocusSoft,
    contentColor: theme.color.fillNeutral,
    textStyle: { textColor: theme.color.textNeutral }
  },
  disabled: {
    backgroundColor: theme.color.fillTransparent,
    contentColor: theme.color.fillNeutralDisabled,
    textStyle: { textColor: theme.color.textNeutralDisabled }
  }
});

export const palette = theme => ({
  neutral: {},
  inverse: {
    mode: {
      focused: {
        contentColor: theme.color.fillNeutral,
        textStyle: { textColor: theme.color.textNeutral }
      }
    }
  },
  brand: {
    mode: {
      focused: {
        contentColor: theme.color.fillNeutral,
        textStyle: { textColor: theme.color.textNeutral }
      }
    }
  }
});
