export const base = theme => ({
  descriptionTextStyle: { ...theme.typography.body2, maxLines: 1 },
  fadeWidth: theme.layout.gutterX.lg,
  logoWidth: theme.typography.body3.lineHeight,
  logoHeight: theme.typography.body3.lineHeight,
  logoPadding: theme.spacer.lg,
  subtitleTextStyle: theme.typography.body3,
  titleTextStyle: { ...theme.typography.headline1, maxLines: 1 },
  marqueeSync: true,
  alpha: theme.alpha.primary
});

export const mode = theme => ({
  disabled: {
    subtitleTextStyle: { textColor: theme.color.textNeutralDisabled },
    alpha: theme.alpha.inactive
  }
});

export const palette = theme => ({
  neutral: {
    titleTextStyle: { textColor: theme.color.textNeutral },
    subtitleTextStyle: { textColor: theme.color.textNeutral },
    descriptionTextStyle: { textColor: theme.color.textNeutralSecondary },
    mode: {
      disabled: {
        titleTextStyle: { textColor: theme.color.textNeutralDisabled },
        subtitleTextStyle: { textColor: theme.color.textNeutralDisabled },
        descriptionTextStyle: {
          textColor: theme.color.textNeutralDisabled
        }
      }
    }
  },
  inverse: {
    titleTextStyle: { textColor: theme.color.textInverse },
    subtitleTextStyle: { textColor: theme.color.textInverse },
    descriptionTextStyle: { textColor: theme.color.textInverseSecondary },
    mode: {
      disabled: {
        titleTextStyle: { textColor: theme.color.textNeutralDisabled },
        subtitleTextStyle: { textColor: theme.color.textNeutralDisabled },
        descriptionTextStyle: {
          textColor: theme.color.textNeutralDisabled
        }
      }
    }
  },
  brand: {
    titleTextStyle: { textColor: theme.color.textNeutral },
    subtitleTextStyle: { textColor: theme.color.textNeutral },
    descriptionTextStyle: { textColor: theme.color.textNeutralSecondary },
    mode: {
      disabled: {
        titleTextStyle: { textColor: theme.color.textNeutralDisabled },
        subtitleTextStyle: { textColor: theme.color.textNeutralDisabled },
        descriptionTextStyle: {
          textColor: theme.color.textNeutralDisabled
        }
      }
    }
  }
});
