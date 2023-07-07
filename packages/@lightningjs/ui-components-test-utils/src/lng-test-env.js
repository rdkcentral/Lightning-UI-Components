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

import { TestEnvironment as JSDOMEnvironment } from 'jest-environment-jsdom';
import { jest } from '@jest/globals';

// Helper function to extract the width and height dimensions from a src string
const extractWidthHeight = src => {
  const dimensions = src.split('_')[1];

  return {
    width: dimensions.split('x')[0],
    height: dimensions.split('x')[1]
  };
};

export default class LightningUIEnvironment extends JSDOMEnvironment {
  async setup() {
    super.setup();
    // remove unnecessary console.error messages from image retrieval errors/broken images
    if (process.env.CI) {
      this.global.console = {
        ...this.global.console,
        error: jest.fn()
      };
    }

    // Mock up apis that are not supported in jsdom
    this.global.Image = class extends this.global.window.Image {
      constructor(width, height) {
        super(width, height);
        // mocking this reset function to fix the issue where tests were claiming this was not a function
        this.removeAttribute = () => {
          if (this.src) {
            this.src = null;
          }
        };
        setTimeout(() => {
          if (this.src) {
            // checking for error first as that seems to be the case in WebPlatform
            if (
              typeof this.onerror === 'function' &&
              (this.src.endsWith('brokenImage') || this.src.endsWith('Error'))
            ) {
              this.onerror();
            } else if (
              typeof this.onload === 'function' &&
              !this.src.endsWith('Error')
            ) {
              if (this.src.includes('_') && this.src.includes('x')) {
                const { width, height } = extractWidthHeight(this.src);
                this.width = width;
                this.height = height;
              }
              this.onload();
            }
          }
        }, 500);
      }
    };

    this.global.window.FontFace = function () {
      this.load = () => Promise.resolve();
    };
    this.global.document.fonts = {
      add() {},
      check() {
        return true;
      }
    };
  }
}
