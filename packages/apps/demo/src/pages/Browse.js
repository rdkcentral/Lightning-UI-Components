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

import { Base, Column } from '@lightningjs/ui-components';
import BackgroundSwitcher from '../components/BackgroundSwitcher';
import { titleRowFormatter } from '../formatters';

export default class Browse extends Base {
  static get __componentName() {
    return 'Browse';
  }

  static _template() {
    return {
      Hero: {
        type: BackgroundSwitcher
      },
      Results: {
        subTheme: 'rowSubTheme',
        type: Column,
        boundsMargin: [ 200, 200, 0, 0 ],
        style: {
          itemSpacing: 100 // Add more space between Rows of content
        },
        signals: {
          selectedChange: '_onSelectedChange'
        },
        zIndex: 100
      }
    };
  }

  static get tags() {
    return ['Hero', 'Results'];
  }

  get _stageH() {
    return this.stage.h / this.stage.getRenderPrecision();
  }

  _update() {
    this._Hero.visible = !!this.theme.features?.browseHero;
    this._Results.patch({
      y: this.theme.features?.browseHero
        ? this._stageH * 0.65
        : this.theme.layout.safe + this.theme.layout.marginY,
      x: this.theme.layout.marginX
    });
  }

  _onDataProvided() {
    this._Results.items = titleRowFormatter(this.data);
  }

  $updateHero() {
    const selected = this._Results.items?.[0]?.selected;
    this._Hero.patch({
      src: selected?.originalData?.backdrop_path,
      title: selected?.originalData?.title,
      description: selected?.originalData?.overview
    });
  }

  _onSelectedChange() {
    const selectedColIndex = this._Results.selectedIndex;
    // Hide top navigation when the column scrolls down
    this.fireAncestors('$navigationVisible', selectedColIndex === 0);
    // Move column to the top if the first item in the column does not have focus
    this._Results.smooth = {
      y:
        selectedColIndex > 0
          ? this.theme.layout.marginY
          : this.theme.features?.browseHero
          ? this._stageH * 0.65
          : this.theme.layout.safe + this.theme.layout.marginY
    };

    // Fade out Hero if the first item in the column does not have focus
    this._Hero.smooth = { alpha: selectedColIndex > 0 ? 0.001 : 1 };
  }

  _handleBack() {
    return; // Make sure app does not close when escape is pressed
  }

  _getFocused() {
    return this._Results;
  }
}
