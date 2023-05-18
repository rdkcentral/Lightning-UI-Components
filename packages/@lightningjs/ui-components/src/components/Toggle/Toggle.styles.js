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
  h: theme.spacer.xxl,
  knobWidth: theme.spacer.xl,
  knobHeight: theme.spacer.xl,
  knobRadius: theme.radius.sm + theme.radius.xs,
  knobPadding: theme.spacer.xxs,
  knobX: theme.spacer.xs,
  knobXChecked: theme.spacer.xxl + theme.spacer.xs,
  strokeRadius: theme.radius.md,
  strokeWeight: theme.stroke.sm,
  w: theme.spacer.xxl * 2
});

export const tone = theme => ({
  neutral: {
    strokeColor: theme.color.fillInverse,
    backgroundColor: theme.color.fillNeutralDisabled,
    backgroundColorChecked: theme.color.fillNeutral,
    knobColor: theme.color.fillInverse,
    knobColorChecked: theme.color.fillInverse,
    mode: {
      disabled: {
        strokeColor: theme.color.fillInverseDisabled,
        backgroundColor: theme.color.fillNeutralDisabled,
        backgroundColorChecked: theme.color.fillNeutralDisabled,
        knobColor: theme.color.fillInverseDisabled,
        knobColorChecked: theme.color.fillInverseDisabled
      }
    }
  },
  inverse: {
    strokeColor: theme.color.fillNeutral,
    backgroundColor: theme.color.fillInverseDisabled,
    backgroundColorChecked: theme.color.fillInverse,
    knobColor: theme.color.fillNeutral,
    knobColorChecked: theme.color.fillNeutral,
    mode: {
      disabled: {
        strokeColor: theme.color.fillInverseDisabled,
        backgroundColor: theme.color.fillNeutralDisabled,
        backgroundColorChecked: theme.color.fillNeutralDisabled,
        knobColor: theme.color.fillInverseDisabled,
        knobColorChecked: theme.color.fillInverseDisabled
      }
    }
  },
  brand: {
    strokeColor: theme.color.fillNeutral,
    backgroundColor: theme.color.fillInverseDisabled,
    backgroundColorChecked: theme.color.fillBrand,
    knobColor: theme.color.fillNeutral,
    knobColorChecked: theme.color.fillNeutral,
    mode: {
      disabled: {
        strokeColor: theme.color.fillNeutralDisabled,
        backgroundColor: theme.color.fillInverseDisabled,
        backgroundColorChecked: theme.color.fillInverseDisabled,
        knobColor: theme.color.fillNeutralDisabled,
        knobColorChecked: theme.color.fillNeutralDisabled
      }
    }
  }
});

export const defaultStyle = {
  h: 40,
  knobWidth: 30,
  knobHeight: 30,
  knobRadius: 0,
  knobPadding: 2,
  knobX: 4,
  knobXChecked: 44,
  strokeRadius: 0,
  strokeWeight: 2,
  w: 80,
  strokeColor: 4279769113,
  backgroundColor: 2163800058,
  backgroundColorChecked: 4294506490,
  knobColor: 4279769113,
  knobColorChecked: 4279769113,
  mode: {
    disabled: {
      strokeColor: 2149062681,
      backgroundColor: 2163800058,
      backgroundColorChecked: 2163800058,
      knobColor: 2149062681,
      knobColorChecked: 2149062681
    }
  }
};

export const schema = {
  type: 'object',
  properties: {
    h: {
      type: 'number'
    },
    knobWidth: {
      type: 'number'
    },
    knobHeight: {
      type: 'number'
    },
    knobRadius: {
      type: 'number'
    },
    knobPadding: {
      type: 'number'
    },
    knobX: {
      type: 'number'
    },
    knobXChecked: {
      type: 'number'
    },
    strokeRadius: {
      type: 'number'
    },
    strokeWeight: {
      type: 'number'
    },
    w: {
      type: 'number'
    },
    strokeColor: {
      type: 'number'
    },
    backgroundColor: {
      type: 'number'
    },
    backgroundColorChecked: {
      type: 'number'
    },
    knobColor: {
      type: 'number'
    },
    knobColorChecked: {
      type: 'number'
    },
    mode: {
      type: 'object',
      properties: {
        disabled: {
          type: 'object',
          properties: {
            strokeColor: {
              type: 'number'
            },
            backgroundColor: {
              type: 'number'
            },
            backgroundColorChecked: {
              type: 'number'
            },
            knobColor: {
              type: 'number'
            },
            knobColorChecked: {
              type: 'number'
            }
          }
        }
      }
    }
  }
};
