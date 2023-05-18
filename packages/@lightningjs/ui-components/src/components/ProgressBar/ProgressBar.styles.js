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
  h: theme.spacer.md,
  animation: theme.animation.utility,
  radius: theme.radius.xs
});

export const tone = theme => ({
  neutral: {
    barColor: theme.color.fillNeutralTertiary,
    progressColor: theme.color.fillNeutral
  },
  inverse: {
    barColor: theme.color.fillInverseTertiary,
    progressColor: theme.color.fillInverse
  },
  brand: {
    barColor: theme.color.fillBrandTertiary,
    progressColor: theme.color.fillBrand
  }
});

export const defaultStyle = {
  h: 10,
  animation: {
    timingFunction: 'cubic-bezier(0, 0, 1, 1)',
    delay: 0,
    duration: 0.25
  },
  radius: 0,
  barColor: 452524026,
  progressColor: 4294506490
};

export const schema = {
  type: 'object',
  properties: {
    h: {
      type: 'number'
    },
    animation: {
      type: 'object',
      properties: {
        timingFunction: {
          type: 'string'
        },
        delay: {
          type: 'number'
        },
        duration: {
          type: 'number'
        }
      }
    },
    radius: {
      type: 'number'
    },
    barColor: {
      type: 'number'
    },
    progressColor: {
      type: 'number'
    }
  }
};
