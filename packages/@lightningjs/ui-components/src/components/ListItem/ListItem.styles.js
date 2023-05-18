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
  alpha: 1,
  descriptionTextStyle: {
    ...theme.typography.body3,
    maxLines: 1,
    textColor: theme.color.textNeutralSecondary
  },
  h: theme.spacer.xxl * 3,
  logoStyle: {
    w: theme.spacer.xxl * 2,
    h: theme.spacer.xxl * 2,
    radius: theme.radius.sm
  },
  paddingX: theme.spacer.xl,
  prefixH: theme.spacer.xxxl + theme.spacer.xl,
  suffixH: theme.spacer.xxxl + theme.spacer.xl,
  titlePadding: theme.spacer.lg,
  titleTextStyle: {
    ...theme.typography.headline3,
    maxLines: 1,
    textColor: theme.color.textNeutral
  },
  w: utils.getWidthByColumnSpan(theme, 3)
});

export const mode = theme => ({
  disabled: {
    alpha: theme.alpha.inactive,
    descriptionTextStyle: { textColor: theme.color.textNeutralDisabled },
    titleTextStyle: { textColor: theme.color.textNeutralDisabled }
  },
  focused: {
    descriptionTextStyle: { textColor: theme.color.textInverseSecondary },
    titleTextStyle: { textColor: theme.color.textInverse }
  }
});

export const tone = theme => ({
  inverse: {
    mode: {
      focused: {
        descriptionTextStyle: { textColor: theme.color.textNeutral },
        titleTextStyle: { textColor: theme.color.textNeutral }
      }
    }
  }
});

export const defaultStyle = {
  alpha: 1,
  descriptionTextStyle: {
    fontSize: 20,
    fontWeight: 300,
    lineHeight: 32,
    verticalAlign: 'middle',
    textBaseline: 'bottom',
    fontFace: 'Arial',
    maxLines: 1,
    textColor: 3004700697
  },
  h: 120,
  logoStyle: {
    w: 80,
    h: 80,
    radius: 0
  },
  paddingX: 30,
  prefixH: 80,
  suffixH: 80,
  titlePadding: 20,
  titleTextStyle: {
    fontSize: 25,
    fontWeight: 500,
    lineHeight: 36,
    verticalAlign: 'middle',
    textBaseline: 'bottom',
    fontFace: 'Arial',
    maxLines: 1,
    textColor: 4279769113
  },
  w: 472,
  mode: {
    focused: {
      descriptionTextStyle: {
        textColor: 4294506490
      },
      titleTextStyle: {
        textColor: 4294506490
      }
    }
  }
};

export const schema = {
  type: 'object',
  properties: {
    alpha: {
      type: 'number'
    },
    descriptionTextStyle: {
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
    h: {
      type: 'number'
    },
    logoStyle: {
      type: 'object',
      properties: {
        w: {
          type: 'number'
        },
        h: {
          type: 'number'
        },
        radius: {
          type: 'number'
        }
      }
    },
    paddingX: {
      type: 'number'
    },
    prefixH: {
      type: 'number'
    },
    suffixH: {
      type: 'number'
    },
    titlePadding: {
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
    mode: {
      type: 'object',
      properties: {
        focused: {
          type: 'object',
          properties: {
            descriptionTextStyle: {
              type: 'object',
              properties: {
                textColor: {
                  type: 'number'
                }
              }
            },
            titleTextStyle: {
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
