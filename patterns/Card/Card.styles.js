import { getWidthByUpCount } from '../../utils';

export const base = theme => ({
  paddingHorizontal: theme.spacer.xl,
  paddingVertical: theme.spacer.xl,
  radius: theme.radius.md,
  titleTextProperties: {
    ...theme.typography.headline1,
    wordWrapTrue: true,
    maxLines: 2,
    textColor: theme.colors.coreNeutral
  },
  textColor: theme.colors.coreNeutral,
  w: getWidthByUpCount(6)
});

export const mode = theme => ({
  disabled: {
    backgroundColor: theme.colors.coreInverseDisabled,
    titleTextProperties: {
      textColor: theme.colors.coreNeutralDisabled
    },
    textColor: theme.colors.coreNeutralDisabled
  }
});

export const palette = theme => ({
  neutral: {
    mode: {
      focused: {
        backgroundColor: theme.colors.interactiveNeutralFocusSoft
      }
    }
  },
  inverse: {
    mode: {
      focused: {
        backgroundColor: theme.colors.interactiveInverseFocusSoft
      }
    }
  },
  brand: {
    mode: {
      focused: {
        backgroundColor: theme.colors.interactiveBrandFocusSoft
      }
    }
  }
});
