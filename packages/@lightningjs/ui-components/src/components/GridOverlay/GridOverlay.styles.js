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
  propertyTextStyle: {
    ...theme.typography.headline1,
    textColor: theme.color.textNeutral
  },
  valueTextStyle: {
    ...theme.typography.body1,
    textColor: theme.color.textNeutral
  }
});

export const defaultStyle = {
  propertyTextStyle: {
    fontSize: 35,
    fontWeight: 500,
    lineHeight: 48,
    verticalAlign: 'middle',
    textBaseline: 'bottom',
    fontFace: 'Arial',
    textColor: 4294506490
  },
  valueTextStyle: {
    fontSize: 25,
    fontWeight: 300,
    lineHeight: 40,
    verticalAlign: 'middle',
    textBaseline: 'bottom',
    fontFace: 'Arial',
    textColor: 4294506490
  }
};

export const schema = {
  type: 'object',
  properties: {
    propertyTextStyle: {
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
        },
        textColor: {
          type: 'number'
        }
      }
    },
    valueTextStyle: {
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
        },
        textColor: {
          type: 'number'
        }
      }
    }
  }
};
