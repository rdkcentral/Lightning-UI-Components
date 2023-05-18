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
  textStyle: theme.typography.body2,
  fadeHeight: 100,
  scroll: {
    timingFunction: 'linear',
    duration: theme.animation.duration.xfast
  },
  contentMarginTop: theme.spacer.md,
  contentMarginLeft: theme.spacer.xl,
  sliderMarginLeft: theme.spacer.lg + theme.spacer.xxs
});

export const defaultStyle = {
  textStyle: {
    fontSize: 22,
    fontWeight: 300,
    lineHeight: 32,
    verticalAlign: 'middle',
    textBaseline: 'bottom',
    fontFace: 'Arial'
  },
  fadeHeight: 100,
  scroll: {
    timingFunction: 'linear',
    duration: 0.1
  },
  contentMarginTop: 10,
  contentMarginLeft: 30,
  sliderMarginLeft: 22
};

export const schema = {
  type: 'object',
  properties: {
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
    fadeHeight: {
      type: 'number'
    },
    scroll: {
      type: 'object',
      properties: {
        timingFunction: {
          type: 'string'
        },
        duration: {
          type: 'number'
        }
      }
    },
    contentMarginTop: {
      type: 'number'
    },
    contentMarginLeft: {
      type: 'number'
    },
    sliderMarginLeft: {
      type: 'number'
    }
  }
};
