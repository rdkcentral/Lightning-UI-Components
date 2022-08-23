export const base = theme => ({
  titleTextProperties: theme.typography.headline3,
  descriptionTextProperties: theme.typography.body3
});

export const palette = theme => ({
  neutral: {
    subtitleTextProperties: {
      textColor: theme.colors.coreNeutralSecondary
    },
    descriptionTextProperties: {
      textColor: theme.colors.coreNeutral
    }
  },
  inverse: {
    subtitleTextProperties: {
      textColor: theme.colors.coreInverseSecondary
    },
    descriptionTextProperties: {
      textColor: theme.colors.coreInverse
    }
  },
  brand: {
    subtitleTextProperties: {
      textColor: theme.colors.coreNeutralSecondary
    },
    descriptionTextProperties: {
      textColor: theme.colors.coreNeutral
    }
  }
});
