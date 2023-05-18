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

import { base as scrollWrapperBase } from './ScrollWrapper.styles.js';

export const base = theme => {
  const { scroll } = scrollWrapperBase(theme);
  return {
    progressBar: { animation: scroll },
    circleAnimation: scroll
  };
};

export const defaultStyle = {
  progressBar: {
    animation: {
      timingFunction: 'linear',
      duration: 0.1
    }
  },
  circleAnimation: {
    timingFunction: 'linear',
    duration: 0.1
  }
};

export const schema = {
  type: 'object',
  properties: {
    progressBar: {
      type: 'object',
      properties: {
        animation: {
          type: 'object',
          properties: {
            timingFunction: {
              type: 'string'
            },
            duration: {
              type: 'number'
            }
          }
        }
      }
    },
    circleAnimation: {
      type: 'object',
      properties: {
        timingFunction: {
          type: 'string'
        },
        duration: {
          type: 'number'
        }
      }
    }
  }
};
