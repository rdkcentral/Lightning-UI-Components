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

import { Base, context, Row, Button } from '@lightningjs/ui-components';
import { Router } from '@lightningjs/sdk';

const themes = {};

export default class ThemeSwitcher extends Base {
  static __componentName() {
    return 'ThemeSwitcher';
  }

  static _template() {
    const w = window.app.stage.w / window.app.stage.getRenderPrecision();
    const h = window.app.stage.h / window.app.stage.getRenderPrecision();
    return {
      alpha: 0.001,
      Background: {
        rtt: true,
        rect: true,
        color: 0xfff000000,
        w: w,
        h: h
      },
      Selector: {
        type: Row,
        neverScroll: true,
        autoResizeWidth: true,
        mount: 0.5,
        y: h / 2,
        x: w / 2,
        items: ['Base'].map(theme => ({
          type: Button,
          title: theme,
          onEnter() {
            context
              .setTheme(themes[theme.toLocaleLowerCase()] || {})
              .then(() => {
                Router.focusPage();
              });
          }
        }))
      }
    };
  }

  static get tags() {
    return ['Selector'];
  }

  _getFocused() {
    return this._Selector;
  }

  _handleThemePanel() {
    Router.focusPage(); // Go back to active page when F1 is pressed
  }

  _handleBack() {
    Router.focusPage(); // Go back to active page when esc is pressed
  }

  _handleKey() {
    return true; // Make sure the ThemeSwitcher does not close when you reach the end of the Row
  }

  _focus() {
    this.smooth = { alpha: 1 };
  }

  _unfocus() {
    this.smooth = { alpha: 0.001 };
  }
}
