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
      textColor: theme.colors.coreNeutral
    },
    subtitleTextProperties: {
      textColor: theme.colors.coreNeutral
    },
    descriptionTextProperties: {
      textColor: theme.colors.coreNeutralSecondary
    }
  },
  inverse: {
    titleTextProperties: {
      textColor: theme.colors.coreInverse
    },
    subtitleTextProperties: {
      textColor: theme.colors.coreInverse
    },
    descriptionTextProperties: {
      textColor: theme.colors.coreInverseSecondary
    }
  },
  brand: {
    titleTextProperties: {
      textColor: theme.colors.coreNeutral
    },
    subtitleTextProperties: {
      textColor: theme.colors.coreNeutral
    },
    descriptionTextProperties: {
      textColor: theme.colors.coreNeutralSecondary
    }
  }
});
