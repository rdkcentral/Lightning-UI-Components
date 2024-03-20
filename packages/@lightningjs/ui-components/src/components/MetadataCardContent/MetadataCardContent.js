﻿/**
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
import TextBox from '../TextBox';
import Provider from '../Provider';
import FadeShader from '../../shaders/FadeShader';
import * as styles from './MetadataCardContent.styles';

export default class MetadataCardContent extends MetadataBase {
  static get __componentName() {
    return 'MetadataCardContent';
  }

  static get __themeStyle() {
    return styles;
  }

  static _template() {
    return {
      Text: {
        flex: { direction: 'column', justifyContent: 'flex-start' },
        Title: {
          type: TextBox
        },
        Description: {
          type: TextBox
        },
        DescriptionDetails: {
          type: TextBox
        }
      },
      DetailsWrapper: {
        DetailsFader: {
          Details: {
            mountY: 0.5,
            type: TextBox,
            signals: {
              textBoxChanged: '_resolveDetails'
            }
          }
        },
        Provider: {
          mount: 1,
          type: Provider,
          signals: {
            providerChanged: '_resolveProvider'
          }
        }
      }
    };
  }

  static get properties() {
    return [
      'description',
      'descriptionDetails',
      'details',
      'provider',
      'title'
    ];
  }

  static get tags() {
    return [
      'Text',
      {
        name: 'Title',
        path: 'Text.Title'
      },
      {
        name: 'Description',
        path: 'Text.Description'
      },
      {
        name: 'DescriptionDetails',
        path: 'Text.DescriptionDetails'
      },
      'DetailsWrapper',
      {
        name: 'DetailsFader',
        path: 'DetailsWrapper.DetailsFader'
      },
      {
        name: 'Details',
        path: 'DetailsWrapper.DetailsFader.Details'
      },
      {
        name: 'Provider',
        path: 'DetailsWrapper.Provider'
      }
    ];
  }

  _setDetails(details) {
    if (details) {
      this._detailsPromise = new Promise(resolve => {
        this._detailsPromiseResolver = resolve;
      });
    } else {
      this._detailsPromise = undefined;
    }
    return details;
  }

  _setProvider(provider) {
    if (provider) {
      this._providerPromise = new Promise(resolve => {
        this._providerPromiseResolver = resolve;
      });
    } else {
      this._providerPromise = undefined;
    }
    return provider;
  }

  async _update() {
    this._updateLines();
    this._updateProvider();
    await Promise.all(
      [this._detailsPromise, this._providerPromise].filter(Boolean)
    );
    this._updatePositions();
  }

  _updateLines() {
    this._Text.w = this.w;
    this._updateTitle();
    this._updateDescription();
    this._updateDescriptionDetails();
    this._updateDetails();
  }

  _updateDescription() {
    this._Description.patch({
      content: this.description,
      style: {
        textStyle: {
          ...this.style.descriptionTextStyle,
          wordWrap: true,
          wordWrapWidth: this._Text.w
        }
      }
    });
  }

  _updateDescriptionDetails() {
    this._DescriptionDetails.patch({
      content: this.descriptionDetails,
      style: {
        textStyle: {
          ...this.style.descriptionDetailsTextStyle,
          maxLines: 1,
          wordWrap: true,
          wordWrapWidth: this._Text.w
        }
      },
      y: this.style.descriptionDetailsStyle.paddingY
    });
  }

  _updateDetails() {
    const maxWidth = this._detailsMaxW;
    this._Details.patch({
      content: this.details,
      style: {
        textStyle: {
          ...this.style.detailsTextStyle,
          wordWrap: true,
          maxLines: 1, // sets default for details
          wordWrapWidth: maxWidth + this.style.fadeWidth / 2
        }
      }
    });
    if (this._Details.finalW > maxWidth) {
      this._DetailsFader.patch({
        w: maxWidth + this.style.fadeWidth / 2,
        shader: {
          type: FadeShader,
          positionLeft: 0,
          positionRight: this.style.fadeWidth
        }
      });
    } else {
      this._DetailsFader.shader = undefined;
    }
  }

  _resolveDetails() {
    this._detailsPromiseResolver && this._detailsPromiseResolver();
    this._updatePositions();
  }

  _updateProvider() {
    if (this.provider) {
      this._Provider.patch({
        mode: this.mode,
        ...this.provider,
        style: this.style.provider
      });
    }
  }

  _resolveProvider() {
    this._providerPromiseResolver && this._providerPromiseResolver();
    this._updatePositions();
  }

  _updatePositions() {
    this._Text.h = this._textH;
    this._Text.w = this._textW;

    this._DetailsWrapper.w = this._textW;
    this._DetailsWrapper.h = Math.max(this._providerH, this._Details.h);
    this._DetailsWrapper.y = this.h - this._DetailsWrapper.h;

    this._Details.y = this._DetailsWrapper.h / 2;

    this._Provider.x = this._DetailsWrapper.w - this._providerW;
    this._Provider.y = this._DetailsWrapper.h - this._providerH;
  }

  get _textW() {
    return this.w;
  }

  get _textH() {
    return this.h - this._providerH;
  }

  get _providerW() {
    return this._Provider.w;
  }

  get _providerH() {
    return this._Provider._Row._Items.h;
  }

  get _detailsMaxW() {
    return this.w - this._providerW - this.style.fadeWidth / 2;
  }

  set announce(announce) {
    super.announce = announce;
  }

  get announce() {
    return (
      this._announce || [
        this._Title && this._Title.announce,
        this._Description && this._Description.announce,
        this._DescriptionDetails && this._DescriptionDetails.announce,
        this._Details && this._Details.announce,
        this._Provider && this._Provider.announce
      ]
    );
  }
}
