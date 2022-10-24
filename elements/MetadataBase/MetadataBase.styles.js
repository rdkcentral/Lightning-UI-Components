export const base = theme => ({
  descriptionTextProperties: theme.typography.body2,
  fadeWidth: theme.layout.gutterX.lg,
  logoWidth: theme.typography.body3.lineHeight,
  logoHeight: theme.typography.body3.lineHeight,
  logoPadding: theme.spacer.lg,
  subtitleTextProperties: theme.typography.body3,
  titleTextProperties: theme.typography.headline1
});

export const palette = theme => ({
  neutral: {
    titleTextProperties: { textColor: theme.color.textNeutral, maxLines: 1 },
    subtitleTextProperties: { textColor: theme.color.textNeutral },
    descriptionTextProperties: { textColor: theme.color.textNeutralSecondary },
    mode: {
      disabled: {
        titleTextProperties: { textColor: theme.color.textNeutralDisabled },
        subtitleTextProperties: { textColor: theme.color.textNeutralDisabled },
        descriptionTextProperties: {
          textColor: theme.color.textNeutralDisabled
        }
      }
    }
  },
  inverse: {
    titleTextProperties: { textColor: theme.color.textInverse },
    subtitleTextProperties: { textColor: theme.color.textInverse },
    descriptionTextProperties: { textColor: theme.color.textInverseSecondary },
    mode: {
      disabled: {
        titleTextProperties: { textColor: theme.color.textNeutralDisabled },
        subtitleTextProperties: { textColor: theme.color.textNeutralDisabled },
        descriptionTextProperties: {
          textColor: theme.color.textNeutralDisabled
        }
      }
    }
  },
  brand: {
    titleTextProperties: { textColor: theme.color.textNeutral },
    subtitleTextProperties: { textColor: theme.color.textNeutral },
    descriptionTextProperties: { textColor: theme.color.textNeutralSecondary },
    mode: {
      disabled: {
        titleTextProperties: { textColor: theme.color.textNeutralDisabled },
        subtitleTextProperties: { textColor: theme.color.textNeutralDisabled },
        descriptionTextProperties: {
          textColor: theme.color.textNeutralDisabled
        }
      }
    }
  }
});
