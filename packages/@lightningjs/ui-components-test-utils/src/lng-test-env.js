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

export default class LightningUIEnvironment extends JSDOMEnvironment {
  async setup() {
    super.setup();
    // Mock up apis that are not supported in jsdom
    this.global.Image = class {
      constructor() {
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
              (this.src === 'brokenImage' || this.src.endsWith('Error'))
            ) {
              this.onerror();
            } else if (
              typeof this.onload === 'function' &&
              !this.src.endsWith('Error')
            ) {
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
