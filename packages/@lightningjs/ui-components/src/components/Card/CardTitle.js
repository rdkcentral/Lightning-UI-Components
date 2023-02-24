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

import Card from './Card.js';
import TextBox from '../TextBox';
import * as styles from './CardTitle.styles';

export default class CardTitle extends Card {
  static get __componentName() {
    return 'CardTitle';
  }

  static get __themeStyle() {
    return styles;
  }

  static get tags() {
    return [...super.tags, 'Description', 'Details'];
  }

  static get properties() {
    return [...super.properties, 'description', 'details'];
  }

  static _template() {
    return {
      ...super._template(),
      Description: {
        type: TextBox,
        signals: {
          textBoxChanged: '_updateDescriptionPosition'
        }
      },
      Details: {
        type: TextBox,
        mountY: 1
      }
    };
  }

  _update() {
    super._update();
    this._updateDescription();
    this._updateDescriptionPosition();
    this._updateDetails();
    this._updateDetailsPosition();
  }

  _updateDescription() {
    this._Description.patch({
      content: this.description,
      style: {
        textStyle: {
          ...this.style.descriptionTextStyle,
          wordWrapWidth: this._calculateTextWidth()
        }
      }
    });
  }

  _updateDescriptionPosition() {
    this._Description.x = this.style.paddingHorizontal;
    this._Description.y = this.style.paddingVertical + this._Title.h;
  }

  _updateDetails() {
    this._Details.patch({
      content: this.details,
      style: {
        textStyle: {
          ...this.style.detailsTextStyle,
          wordWrapWidth: this._calculateTextWidth()
        }
      }
    });
  }

  _updateDetailsPosition() {
    this._Details.x = this.style.paddingHorizontal;
    this._Details.y = this.h - this.style.paddingVertical;
  }

  set announce(announce) {
    super.announce = announce;
  }

  get announce() {
    return (
      this._announce || [
        this._Title && this._Title.announce,
        this._Description && this._Description.announce,
        this._Details && this._Details.announce
      ]
    );
  }
}
