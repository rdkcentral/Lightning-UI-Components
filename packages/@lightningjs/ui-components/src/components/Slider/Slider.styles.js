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

export const base = theme => {
  const size = theme.spacer.lg;
  return {
    arrowAlphaValue: 1,
    arrowAlphaValueLimit: 0.5,
    arrowHeight: theme.spacer.xxl,
    arrowSpacing: theme.spacer.md,
    arrowWidth: theme.spacer.xxl,
    arrowColor: theme.color.fillNeutral,
    containerHeight: theme.spacer.lg + theme.spacer.xs,
    iconLeftSrc: theme.asset.arrowLeft,
    iconRightSrc: theme.asset.arrowRight,
    minWidth: getWidthByColumnSpan(theme, 2),
    progressBar: {},
    w: size,
    h: size,
    radius: size / 2,
    sliderHeight: theme.spacer.md,
    showArrows: true,
    showKnob: true,
    circleAnimation: {}
  };
};

export const mode = () => ({
  disabled: {
    arrowAlphaValue: 0
  }
});

export const tone = theme => ({
  neutral: {
    arrowColor: theme.color.fillNeutral,
    circleColor: theme.color.interactiveNeutralFocus
  },
  inverse: {
    arrowColor: theme.color.fillInverse,
    circleColor: theme.color.interactiveInverseFocus
  },
  brand: {
    arrowColor: theme.color.fillNeutral,
    circleColor: theme.color.interactiveNeutralFocus
  }
});

export const defaultStyle = {
  arrowAlphaValue: 0,
  arrowAlphaValueLimit: 0.5,
  arrowHeight: 40,
  arrowSpacing: 10,
  arrowWidth: 40,
  arrowColor: 4294506490,
  containerHeight: 24,
  iconLeftSrc:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADiNXWtAAAAi0lEQVRIDWNgGAWjIfD//38JID5Fk5AAGqwKxPeA+D/VLQCaaQLEr0CGgwBVLQCa5wbEn0EGwwDVLAAaGA3Ev2AGw2iqWAA0rBiI/8EMRaYptgBoWDeygehsci1gIlcjWfqArqZdEMFcBLSEdpGMZAntkimSJbTLaEiW0K6oQLKEdoUdzJJRemiHAAD4n+yzPWCs7QAAAABJRU5ErkJggg==',
  iconRightSrc:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADiNXWtAAAAg0lEQVRIDWNgGAWjIYArBP7//38KiCVwyVMsDjQcBO4BsSrFhmEzAGw8hHgFpEywqaFIDMkCEPMzELtRZCC6ZjQLQNxfQByNro5sPhYLQEL/gLiYbEORNeKwACbcDVPLBGMMOhrmVDSapkFE00imaTKlaUajaVFB28Ju0CXrUQfhDAEAEgHss6NhpLQAAAAASUVORK5CYII=',
  minWidth: 308,
  progressBar: {},
  w: 20,
  h: 20,
  radius: 10,
  sliderHeight: 10,
  showArrows: true,
  showKnob: true,
  circleAnimation: {},
  circleColor: 4294967295
};

export const schema = {
  type: 'object',
  properties: {
    arrowAlphaValue: {
      type: 'number'
    },
    arrowAlphaValueLimit: {
      type: 'number'
    },
    arrowHeight: {
      type: 'number'
    },
    arrowSpacing: {
      type: 'number'
    },
    arrowWidth: {
      type: 'number'
    },
    arrowColor: {
      type: 'number'
    },
    containerHeight: {
      type: 'number'
    },
    iconLeftSrc: {
      type: 'string'
    },
    iconRightSrc: {
      type: 'string'
    },
    minWidth: {
      type: 'number'
    },
    progressBar: {
      type: 'object',
      properties: {}
    },
    w: {
      type: 'number'
    },
    h: {
      type: 'number'
    },
    radius: {
      type: 'number'
    },
    sliderHeight: {
      type: 'number'
    },
    showArrows: {
      type: 'boolean'
    },
    showKnob: {
      type: 'boolean'
    },
    circleAnimation: {
      type: 'object',
      properties: {}
    },
    circleColor: {
      type: 'number'
    }
  }
};
