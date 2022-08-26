export const base = theme => ({
  w: theme.spacer.xxl * 12,
  h: theme.spacer.xxl * 3,
  titleStyle: theme.typography.headline3,
  descriptionStyle: theme.typography.body3,
  prefixStyle: {
    w: theme.spacer.xxl,
    h: theme.spacer.xxl
  }
});

export const mode = theme => ({
  unfocused: {
    titleColor: theme.colors.coreNeutral,
    descriptionColor: theme.colors.coreNeutral
  },
  disabled: {
    titleColor: theme.colors.coreNeutralDisabled,
    descriptionColor: theme.colors.coreNeutralDisabled
  }
});

export const palette = theme => ({
  neutral: {
    mode: {
      focused: {
        titleColor: theme.colors.coreInverse,
        descriptionColor: theme.colors.coreInverse
      }
    }
  },
  inverse: {
    mode: {
      focused: {
        titleColor: theme.colors.coreNeutral,
        descriptionColor: theme.colors.coreNeutral
      }
    }
  },
  brand: {
    mode: {
      focused: {
        titleColor: theme.colors.coreNeutral,
        descriptionColor: theme.colors.coreNeutral
      }
    }
  }
});
