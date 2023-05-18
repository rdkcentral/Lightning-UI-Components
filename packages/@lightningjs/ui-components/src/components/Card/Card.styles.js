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

import utils from '../../utils/index.js';

export const base = theme => ({
  paddingHorizontal: theme.spacer.xl,
  paddingVertical: theme.spacer.xl,
  radius: theme.radius.md,
  titleTextStyle: {
    ...theme.typography.headline1,
    wordWrap: true,
    maxLines: 2,
    textColor: theme.color.textNeutral
  },
  w: utils.getWidthByUpCount(theme, 6)
});

export const mode = theme => ({
  disabled: {
    backgroundColor: theme.color.fillInverseDisabled,
    titleTextStyle: { textColor: theme.color.textNeutralDisabled }
  }
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

export const defaultStyle = {
  paddingHorizontal: 30,
  paddingVertical: 30,
  radius: 0,
  titleTextStyle: {
    fontSize: 35,
    fontWeight: 500,
    lineHeight: 48,
    verticalAlign: 'middle',
    textBaseline: 'bottom',
    fontFace: 'Arial',
    wordWrap: true,
    maxLines: 2,
    textColor: 2163800058
  },
  w: 253.33333333333334,
  backgroundColor: 2149062681,
  mode: {
    focused: {
      backgroundColor: 452984831
    }
  }
};

export const schema = {
  type: 'object',
  properties: {
    paddingHorizontal: {
      type: 'number'
    },
    paddingVertical: {
      type: 'number'
    },
    radius: {
      type: 'number'
    },
    titleTextStyle: {
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
        wordWrap: {
          type: 'boolean'
        },
        maxLines: {
          type: 'number'
        },
        textColor: {
          type: 'number'
        }
      }
    },
    w: {
      type: 'number'
    },
    backgroundColor: {
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
