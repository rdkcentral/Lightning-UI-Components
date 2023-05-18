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
  offsetY: theme.spacer.xxs,
  offsetX: 0,
  textStyle: theme.typography.body1,
  typography: theme.typography
});

export const defaultStyle = {
  offsetY: 2,
  offsetX: 0,
  textStyle: {
    fontSize: 25,
    fontWeight: 300,
    lineHeight: 40,
    verticalAlign: 'middle',
    textBaseline: 'bottom',
    fontFace: 'Arial'
  },
  typography: {
    display1: {
      fontSize: 75,
      lineHeight: 85,
      fontWeight: 500,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      fontFace: 'Arial'
    },
    display2: {
      fontSize: 50,
      lineHeight: 60,
      fontWeight: 500,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      fontFace: 'Arial'
    },
    headline1: {
      fontSize: 35,
      fontWeight: 500,
      lineHeight: 48,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      fontFace: 'Arial'
    },
    headline2: {
      fontSize: 30,
      fontWeight: 500,
      lineHeight: 40,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      fontFace: 'Arial'
    },
    headline3: {
      fontSize: 25,
      fontWeight: 500,
      lineHeight: 36,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      fontFace: 'Arial'
    },
    body1: {
      fontSize: 25,
      fontWeight: 300,
      lineHeight: 40,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      fontFace: 'Arial'
    },
    body2: {
      fontSize: 22,
      fontWeight: 300,
      lineHeight: 32,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      fontFace: 'Arial'
    },
    body3: {
      fontSize: 20,
      fontWeight: 300,
      lineHeight: 32,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      fontFace: 'Arial'
    },
    button1: {
      fontSize: 25,
      fontWeight: 500,
      letterSpacing: -0.2,
      lineHeight: 32,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      fontFace: 'Arial'
    },
    button2: {
      fontSize: 20,
      fontWeight: 500,
      lineHeight: 32,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      fontFace: 'Arial'
    },
    callout1: {
      fontSize: 20,
      fontWeight: 500,
      letterSpacing: 1,
      lineHeight: 32,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      fontFace: 'Arial'
    },
    caption1: {
      fontSize: 15,
      fontWeight: 500,
      lineHeight: 24,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      fontFace: 'Arial'
    }
  }
};

export const schema = {
  type: 'object',
  properties: {
    offsetY: {
      type: 'number'
    },
    offsetX: {
      type: 'number'
    },
    textStyle: {
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
    typography: {
      type: 'object',
      properties: {
        display1: {
          type: 'object',
          properties: {
            fontSize: {
              type: 'number'
            },
            lineHeight: {
              type: 'number'
            },
            fontWeight: {
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
        display2: {
          type: 'object',
          properties: {
            fontSize: {
              type: 'number'
            },
            lineHeight: {
              type: 'number'
            },
            fontWeight: {
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
        headline1: {
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
        headline2: {
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
        headline3: {
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
        body1: {
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
        body2: {
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
        body3: {
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
        button1: {
          type: 'object',
          properties: {
            fontSize: {
              type: 'number'
            },
            fontWeight: {
              type: 'number'
            },
            letterSpacing: {
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
        button2: {
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
        callout1: {
          type: 'object',
          properties: {
            fontSize: {
              type: 'number'
            },
            fontWeight: {
              type: 'number'
            },
            letterSpacing: {
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
        caption1: {
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
        }
      }
    }
  }
};
