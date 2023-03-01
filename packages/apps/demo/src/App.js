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

import { Router } from '@lightningjs/sdk';
import routes from './lib/routes.js';
import { ThemeSwitcher, TopNav } from './components';

export default class App extends Router.App {
  static _template() {
    return {
      ...super._template(),
      Nav: {
       type: TopNav
      },
      Widgets: {
        ThemeSwitcher: {
          type: ThemeSwitcher
        }
      }
    };
  }

  _construct() {
    document.body.style.backgroundColor = '#000';
  }
  
  $navigationVisible(show) {
    this.tag('Nav').smooth = {
      alpha: show ? 1 : 0.001
    }
  }

  _handleExit() {
    Router.back();
  }

  _handleThemePanel(e) {
    Router.focusWidget('ThemeSwitcher');
  }

  _setup() {
    Router.startRouter(routes);
  }
}
