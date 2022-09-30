export const base = theme => ({
  titleTextProperties: theme.typography.headline3,
  descriptionTextProperties: theme.typography.body3
});

export const palette = theme => ({
  neutral: {
    subtitleTextProperties: {
      textColor: theme.color.coreNeutralSecondary
    },
    descriptionTextProperties: {
      textColor: theme.color.coreNeutral
    }
  },
  inverse: {
    subtitleTextProperties: {
      textColor: theme.color.coreInverseSecondary
    },
    descriptionTextProperties: {
      textColor: theme.color.coreInverse
    }
  },
  brand: {
    subtitleTextProperties: {
      textColor: theme.color.coreNeutralSecondary
    },
    descriptionTextProperties: {
      textColor: theme.color.coreNeutral
    }
  }
});
