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
  h: theme.spacer.md * 3,
  strokeRadius: theme.radius.md * 0.75,
  strokeWeight: theme.stroke.sm,
  knobWidth: theme.spacer.lg,
  knobHeight: theme.spacer.lg,
  knobRadius: theme.radius.sm,
  knobPadding: theme.spacer.xs,
  knobXChecked: theme.spacer.xl + theme.spacer.xs,
  w: theme.spacer.md * 6
});

export const defaultStyle = {
  h: 30,
  strokeRadius: 0,
  strokeWeight: 2,
  knobWidth: 20,
  knobHeight: 20,
  knobRadius: 0,
  knobPadding: 4,
  knobXChecked: 34,
  w: 60
};

export const schema = {
  type: 'object',
  properties: {
    h: {
      type: 'number'
    },
    strokeRadius: {
      type: 'number'
    },
    strokeWeight: {
      type: 'number'
    },
    knobWidth: {
      type: 'number'
    },
    knobHeight: {
      type: 'number'
    },
    knobRadius: {
      type: 'number'
    },
    knobPadding: {
      type: 'number'
    },
    knobXChecked: {
      type: 'number'
    },
    w: {
      type: 'number'
    }
  }
};
