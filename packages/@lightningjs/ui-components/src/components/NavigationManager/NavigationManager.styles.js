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
  alwaysScroll: false,
  itemSpacing: theme.layout.gutterX.xs,
  itemTransition: theme.animation.utility,
  neverScroll: false,
  scrollIndex: 0
});

export const defaultStyle = {
  alwaysScroll: false,
  itemSpacing: 20,
  itemTransition: {
    timingFunction: 'cubic-bezier(0, 0, 1, 1)',
    delay: 0,
    duration: 0.25
  },
  neverScroll: false,
  scrollIndex: 0
};

export const schema = {
  type: 'object',
  properties: {
    alwaysScroll: {
      type: 'boolean'
    },
    itemSpacing: {
      type: 'number'
    },
    itemTransition: {
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
    neverScroll: {
      type: 'boolean'
    },
    scrollIndex: {
      type: 'number'
    }
  }
};
