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

import {
  context,
  Column,
  Artwork,
  Base,
  TextBox,
  Gradient
} from '@lightningjs/ui-components';

export default class BackgroundSwitcher extends Base {
  static __componentName() {
    return 'BackgroundSwitcher';
  }

  static _template() {
    return {
      Background1: {
        type: Artwork,
        h: context.theme.layout.screenH,
        w: context.theme.layout.screenW,
        gradient: true,
        srcCallback({ src }) {
          return `https://image.tmdb.org/t/p/w1280/${src}`;
        }
      },
      Background2: {
        alpha: 0.001,
        type: Artwork,
        h: context.theme.layout.screenH,
        w: context.theme.layout.screenW,
        gradient: true,
        srcCallback({ src }) {
          return `https://image.tmdb.org/t/p/w1280/${src}`;
        }
      },
      Overlay: {
        type: class extends Gradient {
          _update() {
            this.patch({
              rect: true,
              rtt: true,
              colorRight: this.style.gradientTop,
              colorLeft: this.style.gradientColor,
              texture: window.lng.Tools.getRoundRect(
                this.w,
                this.h,
                this.style.radius
              )
            });
          }
        },
        h: context.theme.layout.screenH,
        w: context.theme.layout.screenW
      },
      Metadata: {
        y: context.theme.layout.screenH * 0.4,
        x: context.theme.layout.marginX,
        type: Column,
        items: [
          {
            type: TextBox,
            style: {
              textStyle: {
                ...context.theme.typography.display1,
                wordWrapWidth:
                  context.theme.layout.screenW -
                  context.theme.layout.marginX * 2,
                maxLines: 2
              }
            }
          },
          {
            type: TextBox,
            w: 500,
            style: {
              textStyle: {
                wordWrapWidth:
                  context.theme.layout.screenW -
                  context.theme.layout.marginX * 2,
                maxLines: 2
              }
            }
          }
        ]
      }
    };
  }

  static get properties() {
    return ['title', 'description', 'src'];
  }

  static get tags() {
    return ['Metadata']
  }

  _construct() {
    super._construct && super._construct();
    this._activeBackground = 0;
  }

  _update() {
    const target = this.childList.getAt(this._activeBackground);
    target.src = this.src;
    const fadeOut = this.childList.getAt(+!this._activeBackground);
    this._activeBackground = +!this._activeBackground;
    target.smooth = { alpha: 1 };
    fadeOut.smooth = { alpha: 0.001 };
    this._Metadata.childList.first.childList.first.content = this.title;
    this._Metadata.childList.first.childList.last.content =
      this.description;
  }
}
