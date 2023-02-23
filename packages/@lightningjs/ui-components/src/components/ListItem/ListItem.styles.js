import utils from '../../utils';

export const base = theme => ({
  alpha: 1,
  descriptionTextStyle: {
    ...theme.typography.body3,
    maxLines: 1,
    textColor: theme.color.textNeutralSecondary
  },
  h: theme.spacer.xxl * 3,
  logoStyle: {
    w: theme.spacer.xxl * 2,
    h: theme.spacer.xxl * 2,
    radius: theme.radius.sm
  },
  paddingX: theme.spacer.xl,
  prefixH: theme.spacer.xxxl + theme.spacer.xl,
  suffixH: theme.spacer.xxxl + theme.spacer.xl,
  titlePadding: theme.spacer.lg,
  titleTextStyle: {
    ...theme.typography.headline3,
    maxLines: 1,
    textColor: theme.color.textNeutral
  },
  w: utils.getWidthByColumnSpan(theme, 3)
});

export const mode = theme => ({
  disabled: {
    alpha: theme.alpha.inactive,
    descriptionTextStyle: { textColor: theme.color.textNeutralDisabled },
    titleTextStyle: { textColor: theme.color.textNeutralDisabled }
  },
  focused: {
    descriptionTextStyle: { textColor: theme.color.textInverseSecondary },
    titleTextStyle: { textColor: theme.color.textInverse }
  }
});

export const tone = theme => ({
  inverse: {
    mode: {
      focused: {
        descriptionTextStyle: { textColor: theme.color.textNeutral },
        titleTextStyle: { textColor: theme.color.textNeutral }
      }
    }
  }
});
