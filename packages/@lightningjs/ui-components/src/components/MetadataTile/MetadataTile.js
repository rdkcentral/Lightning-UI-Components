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

import MetadataBase from '../MetadataBase';
import * as styles from './MetadataTile.styles';

export default class MetadataTile extends MetadataBase {
  static get __componentName() {
    return 'MetadataTile';
  }

  static get __themeStyle() {
    return styles;
  }

  _updateDetails() {
    if (!this.details && !this._Details) {
      return;
    }
    if (this.description && this._Details) {
      this._Details.patch({ content: '' });
      this._Details.alpha = 0;
      this._Details.visible = false;
    } else {
      super._updateDetails();
    }
  }

  _updateDetailsLayout({ h }) {
    if (!this.details && !this._Details) {
      return;
    }
    if (this._Details && !this.description) {
      this._DetailsWrapper.h = h;
      this._DetailsWrapper.alpha = this.style.alpha;
    } else {
      this._DetailsWrapper.h = 0;
    }
  }

  set announce(announce) {
    super.announce = announce;
  }

  get announce() {
    return (
      this._announce || [
        this._Title && this._Title.announce,
        (this._Details && this._Details.announce) ||
          (this._Description && this._Description.announce),
        this.logoTitle
      ]
    );
  }

  _textH() {
    const titleH = (this.title && this._Title && this._Title.h) || 0;
    const detailsH =
      (this.details &&
        this._Details &&
        this._Details.visible &&
        this._DetailsWrapper.h) ||
      0;
    const descriptionH =
      (this.description && this._Description && this._Description.h) || 0;
    return titleH + detailsH + descriptionH;
  }
}
