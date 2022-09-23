const durations = {
  none: 0,
  xfast: 0.1,
  fast: 0.25,
  normal: 0.5,
  slow: 0.75,
  xslow: 0.9
};

const delays = {
  none: 0,
  xfast: 0.01,
  fast: 0.025,
  normal: 0.05,
  slow: 0.075,
  xslow: 0.09
};

export default {
  durations,
  delays,
  expressive: {
    timingFunction: 'cubic-bezier(0, 0, 1, 1)',
    delay: delays.none,
    duration: durations.fast
  },
  expressiveEntrance: {
    timingFunction: 'cubic-bezier(0, 0, 1, 1)',
    delay: delays.none,
    duration: durations.fast
  },
  expressiveExit: {
    timingFunction: 'cubic-bezier(0, 0, 1, 1)',
    delay: delays.none,
    duration: durations.fast
  },
  standard: {
    timingFunction: 'cubic-bezier(0, 0, 1, 1)',
    delay: delays.none,
    duration: durations.fast
  },
  standardEntrance: {
    timingFunction: 'cubic-bezier(0, 0, 1, 1)',
    delay: delays.none,
    duration: durations.fast
  },
  standardExit: {
    timingFunction: 'cubic-bezier(0, 0, 1, 1)',
    delay: delays.none,
    duration: durations.fast
  },
  utility: {
    timingFunction: 'cubic-bezier(0, 0, 1, 1)',
    delay: delays.none,
    duration: durations.fast
  },
  utilityEntrance: {
    timingFunction: 'cubic-bezier(0, 0, 1, 1)',
    delay: delays.none,
    duration: durations.fast
  },
  utilityExit: {
    timingFunction: 'cubic-bezier(0, 0, 1, 1)',
    delay: delays.none,
    duration: durations.fast
  }
};
