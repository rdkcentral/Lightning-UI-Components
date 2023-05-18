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

export const base = () => {
  return {
    showArrows: false,
    showKnob: false
  };
};

export const mode = () => ({
  focused: {
    showArrows: true
  }
});

export const tone = theme => ({
  neutral: {
    mode: {
      focused: {
        arrowColor: theme.color.fillInverse,
        progressBar: {
          barColor: theme.color.fillInverseTertiary,
          progressColor: theme.color.fillInverse
        }
      }
    }
  },
  inverse: {
    mode: {
      focused: {
        arrowColor: theme.color.fillNeutral,
        progressBar: {
          barColor: theme.color.fillNeutralTertiary,
          progressColor: theme.color.fillNeutral
        }
      }
    }
  },
  brand: {
    mode: {
      focused: {
        arrowColor: theme.color.fillInverse,
        progressBar: {
          barColor: theme.color.fillBrandTertiary,
          progressColor: theme.color.fillBrand
        }
      }
    }
  }
});

export const defaultStyle = {
  showArrows: true,
  showKnob: false,
  mode: {
    focused: {
      arrowColor: 4279769113,
      progressBar: {
        barColor: 437786649,
        progressColor: 4279769113
      }
    }
  }
};

export const schema = {
  type: 'object',
  properties: {
    showArrows: {
      type: 'boolean'
    },
    showKnob: {
      type: 'boolean'
    },
    mode: {
      type: 'object',
      properties: {
        focused: {
          type: 'object',
          properties: {
            arrowColor: {
              type: 'number'
            },
            progressBar: {
              type: 'object',
              properties: {
                barColor: {
                  type: 'number'
                },
                progressColor: {
                  type: 'number'
                }
              }
            }
          }
        }
      }
    }
  }
};
