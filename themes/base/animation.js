const duration = {
  none: 0,
  xfast: 0.1,
  fast: 0.25,
  normal: 0.5,
  slow: 0.75,
  xslow: 0.9
};

const delay = {
  none: 0,
  xfast: 0.01,
  fast: 0.025,
  normal: 0.05,
  slow: 0.075,
  xslow: 0.09
};

export default {
  duration,
  delay,
  expressive: {
    timingFunction: 'cubic-bezier(0, 0, 1, 1)',
    delay: delay.none,
    duration: duration.fast
  },
  expressiveEntrance: {
    timingFunction: 'cubic-bezier(0, 0, 1, 1)',
    delay: delay.none,
    duration: duration.fast
  },
  expressiveExit: {
    timingFunction: 'cubic-bezier(0, 0, 1, 1)',
    delay: delay.none,
    duration: duration.fast
  },
  standard: {
    timingFunction: 'cubic-bezier(0, 0, 1, 1)',
    delay: delay.none,
    duration: duration.fast
  },
  standardEntrance: {
    timingFunction: 'cubic-bezier(0, 0, 1, 1)',
    delay: delay.none,
    duration: duration.fast
  },
  standardExit: {
    timingFunction: 'cubic-bezier(0, 0, 1, 1)',
    delay: delay.none,
    duration: duration.fast
  },
  utility: {
    timingFunction: 'cubic-bezier(0, 0, 1, 1)',
    delay: delay.none,
    duration: duration.fast
  },
  utilityEntrance: {
    timingFunction: 'cubic-bezier(0, 0, 1, 1)',
    delay: delay.none,
    duration: duration.fast
  },
  utilityExit: {
    timingFunction: 'cubic-bezier(0, 0, 1, 1)',
    delay: delay.none,
    duration: duration.fast
  }
};
