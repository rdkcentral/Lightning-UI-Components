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
    titleColor: theme.color.fillNeutral,
    descriptionColor: theme.color.fillNeutral
  },
  disabled: {
    titleColor: theme.color.fillNeutralDisabled,
    descriptionColor: theme.color.fillNeutralDisabled
  }
});

export const palette = theme => ({
  neutral: {
    mode: {
      focused: {
        titleColor: theme.color.fillInverse,
        descriptionColor: theme.color.fillInverse
      }
    }
  },
  inverse: {
    mode: {
      focused: {
        titleColor: theme.color.fillNeutral,
        descriptionColor: theme.color.fillNeutral
      }
    }
  },
  brand: {
    mode: {
      focused: {
        titleColor: theme.color.fillNeutral,
        descriptionColor: theme.color.fillNeutral
      }
    }
  }
});
