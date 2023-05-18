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
  descriptionTextStyle: { ...theme.typography.body2, maxLines: 1 },
  fadeWidth: theme.layout.gutterX.lg,
  logoWidth: theme.typography.body3.lineHeight,
  logoHeight: theme.typography.body3.lineHeight,
  logoPadding: theme.spacer.lg,
  subtitleTextStyle: theme.typography.body3,
  titleTextStyle: { ...theme.typography.headline1, maxLines: 1 },
  marqueeSync: true,
  alpha: theme.alpha.primary
});

export const mode = theme => ({
  disabled: {
    subtitleTextStyle: { textColor: theme.color.textNeutralDisabled },
    alpha: theme.alpha.inactive
  }
});

export const tone = theme => ({
  neutral: {
    titleTextStyle: { textColor: theme.color.textNeutral },
    subtitleTextStyle: { textColor: theme.color.textNeutral },
    descriptionTextStyle: { textColor: theme.color.textNeutralSecondary },
    mode: {
      disabled: {
        titleTextStyle: { textColor: theme.color.textNeutralDisabled },
        subtitleTextStyle: { textColor: theme.color.textNeutralDisabled },
        descriptionTextStyle: {
          textColor: theme.color.textNeutralDisabled
        }
      }
    }
  },
  inverse: {
    titleTextStyle: { textColor: theme.color.textInverse },
    subtitleTextStyle: { textColor: theme.color.textInverse },
    descriptionTextStyle: { textColor: theme.color.textInverseSecondary },
    mode: {
      disabled: {
        titleTextStyle: { textColor: theme.color.textNeutralDisabled },
        subtitleTextStyle: { textColor: theme.color.textNeutralDisabled },
        descriptionTextStyle: {
          textColor: theme.color.textNeutralDisabled
        }
      }
    }
  },
  brand: {
    titleTextStyle: { textColor: theme.color.textNeutral },
    subtitleTextStyle: { textColor: theme.color.textNeutral },
    descriptionTextStyle: { textColor: theme.color.textNeutralSecondary },
    mode: {
      disabled: {
        titleTextStyle: { textColor: theme.color.textNeutralDisabled },
        subtitleTextStyle: { textColor: theme.color.textNeutralDisabled },
        descriptionTextStyle: {
          textColor: theme.color.textNeutralDisabled
        }
      }
    }
  }
});

export const defaultStyle = {
  descriptionTextStyle: {
    fontSize: 22,
    fontWeight: 300,
    lineHeight: 32,
    verticalAlign: 'middle',
    textBaseline: 'bottom',
    fontFace: 'Arial',
    maxLines: 1,
    textColor: 3019438074
  },
  fadeWidth: 80,
  logoWidth: 32,
  logoHeight: 32,
  logoPadding: 20,
  subtitleTextStyle: {
    fontSize: 20,
    fontWeight: 300,
    lineHeight: 32,
    verticalAlign: 'middle',
    textBaseline: 'bottom',
    fontFace: 'Arial',
    textColor: 4294506490
  },
  titleTextStyle: {
    fontSize: 35,
    fontWeight: 500,
    lineHeight: 48,
    verticalAlign: 'middle',
    textBaseline: 'bottom',
    fontFace: 'Arial',
    maxLines: 1,
    textColor: 4294506490
  },
  marqueeSync: true,
  alpha: 0.5,
  mode: {
    disabled: {
      titleTextStyle: {
        textColor: 2163800058
      },
      subtitleTextStyle: {
        textColor: 2163800058
      },
      descriptionTextStyle: {
        textColor: 2163800058
      }
    }
  }
};

export const schema = {
  type: 'object',
  properties: {
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
    fadeWidth: {
      type: 'number'
    },
    logoWidth: {
      type: 'number'
    },
    logoHeight: {
      type: 'number'
    },
    logoPadding: {
      type: 'number'
    },
    subtitleTextStyle: {
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
        textColor: {
          type: 'number'
        }
      }
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
    marqueeSync: {
      type: 'boolean'
    },
    alpha: {
      type: 'number'
    },
    mode: {
      type: 'object',
      properties: {
        disabled: {
          type: 'object',
          properties: {
            titleTextStyle: {
              type: 'object',
              properties: {
                textColor: {
                  type: 'number'
                }
              }
            },
            subtitleTextStyle: {
              type: 'object',
              properties: {
                textColor: {
                  type: 'number'
                }
              }
            },
            descriptionTextStyle: {
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
