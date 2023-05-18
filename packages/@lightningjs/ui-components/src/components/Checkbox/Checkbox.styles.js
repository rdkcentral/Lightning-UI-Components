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

export const base = theme => {
  const strokeWidth = theme.stroke.sm;
  const size = theme.spacer.xxl - strokeWidth * 2;
  return {
    alpha: 1,
    w: size,
    h: size,
    checkW: theme.spacer.lg,
    checkH: theme.spacer.md + theme.spacer.xs,
    checkSrc: theme.asset.check,
    radius: size / 2,
    strokeWidth
  };
};

export const tone = theme => ({
  neutral: {
    strokeColor: theme.color.strokeInverse,
    checkColor: theme.color.textInverse,
    backgroundColor: theme.color.fillNeutralDisabled,
    backgroundColorChecked: theme.color.fillNeutral
  },
  inverse: {
    strokeColor: theme.color.strokeNeutral,
    checkColor: theme.color.textNeutral,
    backgroundColor: theme.color.fillInverseDisabled,
    backgroundColorChecked: theme.color.fillInverse
  },
  brand: {
    strokeColor: theme.color.strokeNeutral,
    checkColor: theme.color.textNeutral,
    backgroundColor: theme.color.fillInverseDisabled,
    backgroundColorChecked: theme.color.fillBrand
  }
});

export const mode = theme => ({
  disabled: { alpha: theme.alpha.inactive }
});

export const defaultStyle = {
  alpha: 0.5,
  w: 36,
  h: 36,
  checkW: 20,
  checkH: 14,
  checkSrc:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAOCAYAAAAi2ky3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACtSURBVHgBvdPdDcIgEAfwoy8Nb45QN3AGF2s36Ahu4gpuIDoBfSgfpdoTlCbEWEMh6T8hFzjyg5AAkBHOcQe5UWqspRx435sDpMYj6IYQwwVSEiJ2MKVUBWuzLSLl2HL+uxmNCGFO8yaL7RHxve6qRZoAuS4hxac8735elWVx7jrtMKL1o0Gcat9jhExHSukN/kUIFZ7MpDRtzE1isDRkAUtDvrA8ZI597FUf8gWH9P0b4gko9wAAAABJRU5ErkJggg==',
  radius: 18,
  strokeWidth: 2,
  strokeColor: 4279769113,
  checkColor: 4279769113,
  backgroundColor: 2163800058,
  backgroundColorChecked: 4294506490
};

export const schema = {
  type: 'object',
  properties: {
    alpha: {
      type: 'number'
    },
    w: {
      type: 'number'
    },
    h: {
      type: 'number'
    },
    checkW: {
      type: 'number'
    },
    checkH: {
      type: 'number'
    },
    checkSrc: {
      type: 'string'
    },
    radius: {
      type: 'number'
    },
    strokeWidth: {
      type: 'number'
    },
    strokeColor: {
      type: 'number'
    },
    checkColor: {
      type: 'number'
    },
    backgroundColor: {
      type: 'number'
    },
    backgroundColorChecked: {
      type: 'number'
    }
  }
};
