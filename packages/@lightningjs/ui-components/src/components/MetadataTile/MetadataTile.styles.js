export const base = theme => ({
  titleTextStyle: theme.typography.headline3,
  descriptionTextStyle: theme.typography.body3
});

export const tone = theme => ({
  neutral: {
    subtitleTextStyle: { textColor: theme.color.textNeutralSecondary },
    descriptionTextStyle: { textColor: theme.color.textNeutral },
    mode: {
      disabled: {
        subtitleTextStyle: { textColor: theme.color.textNeutralDisabled },
        descriptionTextStyle: {
          textColor: theme.color.textNeutralDisabled
        }
      }
    }
  },
  inverse: {
    subtitleTextStyle: { textColor: theme.color.textInverseSecondary },
    descriptionTextStyle: { textColor: theme.color.textInverse },
    mode: {
      disabled: {
        subtitleTextStyle: { textColor: theme.color.textNeutralDisabled },
        descriptionTextStyle: {
          textColor: theme.color.textNeutralDisabled
        }
      }
    }
  },
  brand: {
    subtitleTextStyle: { textColor: theme.color.textNeutralSecondary },
    descriptionTextStyle: { textColor: theme.color.textNeutral },
    mode: {
      disabled: {
        subtitleTextStyle: { textColor: theme.color.textNeutralDisabled },
        descriptionTextStyle: {
          textColor: theme.color.textNeutralDisabled
        }
      }
    }
  }
});
