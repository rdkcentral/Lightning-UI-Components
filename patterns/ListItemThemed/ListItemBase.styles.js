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
    titleColor: theme.color.coreNeutral,
    descriptionColor: theme.color.coreNeutral
  },
  disabled: {
    titleColor: theme.color.coreNeutralDisabled,
    descriptionColor: theme.color.coreNeutralDisabled
  }
});

export const palette = theme => ({
  neutral: {
    mode: {
      focused: {
        titleColor: theme.color.coreInverse,
        descriptionColor: theme.color.coreInverse
      }
    }
  },
  inverse: {
    mode: {
      focused: {
        titleColor: theme.color.coreNeutral,
        descriptionColor: theme.color.coreNeutral
      }
    }
  },
  brand: {
    mode: {
      focused: {
        titleColor: theme.color.coreNeutral,
        descriptionColor: theme.color.coreNeutral
      }
    }
  }
});
