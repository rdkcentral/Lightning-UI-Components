/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

export const base = theme => ({
  animationEntrance: theme.animation.standardEntrance,
  animationExit: theme.animation.standardEntrance,
  paddingX: theme.spacer.xl,
  paddingY: theme.spacer.lg,
  paddingYProgress: theme.spacer.lg + theme.spacer.xs,
  radius: theme.radius.md,
  alpha: 1
});

export const tone = theme => ({
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

export const mode = theme => ({
  disabled: {
    alpha: theme.alpha.inactive
  }
});

export const defaultStyle = {
  animationEntrance: {
    timingFunction: 'cubic-bezier(0, 0, 1, 1)',
    delay: 0,
    duration: 0.25
  },
  animationExit: {
    timingFunction: 'cubic-bezier(0, 0, 1, 1)',
    delay: 0,
    duration: 0.25
  },
  paddingX: 30,
  paddingY: 20,
  paddingYProgress: 24,
  radius: 0,
  alpha: 0.5,
  mode: {
    focused: {
      backgroundColor: 452984831
    }
  }
};

export const schema = {
  type: 'object',
  properties: {
    animationEntrance: {
      type: 'object',
      properties: {
        timingFunction: {
          type: 'string'
        },
        delay: {
          type: 'number'
        },
        duration: {
          type: 'number'
        }
      }
    },
    animationExit: {
      type: 'object',
      properties: {
        timingFunction: {
          type: 'string'
        },
        delay: {
          type: 'number'
        },
        duration: {
          type: 'number'
        }
      }
    },
    paddingX: {
      type: 'number'
    },
    paddingY: {
      type: 'number'
    },
    paddingYProgress: {
      type: 'number'
    },
    radius: {
      type: 'number'
    },
    alpha: {
      type: 'number'
    },
    mode: {
      type: 'object',
      properties: {
        focused: {
          type: 'object',
          properties: {
            backgroundColor: {
              type: 'number'
            }
          }
        }
      }
    }
  }
};
