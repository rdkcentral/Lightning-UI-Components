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

export default {
  name: 'Base Lightning TV',
  alpha: {
    primary: 1,
    secondary: 0.6,
    tertiary: 0.15,
    inactive: 0.3,
    full: 1,
    none: 0,
    alpha1: 0.1,
    alpha2: 0.15,
    alpha3: 0.2,
    alpha4: 0.3,
    alpha5: 0.6
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
      timingFunction: 'cubic-bezier(0.8, -0.4, 0.2, 1.4)',
      delay: 0,
      duration: 0.6
    },
    expressiveEntrance: {
      timingFunction: 'cubic-bezier(0.1, 0.4, 0.16, 1.4)',
      delay: 0,
      duration: 0.4
    },
    expressiveExit: {
      timingFunction: 'cubic-bezier(0.8, -0.4, 0.8, 0.4)',
      delay: 0,
      duration: 0.2
    },
    standard: {
      timingFunction: 'cubic-bezier(0.6, 0, 0.1, 1)',
      delay: 0,
      duration: 0.6
    },
    standardEntrance: {
      timingFunction: 'cubic-bezier(0, 0, 0.15, 1)',
      delay: 0,
      duration: 0.2
    },
    standardExit: {
      timingFunction: 'cubic-bezier(0.9, 0, 1, 1)',
      delay: 0,
      duration: 0.2
    },
    utility: {
      timingFunction: 'cubic-bezier(0.4, 0.15, 0.1, 1)',
      delay: 0,
      duration: 0.4
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
  asset: {
    arrowLeft:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADiNXWtAAAAi0lEQVRIDWNgGAWjIfD//38JID5Fk5AAGqwKxPeA+D/VLQCaaQLEr0CGgwBVLQCa5wbEn0EGwwDVLAAaGA3Ev2AGw2iqWAA0rBiI/8EMRaYptgBoWDeygehsci1gIlcjWfqArqZdEMFcBLSEdpGMZAntkimSJbTLaEiW0K6oQLKEdoUdzJJRemiHAAD4n+yzPWCs7QAAAABJRU5ErkJggg==',
    arrowRight:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADiNXWtAAAAg0lEQVRIDWNgGAWjIYArBP7//38KiCVwyVMsDjQcBO4BsSrFhmEzAGw8hHgFpEywqaFIDMkCEPMzELtRZCC6ZjQLQNxfQByNro5sPhYLQEL/gLiYbEORNeKwACbcDVPLBGMMOhrmVDSapkFE00imaTKlaUajaVFB28Ju0CXrUQfhDAEAEgHss6NhpLQAAAAASUVORK5CYII=',
    backspaceOutline:
      'data:image/png;base64,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',
    check:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAOCAYAAAAi2ky3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACtSURBVHgBvdPdDcIgEAfwoy8Nb45QN3AGF2s36Ahu4gpuIDoBfSgfpdoTlCbEWEMh6T8hFzjyg5AAkBHOcQe5UWqspRx435sDpMYj6IYQwwVSEiJ2MKVUBWuzLSLl2HL+uxmNCGFO8yaL7RHxve6qRZoAuS4hxac8735elWVx7jrtMKL1o0Gcat9jhExHSukN/kUIFZ7MpDRtzE1isDRkAUtDvrA8ZI597FUf8gWH9P0b4gko9wAAAABJRU5ErkJggg=='
  },
  color: {
    white: ['#FFFFFF', 1],
    black: ['#000000', 1],
    grey: ['#8B8B8B', 1],
    red: ['#F0004D', 1],
    orange: ['#F95600', 1],
    yellow: ['#FFAA00', 1],
    green: ['#119911', 1],
    blue: ['#2970FF', 1],
    purple: '#704BF7',
    palette: {
      'grey-05': ['#F5F5F5', 1],
      'grey-40': ['#8B8B8B', 1],
      'grey-70': ['#494949', 1],
      'grey-90': ['#1A1A1A', 1],
      'blue-20': ['#4784FF', 1],
      'blue-40': ['#2970FF', 1],
      'blue-90': ['#131E34', 1],
      'grey-10': ['#E3E3E3', 1],
      'grey-20': ['#C2C2C2', 1],
      'grey-30': ['#A1A1A0', 1],
      'grey-50': ['#757575', 1],
      'grey-60': ['#555555', 1],
      'grey-80': ['#333333', 1],
      'red-10': ['#FF99BA', 1],
      'red-20': ['#FF6194', 1],
      'red-30': ['#FF3878', 1],
      'red-40': ['#F0004D', 1],
      'red-50': ['#E6004A', 1],
      'red-60': ['#B7023C', 1],
      'red-70': ['#8F002F', 1],
      'red-80': ['#660021', 1],
      'red-90': ['#31111B', 1],
      'red-05': ['#F2D9E1', 1],
      'orange-10': ['#FFB68F', 1],
      'orange-20': ['#FF8D52', 1],
      'orange-30': ['#FF6F24', 1],
      'orange-40': ['#F95600', 1],
      'orange-50': ['#E64F00', 1],
      'orange-60': ['#B33D00', 1],
      'orange-70': ['#A33800', 1],
      'orange-80': ['#8F3100', 1],
      'orange-90': ['#392014', 1],
      'orange-05': ['#F2E1D9', 1],
      'yellow-10': ['#FFD88A', 1],
      'yellow-20': ['#FFC95C', 1],
      'yellow-30': ['#FFB829', 1],
      'yellow-40': ['#FFAA00', 1],
      'yellow-50': ['#B87700', 1],
      'yellow-60': ['#8F5D00', 1],
      'yellow-70': ['#7A5000', 1],
      'yellow-80': ['#664200', 1],
      'yellow-90': ['#352913', 1],
      'yellow-05': ['#F2EAD9', 1],
      'green-10': ['#B3E6B3', 1],
      'green-20': ['#71CC71', 1],
      'green-30': ['#3CB33C', 1],
      'green-40': ['#119911', 1],
      'green-50': ['#008000', 1],
      'green-60': ['#006600', 1],
      'green-70': ['#004C00', 1],
      'green-80': ['#003300', 1],
      'green-90': ['#001900', 1],
      'green-05': ['#D7F2D7', 1],
      'blue-10': ['#8BAFF9', 1],
      'blue-30': ['#3376FF', 1],
      'blue-50': ['#1F69FF', 1],
      'blue-60': ['#0051D0', 1],
      'blue-70': ['#0040A3', 1],
      'blue-80': ['#003485', 1],
      'blue-05': ['#D9E1F2', 1],
      'teal-10': ['#9CE7E9', 1],
      'teal-20': ['#52CED2', 1],
      'teal-30': ['#05B2B6', 1],
      'teal-40': ['#009A9F', 1],
      'teal-50': ['#007C85', 1],
      'teal-60': ['#00666A', 1],
      'teal-70': ['#004C4F', 1],
      'teal-80': ['#003334', 1],
      'teal-90': ['#001919', 1],
      'teal-05': ['#CCF3F4', 1]
    },
    material: ['#1A1A1A', 1],
    materialBrand: ['#001919', 1],
    overlay: ['#1A1A1A', 0.6],
    textNeutral: ['#F5F5F5', 1],
    textNeutralSecondary: ['#F5F5F5', 0.6],
    textNeutralTertiary: ['#F5F5F5', 0.15],
    textNeutralDisabled: ['#F5F5F5', 0.3],
    textInverse: ['#1A1A1A', 1],
    textInverseSecondary: ['#1A1A1A', 0.6],
    textInverseTertiary: ['#1A1A1A', 0.15],
    textInverseDisabled: ['#1A1A1A', 0.3],
    textBrand: ['#52CED2', 1],
    textBrandSecondary: ['#52CED2', 0.6],
    textBrandTertiary: ['#52CED2', 0.15],
    textBrandDisabled: ['#52CED2', 0.3],
    textPositive: ['#0AC284', 1],
    textNegative: ['#F0004D', 1],
    textInfo: ['#2970FF', 1],
    textCaution: ['#F95600', 1],
    fillTransparent: ['#FFFFFF', 0],
    fillNeutral: ['#F5F5F5', 1],
    fillNeutralSecondary: ['#F5F5F5', 0.6],
    fillNeutralTertiary: ['#F5F5F5', 0.15],
    fillNeutralDisabled: ['#F5F5F5', 0.3],
    fillInverse: ['#1A1A1A', 1],
    fillInverseSecondary: ['#1A1A1A', 0.6],
    fillInverseTertiary: ['#1A1A1A', 0.15],
    fillInverseDisabled: ['#1A1A1A', 0.3],
    fillBrand: ['#05B2B6', 1],
    fillBrandSecondary: ['#05B2B6', 0.6],
    fillBrandTertiary: ['#05B2B6', 0.15],
    fillBrandDisabled: ['#05B2B6', 0.3],
    fillPositive: ['#0AC284', 1],
    fillNegative: ['#F0004D', 1],
    fillInfo: ['#2970FF', 1],
    fillCaution: ['#F95600', 1],
    strokeNeutral: ['#F5F5F5', 1],
    strokeNeutralSecondary: ['#F5F5F5', 0.6],
    strokeNeutralTertiary: ['#F5F5F5', 0.15],
    strokeNeutralDisabled: ['#F5F5F5', 0.3],
    strokeInverse: ['#1A1A1A', 1],
    strokeInverseSecondary: ['#1A1A1A', 0.6],
    strokeInverseTertiary: ['#1A1A1A', 0.15],
    strokeInverseDisabled: ['#1A1A1A', 0.3],
    strokeBrand: ['#05B2B6', 1],
    strokeBrandSecondary: ['#05B2B6', 0.6],
    strokeBrandTertiary: ['#05B2B6', 0.15],
    strokeBrandDisabled: ['#05B2B6', 0.3],
    strokePositive: ['#0AC284', 1],
    strokeNegative: ['#F0004D', 1],
    strokeInfo: ['#2970FF', 1],
    strokeCaution: ['#F95600', 1],
    interactiveNeutral: ['#FFFFFF', 0.1],
    interactiveNeutralFocus: ['#FFFFFF', 0.2],
    interactiveNeutralFocusSoft: ['#FFFFFF', 0.15],
    interactiveInverse: ['#1A1A1A', 0.1],
    interactiveInverseFocus: ['#1A1A1A', 0.2],
    interactiveInverseFocusSoft: ['#1A1A1A', 0.15],
    interactiveBrand: ['#05B2B6', 0.1],
    interactiveBrandFocus: ['#05B2B6', 0.2],
    interactiveBrandFocusSoft: ['#05B2B6', 0.15],
    shadowNeutral: ['#000000', 0.6],
    shadowNeutralFocus: ['#000000', 0.6],
    shadowNeutralFocusSoft: ['#000000', 0.6],
    shadowNeutralText: ['#000000', 0],
    shadowInverse: ['#000000', 0.6],
    shadowInverseFocus: ['#000000', 0.6],
    shadowInverseFocusSoft: ['#000000', 0.6],
    shadowInverseText: ['#000000', 0],
    shadowBrand: ['#000000', 0.6],
    shadowBrandFocus: ['#000000', 0.6],
    shadowBrandFocusSoft: ['#000000', 0.6],
    shadowBrandText: ['#000000', 0],
    teal: ['#009A9F', 1]
  },
  componentConfig: {
    Keyboard: {
      style: {
        keyProps: {
          delete: {
            title: null,
            icon: 'data:image/png;base64,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'
          }
        }
      }
    },
    Distractor: { tone: 'brand' },
    FocusRing: {
      tone: 'brand',
      style: {
        borderWidth: 4,
        color: '0x4dd9d9d9',
        spacing: -4,
        shouldAnimate: false,
        transitionColor: '0x33d9d9d9',
        secondaryColor: '0xdd9d9d9'
      }
    },
    Label: {
      tone: 'brand',
      style: {
        radius: 4,
        tone: { brand: { backgroundColor: ['#52CED2', 0.6] } }
      }
    },
    Lozenge: {
      tone: 'brand',
      style: {
        backgroundColor: '0x33f6f6f9',
        radius: 6,
        highlightRadius: [6, 6, 0, 0],
        mode: {
          focused: {
            radius: 10,
            highlightRadius: [10, 10, 0, 0],
            backgroundColor: '0x33f6f6f9'
          }
        }
      }
    },
    ProgressBar: { tone: 'brand', style: { h: 4, radius: 4 } },
    Wave: { tone: 'brand' },
    Button: {
      style: {
        radius: 6,
        textStyle: { textColor: ['#f6f6f9', 1] },
        mode: { focused: { radius: 10 } }
      }
    },
    Card: {
      style: { radius: 6, mode: { focused: { radius: 10 } } }
    },
    Key: { style: { baseWidth: 61, height: 61, minWidth: 61 } },
    KeyboardSpacing: { style: { keySpacing: 4 } },
    // MetadataTile: {
    //   style: {
    //     titleTextStyle: {
    //       verticalAlign: 'middle',
    //       maxLineSuffix: '...',
    //       shadow: true,
    //       shadowOffsetX: 1,
    //       shadowOffsetY: 2,
    //       shadowBlur: 0,
    //       shadowColor: 4279505943,
    //       fontFamily: 'WorkSans',
    //       fontSize: 30,
    //       fontStyle: '400',
    //       lineHeight: 40,
    //       letterSpacing: -0.2
    //     },
    //     descriptionTextStyle: {
    //       verticalAlign: 'middle',
    //       maxLineSuffix: '...',
    //       shadow: true,
    //       shadowOffsetX: 1,
    //       shadowOffsetY: 2,
    //       shadowBlur: 0,
    //       shadowColor: 4279505943,
    //       fontFamily: 'WorkSans',
    //       fontSize: 27,
    //       fontStyle: '400',
    //       lineHeight: 40
    //     },
    //     mode: {
    //       focused: {
    //         titleTextStyle: {
    //           verticalAlign: 'middle',
    //           maxLineSuffix: '...',
    //           shadow: true,
    //           shadowOffsetX: 1,
    //           shadowOffsetY: 2,
    //           shadowBlur: 0,
    //           shadowColor: 4279505943,
    //           fontFamily: 'WorkSans',
    //           fontSize: 30,
    //           lineHeight: 40,
    //           letterSpacing: -0.2
    //         },
    //         descriptionTextStyle: {
    //           verticalAlign: 'middle',
    //           maxLineSuffix: '...',
    //           shadow: true,
    //           shadowOffsetX: 1,
    //           shadowOffsetY: 2,
    //           shadowBlur: 0,
    //           shadowColor: 4279505943,
    //           fontFamily: 'WorkSans',
    //           fontSize: 27,
    //           fontStyle: '400',
    //           lineHeight: 40
    //         }
    //       }
    //     }
    //   }
    // },
    Surface: { radius: 6, mode: { focused: { radius: 10 } } },
    Tile: {
      style: {
        radius: 6,
        metadataLocation: 'inset',
        mode: { focused: { paddingY: 24, radius: 10 } },
        backgroundColor: ['#604056', 100],
        tone: { offline: { backgroundColor: ['#454044', 100] } }
      }
    },
    CardTitle: {
      style: {
        titleTextStyle: {
          verticalAlign: 'middle',
          maxLineSuffix: '...',
          shadow: true,
          shadowOffsetX: 1,
          shadowOffsetY: 2,
          shadowBlur: 0,
          shadowColor: 4279505943,
          fontFamily: 'WorkSans',
          fontSize: 32,
          lineHeight: 40
        },
        descriptionTextStyle: {
          verticalAlign: 'middle',
          maxLineSuffix: '...',
          shadow: true,
          shadowOffsetX: 1,
          shadowOffsetY: 2,
          shadowBlur: 0,
          shadowColor: 4279505943,
          fontFamily: 'WorkSans',
          fontSize: 28,
          lineHeight: 40
        }
      }
    },
    // CardContentVertical: {
    //   style: {
    //     metadata: {
    //       titleTextStyle: {
    //         verticalAlign: 'middle',
    //         maxLineSuffix: '...',
    //         shadow: true,
    //         shadowOffsetX: 1,
    //         shadowOffsetY: 2,
    //         shadowBlur: 0,
    //         shadowColor: 4279505943,
    //         fontFamily: 'WorkSans',
    //         fontSize: 30,
    //         lineHeight: 40,
    //         letterSpacing: -0.2,
    //         maxLines: 1
    //       },
    //       descriptionTextStyle: {
    //         verticalAlign: 'middle',
    //         maxLineSuffix: '...',
    //         shadow: true,
    //         shadowOffsetX: 1,
    //         shadowOffsetY: 2,
    //         shadowBlur: 0,
    //         shadowColor: 4279505943,
    //         fontFamily: 'WorkSans',
    //         fontSize: 27,
    //         lineHeight: 40,
    //         maxLines: 3
    //       }
    //     }
    //   }
    // },
    // CardContentVerticalSmall: {
    //   style: {
    //     metadata: {
    //       titleTextStyle: {
    //         verticalAlign: 'middle',
    //         maxLineSuffix: '...',
    //         shadow: true,
    //         shadowOffsetX: 1,
    //         shadowOffsetY: 2,
    //         shadowBlur: 0,
    //         shadowColor: 4279505943,
    //         fontFamily: 'WorkSans',
    //         fontSize: 30,
    //         lineHeight: 40,
    //         letterSpacing: -0.2,
    //         maxLines: 1
    //       },
    //       descriptionTextStyle: {
    //         verticalAlign: 'middle',
    //         maxLineSuffix: '...',
    //         shadow: true,
    //         shadowOffsetX: 1,
    //         shadowOffsetY: 2,
    //         shadowBlur: 0,
    //         shadowColor: 4279505943,
    //         fontFamily: 'WorkSans',
    //         fontSize: 27,
    //         lineHeight: 40,
    //         maxLines: 1
    //       }
    //     }
    //   }
    // },
    ContentBlock: {
      style: {
        detailsStyle: {
          textStyle: {
            verticalAlign: 'middle',
            maxLineSuffix: '...',
            shadow: true,
            shadowOffsetX: 1,
            shadowOffsetY: 2,
            shadowBlur: 0,
            shadowColor: 4279505943,
            fontFamily: 'WorkSansBold',
            fontSize: 28,
            lineHeight: 40
          }
        }
      }
    },
    Hero: { style: { contentBlockMarginY: 218 } },
    Metadata: {
      style: {
        titleTextStyle: {
          verticalAlign: 'middle',
          maxLineSuffix: '...',
          shadow: true,
          shadowOffsetX: 1,
          shadowOffsetY: 2,
          shadowBlur: 0,
          shadowColor: 4279505943,
          fontFamily: 'WorkSans',
          fontSize: 30,
          lineHeight: 40,
          letterSpacing: -0.2,
          maxLines: 1
        },
        descriptionTextStyle: {
          verticalAlign: 'middle',
          maxLineSuffix: '...',
          shadow: true,
          shadowOffsetX: 1,
          shadowOffsetY: 2,
          shadowBlur: 0,
          shadowColor: 4279505943,
          fontFamily: 'WorkSans',
          fontSize: 27,
          lineHeight: 40,
          maxLines: 3
        },
        mode: {
          focused: {
            titleTextStyle: {
              verticalAlign: 'middle',
              maxLineSuffix: '...',
              shadow: true,
              shadowOffsetX: 1,
              shadowOffsetY: 2,
              shadowBlur: 0,
              shadowColor: 4279505943,
              fontFamily: 'WorkSans',
              fontSize: 30,
              lineHeight: 40,
              letterSpacing: -0.2,
              maxLines: 1
            },
            descriptionTextStyle: {
              verticalAlign: 'middle',
              maxLineSuffix: '...',
              shadow: true,
              shadowOffsetX: 1,
              shadowOffsetY: 2,
              shadowBlur: 0,
              shadowColor: 4279505943,
              fontFamily: 'WorkSans',
              fontSize: 27,
              lineHeight: 40,
              maxLines: 3
            }
          }
        }
      }
    },
    MetadataBase: {
      style: {
        titleTextStyle: {
          verticalAlign: 'middle',
          maxLineSuffix: '...',
          shadow: true,
          shadowOffsetX: 1,
          shadowOffsetY: 2,
          shadowBlur: 0,
          shadowColor: 4279505943,
          fontFamily: 'WorkSans',
          fontSize: 30,
          lineHeight: 40,
          letterSpacing: -0.2
        },
        descriptionTextStyle: {
          verticalAlign: 'middle',
          maxLineSuffix: '...',
          shadow: true,
          shadowOffsetX: 1,
          shadowOffsetY: 2,
          shadowBlur: 0,
          shadowColor: 4279505943,
          fontFamily: 'WorkSans',
          fontSize: 27,
          lineHeight: 40
        },
        mode: {
          focused: {
            titleTextStyle: {
              verticalAlign: 'middle',
              maxLineSuffix: '...',
              shadow: true,
              shadowOffsetX: 1,
              shadowOffsetY: 2,
              shadowBlur: 0,
              shadowColor: 4279505943,
              fontFamily: 'WorkSans',
              fontSize: 30,
              lineHeight: 40,
              letterSpacing: -0.2
            },
            descriptionTextStyle: {
              verticalAlign: 'middle',
              maxLineSuffix: '...',
              shadow: true,
              shadowOffsetX: 1,
              shadowOffsetY: 2,
              shadowBlur: 0,
              shadowColor: 4279505943,
              fontFamily: 'WorkSans',
              fontSize: 27,
              lineHeight: 40
            }
          }
        }
      }
    },
    MetadataCard: {
      style: {
        titleTextStyle: {
          verticalAlign: 'middle',
          maxLineSuffix: '...',
          shadow: true,
          shadowOffsetX: 1,
          shadowOffsetY: 2,
          shadowBlur: 0,
          shadowColor: 4279505943,
          fontFamily: 'WorkSans',
          fontSize: 30,
          lineHeight: 40,
          letterSpacing: -0.2
        },
        descriptionTextStyle: {
          verticalAlign: 'middle',
          maxLineSuffix: '...',
          shadow: true,
          shadowOffsetX: 1,
          shadowOffsetY: 2,
          shadowBlur: 0,
          shadowColor: 4279505943,
          fontFamily: 'WorkSans',
          fontSize: 27,
          lineHeight: 40
        },
        mode: {
          focused: {
            titleTextStyle: {
              verticalAlign: 'middle',
              maxLineSuffix: '...',
              shadow: true,
              shadowOffsetX: 1,
              shadowOffsetY: 2,
              shadowBlur: 0,
              shadowColor: 4279505943,
              fontFamily: 'WorkSans',
              fontSize: 30,
              lineHeight: 40,
              letterSpacing: -0.2
            },
            descriptionTextStyle: {
              verticalAlign: 'middle',
              maxLineSuffix: '...',
              shadow: true,
              shadowOffsetX: 1,
              shadowOffsetY: 2,
              shadowBlur: 0,
              shadowColor: 4279505943,
              fontFamily: 'WorkSans',
              fontSize: 27,
              lineHeight: 40
            }
          }
        }
      }
    },
    MetadataCardContent: {
      style: {
        titleTextStyle: {
          verticalAlign: 'middle',
          maxLineSuffix: '...',
          shadow: true,
          shadowOffsetX: 1,
          shadowOffsetY: 2,
          shadowBlur: 0,
          shadowColor: 4279505943,
          fontFamily: 'WorkSans',
          fontSize: 30,
          lineHeight: 40,
          letterSpacing: -0.2
        },
        descriptionTextStyle: {
          verticalAlign: 'middle',
          maxLineSuffix: '...',
          shadow: true,
          shadowOffsetX: 1,
          shadowOffsetY: 2,
          shadowBlur: 0,
          shadowColor: 4279505943,
          fontFamily: 'WorkSans',
          fontSize: 27,
          lineHeight: 40
        },
        mode: {
          focused: {
            titleTextStyle: {
              verticalAlign: 'middle',
              maxLineSuffix: '...',
              shadow: true,
              shadowOffsetX: 1,
              shadowOffsetY: 2,
              shadowBlur: 0,
              shadowColor: 4279505943,
              fontFamily: 'WorkSans',
              fontSize: 30,
              lineHeight: 40,
              letterSpacing: -0.2
            },
            descriptionTextStyle: {
              verticalAlign: 'middle',
              maxLineSuffix: '...',
              shadow: true,
              shadowOffsetX: 1,
              shadowOffsetY: 2,
              shadowBlur: 0,
              shadowColor: 4279505943,
              fontFamily: 'WorkSans',
              fontSize: 27,
              lineHeight: 40
            }
          }
        }
      }
    }
  },
  font: [
    {
      family: 'WorkSans',
      src: 'https://static.cimcontent.net/common-web-assets/fonts/work-sans/worksans-regular.woff2'
    },
    {
      family: 'WorkSansMedium',
      src: 'https://static.cimcontent.net/common-web-assets/fonts/work-sans/worksans-medium.woff2'
    },
    {
      family: 'WorkSansBold',
      src: 'https://static.cimcontent.net/common-web-assets/fonts/work-sans/worksans-semibold.woff2'
    }
  ],
  layout: {
    columnCount: 12,
    focusScale: 1.08,
    gutterX: 24,
    gutterY: 88,
    marginX: 96,
    marginY: 48,
    safe: 48,
    screenW: 1920,
    screenH: 1080
  },
  radius: { none: 0, xs: 4, sm: 8, md: 16, lg: 24, xl: 32 },
  spacer: {
    none: 0,
    xxs: 2,
    xs: 4,
    sm: 6,
    md: 8,
    lg: 16,
    xl: 24,
    xxl: 32,
    xxxl: 48
  },
  stroke: { none: 0, sm: 2, md: 4, lg: 6, xl: 8 },
  typography: {
    display1: {
      fontFamily: 'WorkSans',
      fontSize: 45,
      lineHeight: 72,
      fontStyle: '600',
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      maxLineSuffix: '...',
      shadow: true,
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      shadowBlur: 0,
      shadowColor: 4279505943,
      letterSpacing: -0.4
    },
    display2: {
      fontFamily: 'WorkSans',
      fontSize: 45,
      lineHeight: 72,
      fontStyle: '600',
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      maxLineSuffix: '...',
      shadow: true,
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      shadowBlur: 0,
      shadowColor: 4279505943,
      letterSpacing: -0.4
    },
    headline1: {
      fontFamily: 'WorkSans',
      fontSize: 32,
      fontStyle: '600',
      lineHeight: 40,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      maxLineSuffix: '...',
      shadow: true,
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      shadowBlur: 0,
      shadowColor: 4279505943
    },
    headline2: {
      fontFamily: 'WorkSans',
      fontSize: 32,
      fontStyle: '600',
      lineHeight: 40,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      maxLineSuffix: '...',
      shadow: true,
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      shadowBlur: 0,
      shadowColor: 4279505943,
      letterSpacing: -0.2
    },
    headline3: {
      fontFamily: 'WorkSans',
      fontSize: 32,
      fontStyle: '600',
      lineHeight: 40,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      maxLineSuffix: '...',
      shadow: true,
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      shadowBlur: 0,
      shadowColor: 4279505943
    },
    body1: {
      fontFamily: 'WorkSans',
      fontSize: 30,
      fontStyle: '400',
      lineHeight: 40,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      maxLineSuffix: '...',
      shadow: true,
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      shadowBlur: 0,
      shadowColor: 4279505943,
      letterSpacing: -0.2
    },
    body2: {
      fontFamily: 'WorkSans',
      fontSize: 28,
      fontStyle: '400',
      lineHeight: 40,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      maxLineSuffix: '...',
      shadow: true,
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      shadowBlur: 0,
      shadowColor: 4279505943
    },
    body3: {
      fontFamily: 'WorkSans',
      fontSize: 27,
      fontStyle: '400',
      lineHeight: 40,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      maxLineSuffix: '...',
      shadow: true,
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      shadowBlur: 0,
      shadowColor: 4279505943
    },
    button1: {
      fontFamily: 'WorkSans',
      fontSize: 30,
      fontStyle: '600',
      lineHeight: 36,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      maxLineSuffix: '...',
      shadow: true,
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      shadowBlur: 0,
      shadowColor: 4279505943,
      letterSpacing: -0.2
    },
    button2: {
      fontFamily: 'WorkSans',
      fontSize: 28,
      fontStyle: '600',
      lineHeight: 32,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      maxLineSuffix: '...',
      shadow: true,
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      shadowBlur: 0,
      shadowColor: 4279505943,
      letterSpacing: -0.2
    },
    callout1: {
      fontFamily: 'WorkSans',
      fontSize: 24,
      fontStyle: '400',
      lineHeight: 32,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      maxLineSuffix: '...',
      shadow: true,
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      shadowBlur: 0,
      shadowColor: 4279505943
    },
    caption1: {
      fontFamily: 'WorkSansMedium',
      fontSize: 20,
      fontStyle: '400',
      lineHeight: 24,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      maxLineSuffix: '...',
      shadow: true,
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      shadowBlur: 0,
      shadowColor: 4279505943
    },
    tag1: {
      fontFamily: 'WorkSansMedium',
      fontSize: 20,
      fontStyle: '600',
      lineHeight: 24,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      maxLineSuffix: '...',
      shadow: true,
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      shadowBlur: 0,
      shadowColor: 4279505943
    },
    footnote1: {
      fontFamily: 'WorkSans',
      fontSize: 20,
      fontStyle: '400',
      lineHeight: 28,
      verticalAlign: 'middle',
      textBaseline: 'bottom',
      maxLineSuffix: '...',
      shadow: true,
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      shadowBlur: 0,
      shadowColor: 4279505943
    }
  }
};
