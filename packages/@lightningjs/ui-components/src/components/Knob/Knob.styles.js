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
  const size = theme.spacer.lg;
  return {
    w: size,
    h: size,
    radius: size / 2
  };
};

export const tone = theme => ({
  neutral: {
    circleColor: theme.color.interactiveNeutralFocus,
    mode: {
      disabled: {
        circleColor: theme.color.fillNeutralDisabled
      }
    }
  },
  inverse: {
    circleColor: theme.color.interactiveInverseFocus,
    mode: {
      disabled: {
        circleColor: theme.color.fillInverseDisabled
      }
    }
  },
  brand: {
    circleColor: theme.color.interactiveBrandFocus,
    mode: {
      disabled: {
        circleColor: theme.color.fillInverseDisabled
      }
    }
  }
});

export const defaultStyle = {
  w: 20,
  h: 20,
  radius: 10,
  circleColor: 4294967295,
  mode: {
    disabled: {
      circleColor: 2163800058
    }
  }
};

export const schema = {
  type: 'object',
  properties: {
    w: {
      type: 'number'
    },
    h: {
      type: 'number'
    },
    radius: {
      type: 'number'
    },
    circleColor: {
      type: 'number'
    },
    mode: {
      type: 'object',
      properties: {
        disabled: {
          type: 'object',
          properties: {
            circleColor: {
              type: 'number'
            }
          }
        }
      }
    }
  }
};
