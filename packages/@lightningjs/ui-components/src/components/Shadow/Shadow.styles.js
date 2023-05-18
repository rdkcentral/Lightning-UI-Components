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
  alpha: 0,
  animation: theme.animation.standardEntrance,
  blur: theme.spacer.xxl,
  color: theme.color.shadowNeutralFocus,
  offsetX: 0,
  offsetY: theme.spacer.lg,
  radius: theme.radius.md,
  spread: theme.spacer.md * -1,

  // TODO: Need to know which offsets between the base and focus style is largest. Could refactor.
  maxOffsetY: theme.spacer.xxl,
  maxOffsetX: 0
});

export const mode = theme => ({
  // Note: styleguide implies also reducing the size of the shadow here,
  // however we currently can't gracefully animate that size change.
  // Just animating the offset and alpha gives a pretty decent effect
  focused: {
    alpha: theme.alpha.secondary,
    offsetY: theme.spacer.xxl
  }
});

export const tone = theme => ({
  neutral: {
    color: theme.color.shadowNeutralFocus
  },
  inverse: {
    color: theme.color.shadowInverseFocus
  },
  brand: {
    color: theme.color.shadowBrandFocus
  }
});

export const defaultStyle = {
  alpha: 0.7,
  animation: {
    timingFunction: 'cubic-bezier(0, 0, 1, 1)',
    delay: 0,
    duration: 0.25
  },
  blur: 40,
  color: 3003121664,
  offsetX: 0,
  offsetY: 40,
  radius: 0,
  spread: -10,
  maxOffsetY: 40,
  maxOffsetX: 0
};

export const schema = {
  type: 'object',
  properties: {
    alpha: {
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
    blur: {
      type: 'number'
    },
    color: {
      type: 'number'
    },
    offsetX: {
      type: 'number'
    },
    offsetY: {
      type: 'number'
    },
    radius: {
      type: 'number'
    },
    spread: {
      type: 'number'
    },
    maxOffsetY: {
      type: 'number'
    },
    maxOffsetX: {
      type: 'number'
    }
  }
};
