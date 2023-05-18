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

import { getWidthByUpCount } from '../../utils/index.js';

export const base = theme => ({
  cursorStyle: {
    textColor: theme.color.textNeutral,
    blink: true,
    w: theme.spacer.xs,
    h: theme.spacer.xxl
  },
  eyebrowTextStyle: {
    ...theme.typography.caption1,
    maxLines: 1,
    textColor: theme.color.textNeutral
  },
  helpTextStyle: {
    ...theme.typography.caption1,
    maxLines: 1,
    textColor: theme.color.textNeutralSecondary
  },
  minWidth: getWidthByUpCount(theme, 4),
  paddingX: theme.spacer.xl,
  paddingY: theme.spacer.xl
});

export const mode = theme => ({
  disabled: {
    eyebrowTextStyle: { textColor: theme.color.textNeutralDisabled },
    helpTextStyle: { textColor: theme.color.textNeutralDisabled }
  },
  focused: {
    cursorStyle: { textColor: theme.color.textInverse },
    eyebrowTextStyle: { textColor: theme.color.textNeutral },
    helpTextStyle: { textColor: theme.color.textNeutralSecondary }
  }
});

export const tone = theme => ({
  inverse: {
    mode: {
      focused: {
        eyebrowTextStyle: { textColor: theme.color.textNeutral },
        helpTextStyle: { textColor: theme.color.textNeutral }
      }
    }
  }
});

export const defaultStyle = {
  cursorStyle: {
    textColor: 4279769113,
    blink: true,
    w: 4,
    h: 40
  },
  eyebrowTextStyle: {
    fontSize: 15,
    fontWeight: 500,
    lineHeight: 24,
    verticalAlign: 'middle',
    textBaseline: 'bottom',
    fontFace: 'Arial',
    maxLines: 1,
    textColor: 4294506490
  },
  helpTextStyle: {
    fontSize: 15,
    fontWeight: 500,
    lineHeight: 24,
    verticalAlign: 'middle',
    textBaseline: 'bottom',
    fontFace: 'Arial',
    maxLines: 1,
    textColor: 3019438074
  },
  minWidth: 390,
  paddingX: 30,
  paddingY: 30,
  mode: {
    focused: {
      eyebrowTextStyle: {
        textColor: 4294506490
      },
      helpTextStyle: {
        textColor: 4294506490
      }
    }
  }
};

export const schema = {
  type: 'object',
  properties: {
    cursorStyle: {
      type: 'object',
      properties: {
        textColor: {
          type: 'number'
        },
        blink: {
          type: 'boolean'
        },
        w: {
          type: 'number'
        },
        h: {
          type: 'number'
        }
      }
    },
    eyebrowTextStyle: {
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
    helpTextStyle: {
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
    minWidth: {
      type: 'number'
    },
    paddingX: {
      type: 'number'
    },
    paddingY: {
      type: 'number'
    },
    mode: {
      type: 'object',
      properties: {
        focused: {
          type: 'object',
          properties: {
            eyebrowTextStyle: {
              type: 'object',
              properties: {
                textColor: {
                  type: 'number'
                }
              }
            },
            helpTextStyle: {
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
