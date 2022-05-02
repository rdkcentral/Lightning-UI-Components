const durations = {
  durationNone: 0,
  durationXFast: 0.1,
  durationFast: 0.25,
  durationNormal: 0.5,
  durationSlow: 0.75,
  durationXSlow: 0.9
};

const delays = {
  delayNone: 0,
  delayXFast: 0.01,
  delayFast: 0.025,
  delayNormal: 0.05,
  delaySlow: 0.075,
  delayXSlow: 0.09
};

export default {
  ...durations,
  ...delays,
  emphasizedEntrance: 'cubic-bezier(0, 0, 1, 1)',
  emphasizedEntranceDelay: delays.delayNone,
  emphasizedEntranceDuration: durations.durationFast,
  emphasizedExit: 'cubic-bezier(0, 0, 1, 1)',
  emphasizedExitDelay: delays.delayNone,
  emphasizedExitDuration: durations.durationFast,
  emphasizedStandard: 'cubic-bezier(0, 0, 1, 1)',
  emphasizedStandardDelay: delays.delayNone,
  emphasizedStandardDuration: durations.durationFast,
  expressiveEntrance: 'cubic-bezier(0, 0, 1, 1)',
  expressiveEntranceDelay: delays.delayNone,
  expressiveEntranceDuration: durations.durationFast,
  expressiveExit: 'cubic-bezier(0, 0, 1, 1)',
  expressiveExitDelay: delays.delayNone,
  expressiveExitDuration: durations.durationFast,
  expressiveStandard: 'cubic-bezier(0, 0, 1, 1)',
  expressiveStandardDelay: delays.delayNone,
  expressiveStandardDuration: durations.durationFast,
  functionalEntrance: 'cubic-bezier(0, 0, 1, 1)',
  functionalEntranceDelay: delays.delayNone,
  functionalEntranceDuration: durations.durationFast,
  functionalExit: 'cubic-bezier(0, 0, 1, 1)',
  functionalExitDelay: delays.delayNone,
  functionalExitDuration: durations.durationFast,
  functionalStandard: 'cubic-bezier(0, 0, 1, 1)',
  functionalStandardDelay: delays.delayNone,
  functionalStandardDuration: durations.durationFast
};
