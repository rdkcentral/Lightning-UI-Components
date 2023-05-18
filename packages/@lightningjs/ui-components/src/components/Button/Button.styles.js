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

import { getWidthByColumnSpan } from '../../utils/index.js';

export const base = theme => ({
  h: theme.spacer.md * 10,
  w: 0,
  justify: 'center',
  minWidth: getWidthByColumnSpan(theme, 3),
  paddingX: theme.spacer.xxxl,
  paddingXNoTitle: theme.spacer.xl,
  titlePadding: theme.spacer.md,
  itemSpacing: theme.spacer.md,
  textStyle: {
    ...theme.typography.button1,
    maxLines: 1,
    textColor: theme.color.textNeutral
  },
  contentColor: theme.color.fillNeutral
});

export const mode = theme => ({
  focused: {
    textStyle: { textColor: theme.color.textInverse },
    contentColor: theme.color.fillInverse
  },
  disabled: {
    textStyle: { textColor: theme.color.textNeutralDisabled },
    contentColor: theme.color.fillNeutralDisabled
  }
});

export const tone = theme => ({
  neutral: {},
  inverse: {
    mode: {
      focused: {
        textStyle: { textColor: theme.color.textNeutral },
        contentColor: theme.color.fillNeutral
      }
    }
  },
  brand: {
    mode: {
      focused: {
        contentColor: theme.color.fillNeutral
      }
    }
  }
});

export const defaultStyle = {
  h: 100,
  w: 0,
  justify: 'center',
  minWidth: 472,
  paddingX: 50,
  paddingXNoTitle: 30,
  titlePadding: 10,
  itemSpacing: 10,
  textStyle: {
    fontSize: 25,
    fontWeight: 500,
    letterSpacing: -0.2,
    lineHeight: 32,
    verticalAlign: 'middle',
    textBaseline: 'bottom',
    fontFace: 'Arial',
    maxLines: 1,
    textColor: 4279769113
  },
  contentColor: 4279769113
};

export const schema = {
  type: 'object',
  properties: {
    h: {
      type: 'number'
    },
    w: {
      type: 'number'
    },
    justify: {
      type: 'string'
    },
    minWidth: {
      type: 'number'
    },
    paddingX: {
      type: 'number'
    },
    paddingXNoTitle: {
      type: 'number'
    },
    titlePadding: {
      type: 'number'
    },
    itemSpacing: {
      type: 'number'
    },
    textStyle: {
      type: 'object',
      properties: {
        fontSize: {
          type: 'number'
        },
        fontWeight: {
          type: 'number'
        },
        letterSpacing: {
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
        maxLines: {
          type: 'number'
        },
        textColor: {
          type: 'number'
        }
      }
    },
    contentColor: {
      type: 'number'
    }
  }
};
