﻿/**
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
  backgroundColor: theme.color.fillInverseSecondary,
  radius: theme.radius.md,
  animation: {}
});

export const mode = theme => ({
  focused: {
    backgroundColor: theme.color.interactiveNeutralFocus
  },
  disabled: {
    backgroundColor: theme.color.fillInverseDisabled
  }
});

export const tone = theme => ({
  inverse: {
    mode: {
      focused: {
        backgroundColor: theme.color.interactiveInverseFocus
      }
    }
  }
});

export const defaultStyle = {
  backgroundColor: 4294967295,
  radius: 0,
  animation: {},
  mode: {
    focused: {
      backgroundColor: 4282926923
    }
  }
};

export const schema = {
  type: 'object',
  properties: {
    backgroundColor: {
      type: 'number'
    },
    radius: {
      type: 'number'
    },
    animation: {
      type: 'object',
      properties: {}
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
