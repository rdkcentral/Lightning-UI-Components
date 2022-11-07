import { utils } from '@lightning/ui-core';

export const base = theme => ({
  w: utils.getWidthByColumnSpan(theme, 4),
  backgroundColor: theme.color.material,
  iconStyles: {},
  logoStyles: {
    radius: theme.spacer.md,
    w: theme.spacer.xxl * 2,
    h: theme.spacer.xxl * 2
  },
  iconOnlyMarginX: theme.spacer.lg,
  marginX: theme.spacer.xl,
  marginY: theme.spacer.sm * 2,
  iconSize: theme.spacer.xxl * 2,
  iconMarginTop: theme.spacer.xs,
  iconMarginRight: theme.spacer.lg,
  titleTextStyle: {
    ...theme.typography.headline3,
    textColor: theme.color.textNeutral
  },
  descriptionTextStyle: {
    ...theme.typography.body3,
    textColor: theme.color.textNeutralSecondary
  },
  actionAreaMarginTop: theme.spacer.xl,
  actionAreaTextStyle: {
    ...theme.typography.body3,
    textColor: theme.color.textNeutral
  },
  enterAlpha: theme.alpha.primary,
  enterScale: 1,
  dismissAlpha: 0.001,
  dismissScale: 0.4,
  step1Animation: {
    duration: theme.animation.duration.fast,
    delay: theme.animation.delay.none
  },
  step2Animation: {
    duration: theme.animation.duration.xfast,
    delay: theme.animation.delay.xslow * 2
  },
  step2TextEnterAnimation: {
    duration: theme.animation.duration.xfast,
    delay: theme.animation.delay.xslow * 4
  },
  step2TextExitAnimation: {
    duration: theme.animation.duration.xfast,
    delay: theme.animation.delay.none
  },
  step3Animation: {
    duration: theme.animation.duration.xfast,
    delay: theme.animation.delay.xslow * 5
  }
});

export const mode = theme => ({
  disabled: {
    backgroundColor: theme.color.material
  }
});

export const palette = theme => ({
  neutral: {
    mode: {
      focused: {
        backgroundColor: theme.color.material
      }
    }
  },
  inverse: {
    mode: {
      focused: {
        backgroundColor: theme.color.material
      }
    }
  },
  brand: {
    mode: {
      focused: {
        backgroundColor: theme.color.material
      }
    }
  }
});
