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
  paddingY: theme.spacer.md + theme.spacer.xs,
  valueTextStyle: {
    ...theme.typography.headline3,
    maxLines: 1,
    textColor: theme.color.textNeutralSecondary
  }
});

export const mode = theme => ({
  disabled: {
    valueTextStyle: { textColor: theme.color.textNeutralDisabled }
  },
  focused: {
    valueTextStyle: { textColor: theme.color.textInverseSecondary }
  }
});

export const tone = theme => ({
  neutral: {
    mode: {
      focused: {
        valueTextStyle: { textColor: theme.color.textInverseSecondary }
      }
    }
  },
  inverse: {
    mode: {
      focused: {
        valueTextStyle: { textColor: theme.color.textNeutralSecondary }
      }
    }
  },
  brand: {
    mode: {
      focused: {
        valueTextStyle: { textColor: theme.color.textInverseSecondary }
      }
    }
  }
});

export const defaultStyle = {
  paddingY: 14,
  valueTextStyle: {
    fontSize: 25,
    fontWeight: 500,
    lineHeight: 36,
    verticalAlign: 'middle',
    textBaseline: 'bottom',
    fontFace: 'Arial',
    maxLines: 1,
    textColor: 3004700697
  },
  mode: {
    focused: {
      valueTextStyle: {
        textColor: 3004700697
      }
    }
  }
};

export const schema = {
  type: 'object',
  properties: {
    paddingY: {
      type: 'number'
    },
    valueTextStyle: {
      type: 'object',
      properties: {
        fontSize: {
          type: 'number'
        },
        fontWeight: {
          type: 'number'
        },
        lineHeight: {
          type: 'number'
        },
        verticalAlign: {
          type: 'string'
        },
        textBaseline: {
          type: 'string'
        },
        fontFace: {
          type: 'string'
        },
        maxLines: {
          type: 'number'
        },
        textColor: {
          type: 'number'
        }
      }
    },
    mode: {
      type: 'object',
      properties: {
        focused: {
          type: 'object',
          properties: {
            valueTextStyle: {
              type: 'object',
              properties: {
                textColor: {
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
