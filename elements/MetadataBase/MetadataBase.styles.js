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
    titleTextProperties: {
      textColor: theme.color.coreNeutral
    },
    subtitleTextProperties: {
      textColor: theme.color.coreNeutral
    },
    descriptionTextProperties: {
      textColor: theme.color.coreNeutralSecondary
    }
  },
  inverse: {
    titleTextProperties: {
      textColor: theme.color.coreInverse
    },
    subtitleTextProperties: {
      textColor: theme.color.coreInverse
    },
    descriptionTextProperties: {
      textColor: theme.color.coreInverseSecondary
    }
  },
  brand: {
    titleTextProperties: {
      textColor: theme.color.coreNeutral
    },
    subtitleTextProperties: {
      textColor: theme.color.coreNeutral
    },
    descriptionTextProperties: {
      textColor: theme.color.coreNeutralSecondary
    }
  }
});
