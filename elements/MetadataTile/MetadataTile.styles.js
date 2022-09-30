export const base = theme => ({
  titleTextProperties: theme.typography.headline3,
  descriptionTextProperties: theme.typography.body3
});

export const palette = theme => ({
  neutral: {
    subtitleTextProperties: { textColor: theme.color.textNeutralSecondary },
    descriptionTextProperties: { textColor: theme.color.textNeutral },
    mode: {
      disabled: {
        subtitleTextProperties: { textColor: theme.color.textNeutralDisabled },
        descriptionTextProperties: {
          textColor: theme.color.textNeutralDisabled
        }
      }
    }
  },
  inverse: {
    subtitleTextProperties: { textColor: theme.color.textInverseSecondary },
    descriptionTextProperties: { textColor: theme.color.textInverse },
    mode: {
      disabled: {
        subtitleTextProperties: { textColor: theme.color.textNeutralDisabled },
        descriptionTextProperties: {
          textColor: theme.color.textNeutralDisabled
        }
      }
    }
  },
  brand: {
    subtitleTextProperties: { textColor: theme.color.textNeutralSecondary },
    descriptionTextProperties: { textColor: theme.color.textNeutral },
    mode: {
      disabled: {
        subtitleTextProperties: { textColor: theme.color.textNeutralDisabled },
        descriptionTextProperties: {
          textColor: theme.color.textNeutralDisabled
        }
      }
    }
  }
});
