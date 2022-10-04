import { getWidthByUpCount } from '../../utils';

export const base = theme => ({
  cursorStyles: {
    color: theme.color.fillInverse,
    blink: true,
    w: theme.spacer.xs,
    h: theme.spacer.xxl
  },
  eyebrowColor: theme.color.fillNeutral,
  helpTextColor: theme.color.fillNeutralSecondary,
  minWidth: getWidthByUpCount(4),
  paddingX: theme.spacer.xl,
  paddingY: theme.spacer.lg,
  suffixPadding: theme.spacer.lg,
  titleWrapperX: theme.spacer.sm,
  supportTextStyle: { ...theme.typography.caption1, maxLines: 1 }
});

export const mode = theme => ({
  focused: {
    eyebrowColor: theme.color.fillNeutral,
    helpTextColor: theme.color.fillNeutralSecondary
  },
  disabled: {
    eyebrowColor: theme.color.fillNeutralDisabled,
    helpTextColor: theme.color.fillNeutralDisabled
  }
});

export const palette = theme => ({
  inverse: {
    mode: {
      focused: {
        eyebrowColor: theme.color.fillNeutral,
        helpTextColor: theme.color.fillNeutral
      }
    }
  },
  brand: {
    mode: {
      focused: {
        eyebrowColor: theme.color.coreNeutral,
        helpTextColor: theme.color.coreNeutral
      }
    }
  }
});
