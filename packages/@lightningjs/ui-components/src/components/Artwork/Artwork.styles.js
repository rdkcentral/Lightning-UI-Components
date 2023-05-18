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
  animationBlurEntrance: theme.animation.utilityEntrance,
  animationBlurExit: theme.animation.utilityExit,
  animationComponentEntrance: theme.animation.utilityEntrance,
  animationGradientEntrance: theme.animation.utilityEntrance,
  animationGradientExit: theme.animation.utilityExit,
  animationImageScaleEntrance: theme.animation.standardEntrance,
  animationImageScaleExit: theme.animation.standardEntrance,
  blur: 4,
  centerImageRadius: theme.radius.md,
  fallbackSrc: undefined,
  fillColor: theme.color.material,
  gradientColor: theme.color.material,
  imageScale: undefined,
  imageScalePivotX: 0.5,
  imageScalePivotY: 0.5,
  padding: theme.spacer.md,
  radius: 0,
  zIndexSet: {
    image: 1,
    blur: 2,
    centerImage: 3,
    fill: 4,
    gradient: 5,
    foreground: 6
  }
});

export const defaultStyle = {
  animationBlurEntrance: {
    timingFunction: 'cubic-bezier(0, 0, 1, 1)',
    delay: 0,
    duration: 0.25
  },
  animationBlurExit: {
    timingFunction: 'cubic-bezier(0, 0, 1, 1)',
    delay: 0,
    duration: 0.25
  },
  animationComponentEntrance: {
    timingFunction: 'cubic-bezier(0, 0, 1, 1)',
    delay: 0,
    duration: 0.25
  },
  animationGradientEntrance: {
    timingFunction: 'cubic-bezier(0, 0, 1, 1)',
    delay: 0,
    duration: 0.25
  },
  animationGradientExit: {
    timingFunction: 'cubic-bezier(0, 0, 1, 1)',
    delay: 0,
    duration: 0.25
  },
  animationImageScaleEntrance: {
    timingFunction: 'cubic-bezier(0, 0, 1, 1)',
    delay: 0,
    duration: 0.25
  },
  animationImageScaleExit: {
    timingFunction: 'cubic-bezier(0, 0, 1, 1)',
    delay: 0,
    duration: 0.25
  },
  blur: 4,
  centerImageRadius: 0,
  fillColor: 4279769113,
  gradientColor: 4279769113,
  imageScalePivotX: 0.5,
  imageScalePivotY: 0.5,
  padding: 10,
  radius: 0,
  zIndexSet: {
    image: 1,
    blur: 2,
    centerImage: 3,
    fill: 4,
    gradient: 5,
    foreground: 6
  }
};

export const schema = {
  type: 'object',
  properties: {
    animationBlurEntrance: {
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
    animationBlurExit: {
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
    animationComponentEntrance: {
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
    animationGradientEntrance: {
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
    animationGradientExit: {
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
    animationImageScaleEntrance: {
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
    animationImageScaleExit: {
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
    blur: {
      type: 'number'
    },
    centerImageRadius: {
      type: 'number'
    },
    fallbackSrc: {
      type: 'null'
    },
    fillColor: {
      type: 'number'
    },
    gradientColor: {
      type: 'number'
    },
    imageScale: {
      type: 'null'
    },
    imageScalePivotX: {
      type: 'number'
    },
    imageScalePivotY: {
      type: 'number'
    },
    padding: {
      type: 'number'
    },
    radius: {
      type: 'number'
    },
    zIndexSet: {
      type: 'object',
      properties: {
        image: {
          type: 'number'
        },
        blur: {
          type: 'number'
        },
        centerImage: {
          type: 'number'
        },
        fill: {
          type: 'number'
        },
        gradient: {
          type: 'number'
        },
        foreground: {
          type: 'number'
        }
      }
    }
  }
};
