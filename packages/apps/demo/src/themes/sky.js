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

import { tileProgressGenerator } from '../extensions/progressTile';

export default {
  name: 'Sky Lightning TV',
  alpha: {
    primary: 1,
    secondary: 0.24,
    tertiary: 0.8,
    inactive: 0.1,
    full: 1,
    none: 0,
    alpha1: 0.1,
    alpha2: 0.3,
    alpha3: 0.5,
    alpha4: 0.7,
    alpha5: 0.9
  },
  animation: {
    duration: {
      none: 0,
      xfast: 0.2,
      fast: 0.4,
      normal: 0.6,
      slow: 0.8,
      xslow: 1
    },
    delay: {
      none: 0,
      xfast: 0.02,
      fast: 0.04,
      normal: 0.06,
      slow: 0.08,
      xslow: 0.1
    },
    expressive: {
      timingFunction: 'cubic-bezier(0.6, 0, 0.1, 1)',
      delay: 0,
      duration: 0.6
    },
    expressiveEntrance: {
      timingFunction: 'cubic-bezier(0, 0, 0.15, 1)',
      delay: 0,
      duration: 0.6
    },
    expressiveExit: {
      timingFunction: 'cubic-bezier(0.9, 0, 1, 1)',
      delay: 0,
      duration: 0.6
    },
    standard: {
      timingFunction: 'cubic-bezier(0.8, -0.4, 0.2, 1.4)',
      delay: 0,
      duration: 0.6
    },
    standardEntrance: {
      timingFunction: 'cubic-bezier(0.1, 0.4, 0.16, 1.4)',
      delay: 0,
      duration: 0.3
    },
    standardExit: {
      timingFunction: 'cubic-bezier(0.8, -0.4, 0.2, 0.4)',
      delay: 0,
      duration: 0.3
    },
    utility: {
      timingFunction: 'cubic-bezier(0.4, 0.15, 0.1, 1)',
      delay: 0,
      duration: 0.6
    },
    utilityEntrance: {
      timingFunction: 'cubic-bezier(0, 0, 0.4, 1)',
      delay: 0,
      duration: 0.6
    },
    utilityExit: {
      timingFunction: 'cubic-bezier(0.4, 0, 1, 1)',
      delay: 0,
      duration: 0.6
    }
  },
  color: {
    white: ['#ffffff', 1],
    black: ['#000000', 1],
    grey: ['#8f8f8f', 1],
    red: ['#F0004D', 1],
    orange: ['#F95600', 1],
    yellow: ['#FFAA00', 1],
    green: ['#008F5E', 1],
    blue: ['#4e75ff', 1],
    purple: ['#1e9bcd', 1],
    palette: {
      'grey-05': ['#f8f7fa', 1],
      'grey-40': ['#929096', 1],
      'grey-70': ['#48474b', 1],
      'grey-90': ['#181819', 1],
      'blue-20': ['#becffe', 1],
      'blue-40': ['#93a9fd', 1],
      'blue-90': ['#000033', 1]
    },
    material: ['#141414', 1],
    materialBrand: ['#0d1d7f', 1],
    overlay: ['#000000', 0.24],
    textNeutral: ['#f1f1f1', 1],
    textNeutralSecondary: ['#f1f1f1', 0.24],
    textNeutralTertiary: ['#f1f1f1', 0.8],
    textNeutralDisabled: ['#f1f1f1', 0.1],
    textInverse: ['#141414', 1],
    textInverseSecondary: ['#141414', 0.24],
    textInverseTertiary: ['#141414', 0.8],
    textInverseDisabled: ['#141414', 0.1],
    textPositive: ['#0AC284', 1],
    textNegative: ['#FF6194', 1],
    textInfo: ['#8cb6ff', 1],
    textCaution: ['#FF8D52', 1],
    fillTransparent: ['#ffffff', 0],
    fillNeutral: ['#f1f1f1', 1],
    fillNeutralSecondary: ['#f1f1f1', 0.24],
    fillNeutralTertiary: ['#f1f1f1', 0.8],
    fillNeutralDisabled: ['#f1f1f1', 0.1],
    fillInverse: ['#141414', 1],
    fillInverseSecondary: ['#141414', 0.24],
    fillInverseTertiary: ['#141414', 0.8],
    fillInverseDisabled: ['#141414', 0.1],
    fillBrand: ['#2ebfea', 1],
    fillBrandSecondary: ['#2ebfea', 0.24],
    fillBrandTertiary: ['#2ebfea', 0.8],
    fillBrandDisabled: ['#2ebfea', 0.1],
    fillPositive: ['#009965', 1],
    fillNegative: ['#FF3878', 1],
    fillInfo: ['#6a94ff', 1],
    fillCaution: ['#FF6F24', 1],
    strokeNeutral: ['#f1f1f1', 1],
    strokeNeutralSecondary: ['#f1f1f1', 0.24],
    strokeNeutralTertiary: ['#f1f1f1', 0.8],
    strokeNeutralDisabled: ['#f1f1f1', 0.1],
    strokeInverse: ['#141414', 1],
    strokeInverseSecondary: ['#141414', 0.24],
    strokeInverseTertiary: ['#141414', 0.8],
    strokeInverseDisabled: ['#141414', 0.1],
    strokeBrand: ['#2ebfea', 1],
    strokeBrandSecondary: ['#2ebfea', 0.24],
    strokeBrandTertiary: ['#2ebfea', 0.8],
    strokeBrandDisabled: ['#2ebfea', 0.1],
    strokePositive: ['#009965', 1],
    strokeNegative: ['#FF3878', 1],
    strokeInfo: ['#6a94ff', 1],
    strokeCaution: ['#FF6F24', 1],
    interactiveNeutralFocus: ['#ffffff', 1],
    interactiveNeutralFocusSoft: ['#ffffff', 0.8],
    interactiveInverseFocus: ['#454545', 1],
    interactiveInverseFocusSoft: ['#454545', 0.8],
    interactiveBrandFocus: ['#8cb6ff', 1],
    interactiveBrandFocusSoft: ['#8cb6ff', 0.8],
    shadowNeutralFocus: ['#000000', 0.24],
    shadowNeutralFocusSoft: ['#000000', 0.24],
    shadowInverseFocus: ['#000000', 0.24],
    shadowInverseFocusSoft: ['#000000', 0.24],
    shadowBrandFocus: ['#000000', 0.24],
    shadowBrandFocusSoft: ['#000000', 0.24],
    'grey-05': ['#f1f1f1', 1],
    'grey-10': ['#d8d8d8', 1],
    'grey-20': ['#c0c0c0', 1],
    'grey-30': ['#a7a7a7', 1],
    'grey-40': ['#8f8f8f', 1],
    'grey-50': ['#767676', 1],
    'grey-60': ['#5e5e5e', 1],
    'grey-70': ['#454545', 1],
    'grey-80': ['#2d2d2d', 1],
    'grey-90': ['#141414', 1],
    'red-05': ['#F2D9E1', 1],
    'red-10': ['#FF99BA', 1],
    'red-20': ['#FF6194', 1],
    'red-30': ['#FF3878', 1],
    'red-40': ['#F0004D', 1],
    'red-50': ['#E6004A', 1],
    'red-60': ['#B7023C', 1],
    'red-70': ['#8F002F', 1],
    'red-80': ['#660021', 1],
    'red-90': ['#31111B', 1],
    'orange-05': ['#F2E1D9', 1],
    'orange-10': ['#FFB68F', 1],
    'orange-20': ['#FF8D52', 1],
    'orange-30': ['#FF6F24', 1],
    'orange-40': ['#F95600', 1],
    'orange-50': ['#E64F00', 1],
    'orange-60': ['#B33D00', 1],
    'orange-70': ['#A33800', 1],
    'orange-80': ['#8F3100', 1],
    'orange-90': ['#392014', 1],
    'yellow-05': ['#F2EAD9', 1],
    'yellow-10': ['#FFD88A', 1],
    'yellow-20': ['#FFC95C', 1],
    'yellow-30': ['#FFB829', 1],
    'yellow-40': ['#FFAA00', 1],
    'yellow-50': ['#B87700', 1],
    'yellow-60': ['#8F5D00', 1],
    'yellow-70': ['#7A5000', 1],
    'yellow-80': ['#664200', 1],
    'yellow-90': ['#352913', 1],
    'green-05': ['#D9F2EA', 1],
    'green-10': ['#78E3BF', 1],
    'green-20': ['#0AC284', 1],
    'green-30': ['#009965', 1],
    'green-40': ['#008F5E', 1],
    'green-50': ['#008558', 1],
    'green-60': ['#006851', 1],
    'green-70': ['#005240', 1],
    'green-80': ['#003328', 1],
    'green-90': ['#0E2A21', 1],
    'blue-05': ['#dbefff', 1],
    'blue-10': ['#b3d6ff', 1],
    'blue-20': ['#8cb6ff', 1],
    'blue-30': ['#6a94ff', 1],
    'blue-40': ['#4e75ff', 1],
    'blue-50': ['#395bfb', 1],
    'blue-60': ['#2846ee', 1],
    'blue-70': ['#1a32c9', 1],
    'blue-80': ['#0d1d7f', 1],
    'blue-90': ['#030324', 1],
    'purple-05': ['#e0fffd', 1],
    'purple-10': ['#9ff4f8', 1],
    'purple-20': ['#63dcf1', 1],
    'purple-30': ['#2ebfea', 1],
    'purple-40': ['#1e9bcd', 1],
    'purple-50': ['#157db0', 1],
    'purple-60': ['#116494', 1],
    'purple-70': ['#0f4f77', 1],
    'purple-80': ['#0d3c5a', 1],
    'purple-90': ['#0b293d', 1]
  },
  componentConfig: {
    ProgressBar: { tone: 'brand', style: { h: 4, radius: 2 } },
    Tile: {
      styleConfig: { mode: { focused: { radius: 24 } } },
      style: {
        paddingX: 20,
        paddingY: 14,
        metadataLocation: 'inset',
        radius: 6
      }
    }
  },
  font: [
    {
      family: 'SkyText',
      src: 'https://static.skyassets.com/fonts/sky-regular.woff2'
    }
  ],
  layout: {
    screenW: 1920,
    screenH: 1080,
    columnCount: 12,
    marginX: 96,
    marginY: 96,
    safe: 48,
    gutterX: { xs: 24, sm: 48, md: 72, lg: 96, xl: 120 },
    gutterY: { xs: 24, sm: 48, md: 72, lg: 96, xl: 120 },
    focusScale: 1.08
  },
  radius: { none: 0, xs: 6, sm: 10, md: 16, lg: 24, xl: 32 },
  spacer: { xxs: 2, xs: 4, sm: 6, md: 8, lg: 16, xl: 24, xxl: 32, xxxl: 40 },
  stroke: { sm: 2, md: 4, lg: 6, xl: 8 },
  typography: {
    display1: {
      fontFamily: 'Arial',
      fontSize: 112,
      lineHeight: 120,
      fontWeight: 300,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      fontFace: 'SkyText',
      letterSpacing: -0.4
    },
    display2: {
      fontFamily: 'Arial',
      fontSize: 68,
      lineHeight: 72,
      fontWeight: 400,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      fontFace: 'SkyText',
      letterSpacing: -0.4
    },
    headline1: {
      fontFamily: 'Arial',
      fontSize: 48,
      fontWeight: 400,
      lineHeight: 56,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      fontFace: 'SkyText',
      letterSpacing: 0
    },
    headline2: {
      fontFamily: 'Arial',
      fontSize: 34,
      fontWeight: 500,
      lineHeight: 48,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      fontFace: 'SkyText',
      letterSpacing: 0
    },
    headline3: {
      fontFamily: 'Arial',
      fontSize: 34,
      fontWeight: 400,
      lineHeight: 48,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      fontFace: 'SkyText',
      letterSpacing: 0
    },
    body1: {
      fontFamily: 'Arial',
      fontSize: 32,
      fontWeight: 400,
      lineHeight: 40,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      fontFace: 'SkyText',
      letterSpacing: 0
    },
    body2: {
      fontFamily: 'Arial',
      fontSize: 28,
      fontWeight: 400,
      lineHeight: 40,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      fontFace: 'SkyText',
      letterSpacing: 0
    },
    body3: {
      fontFamily: 'Arial',
      fontSize: 24,
      fontWeight: 400,
      lineHeight: 32,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      fontFace: 'SkyText',
      letterSpacing: 0
    },
    button1: {
      fontFamily: 'Arial',
      fontSize: 32,
      fontWeight: 500,
      letterSpacing: 0,
      lineHeight: 36,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      fontFace: 'SkyText'
    },
    button2: {
      fontFamily: 'Arial',
      fontSize: 32,
      fontWeight: 400,
      lineHeight: 36,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      fontFace: 'SkyText',
      letterSpacing: 0
    },
    callout1: {
      fontFamily: 'Arial',
      fontSize: 28,
      fontWeight: 500,
      letterSpacing: 0,
      lineHeight: 32,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      fontFace: 'SkyText'
    },
    caption1: {
      fontFamily: 'Arial',
      fontSize: 20,
      fontWeight: 500,
      lineHeight: 24,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      fontFace: 'SkyText',
      letterSpacing: 0
    }
  },
  extensions: [
    {
      targetComponent: ['Tile'],
      extension: tileProgressGenerator()
    }
  ]
};
