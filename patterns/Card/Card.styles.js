import { getWidthByUpCount } from '../../utils';

export const base = theme => ({
  paddingHorizontal: theme.spacer.xl,
  paddingVertical: theme.spacer.xl,
  radius: theme.radius.md,
  titleTextStyle: {
    ...theme.typography.headline1,
    wordWrapTrue: true,
    maxLines: 2,
    textColor: theme.color.textNeutral
  },
  w: getWidthByUpCount(6)
});

export const mode = theme => ({
  disabled: {
    backgroundColor: theme.color.fillInverseDisabled,
    titleTextStyle: { textColor: theme.color.textNeutralDisabled }
  }
});

export const palette = theme => ({
  neutral: {
    mode: {
      focused: {
        backgroundColor: theme.color.interactiveNeutralFocusSoft
      }
    }
  },
  inverse: {
    mode: {
      focused: {
        backgroundColor: theme.color.interactiveInverseFocusSoft
      }
    }
  },
  brand: {
    mode: {
      focused: {
        backgroundColor: theme.color.interactiveBrandFocusSoft
      }
    }
  }
});
