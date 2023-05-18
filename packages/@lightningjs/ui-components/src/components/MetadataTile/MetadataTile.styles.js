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
  titleTextStyle: theme.typography.headline3,
  descriptionTextStyle: theme.typography.body3
});

export const tone = theme => ({
  neutral: {
    subtitleTextStyle: { textColor: theme.color.textNeutralSecondary },
    descriptionTextStyle: { textColor: theme.color.textNeutral },
    mode: {
      disabled: {
        subtitleTextStyle: { textColor: theme.color.textNeutralDisabled },
        descriptionTextStyle: {
          textColor: theme.color.textNeutralDisabled
        }
      }
    }
  },
  inverse: {
    subtitleTextStyle: { textColor: theme.color.textInverseSecondary },
    descriptionTextStyle: { textColor: theme.color.textInverse },
    mode: {
      disabled: {
        subtitleTextStyle: { textColor: theme.color.textNeutralDisabled },
        descriptionTextStyle: {
          textColor: theme.color.textNeutralDisabled
        }
      }
    }
  },
  brand: {
    subtitleTextStyle: { textColor: theme.color.textNeutralSecondary },
    descriptionTextStyle: { textColor: theme.color.textNeutral },
    mode: {
      disabled: {
        subtitleTextStyle: { textColor: theme.color.textNeutralDisabled },
        descriptionTextStyle: {
          textColor: theme.color.textNeutralDisabled
        }
      }
    }
  }
});

export const defaultStyle = {
  titleTextStyle: {
    fontSize: 25,
    fontWeight: 500,
    lineHeight: 36,
    verticalAlign: 'middle',
    textBaseline: 'bottom',
    fontFace: 'Arial'
  },
  descriptionTextStyle: {
    fontSize: 20,
    fontWeight: 300,
    lineHeight: 32,
    verticalAlign: 'middle',
    textBaseline: 'bottom',
    fontFace: 'Arial',
    textColor: 4294506490
  },
  subtitleTextStyle: {
    textColor: 3019438074
  },
  mode: {
    disabled: {
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
        }
      }
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
    mode: {
      type: 'object',
      properties: {
        disabled: {
          type: 'object',
          properties: {
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
