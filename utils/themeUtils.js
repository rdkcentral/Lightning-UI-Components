import context from '../context';

export const getTheme = (prev = {}, next = {}) => {
  return {
    ...prev,
    ...next,
    focus: {
      ...prev.focus,
      ...next.focus
    },
    unfocus: {
      ...prev.unfocus,
      ...next.unfocus
    }
  };
};

/**
 * @param {string} timingFunction - Target timing function in theme
 * @param {string} duration - Target duration in theme, will fallback and attempt to use named duration value connected to to timing function if not defined
 * @param {string} delay - Target delay in theme, will fallback and attempt to use named delay value connected to to timing function if not defined
 * @return {object} -Object containing timingFunction, duration, and delay
 */
export function getThemeAnimation(timingFunction, duration, delay) {
  return {
    timingFunction: context.theme.animations[timingFunction],
    duration: duration
      ? context.theme.animations[
          `duration${duration[0].toUpperCase() + duration.substring(1)}`
        ]
      : context.theme.animations[`${timingFunction}Duration`],
    delay: delay
      ? context.theme.animations[
          `delay${delay[0].toUpperCase() + delay.substring(1)}`
        ]
      : context.theme.animations[`${timingFunction}Delay`]
  };
}
