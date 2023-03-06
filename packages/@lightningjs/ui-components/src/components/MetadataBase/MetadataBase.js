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

import Base from '../Base';
import Icon from '../Icon';
import TextBox from '../TextBox';
import { FadeShader } from '../../shaders';
import { withMarqueeSync } from '../../mixins';
import * as styles from './MetadataBase.styles';

class MetadataBase extends Base {
  static get __componentName() {
    return 'MetadataBase';
  }

  static get __themeStyle() {
    return styles;
  }

  static _template() {
    return {
      Text: {
        flex: { direction: 'column', justifyContent: 'flex-start' },
        Title: {
          type: TextBox,
          signals: {
            textBoxChanged: '_titleLoaded'
          }
        },
        SubtitleWrapper: {
          Subtitle: {
            type: TextBox,
            signals: {
              textBoxChanged: '_subtitleLoaded'
            }
          }
        },
        Description: {
          type: TextBox,
          signals: {
            textBoxChanged: '_descriptionLoaded'
          }
        }
      },
      Logo: {
        flexItem: false,
        type: Icon
      }
    };
  }

  _init() {
    this.requestUpdate(true);
  }

  static get properties() {
    return [
      'description',
      'logo',
      'logoHeight',
      'logoPosition',
      'logoTitle',
      'logoWidth',
      'subtitle',
      'title',
      'marquee'
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
        name: 'SubtitleWrapper',
        path: 'Text.SubtitleWrapper'
      },
      {
        name: 'Subtitle',
        path: 'Text.SubtitleWrapper.Subtitle'
      },
      {
        name: 'Description',
        path: 'Text.Description'
      },
      'Logo'
    ];
  }

  _titleLoaded() {
    this._updateLayout();
  }

  _subtitleLoaded({ w, h }) {
    this._updateSubtitleLayout({ w, h });
    this._updateLayout();
  }

  _descriptionLoaded() {
    this._updateLayout();
  }

  _updateSubtitleLayout({ w, h }) {
    this._SubtitleWrapper.alpha = this.style.alpha;
    this._SubtitleWrapper.w = w;
    this._SubtitleWrapper.h = h;
  }

  _update() {
    this._updateLines();
    this._updateLayout();
  }

  _updateLines() {
    this._Text.w = this._textW();
    this._updateTitle();
    this._updateSubtitle();
    this._updateDescription();
  }

  _updateLayout() {
    this._updatePositions();
    this._updateMetadataHeight();
    this._updateLogo();
  }

  _updatePositions() {
    this._Text.h = this._textH();
    this._Text.x =
      this.logo && this.logoPosition === 'left'
        ? this.logoWidth + this.style.logoPadding
        : 0;
    this._Text.y = (this.h - this._Text.h) / 2;
  }

  _updateMetadataHeight() {
    const newH = Math.max(this.logoHeight, this._Text.h);
    if (this.h !== newH) {
      this.h = newH;
      this.signal('updateComponentDimensions');
    }
  }

  _updateTitle() {
    this._Title.patch({
      content: this.title,
      marquee: this.marquee,
      style: {
        textStyle: {
          ...this.style.titleTextStyle,
          maxLines: 1,
          wordWrap: true,
          wordWrapWidth: this._Text.w
        }
      }
    });
  }

  resetMarquee() {
    if (this.marquee) {
      if (this.title) {
        this._Title.toggleMarquee();
      }
      if (this.description) {
        this._Description.toggleMarquee();
      }
    }
  }

  _updateSubtitle() {
    this._Subtitle.patch({
      content: this.subtitle,
      style: { textStyle: this.style.subtitleTextStyle },
      justify: 'flex-start'
    });
    if (this._Subtitle.finalW > this._textW()) {
      this._SubtitleWrapper.patch({
        w: this._textW() + this.style.fadeWidth / 2,
        shader: {
          type: FadeShader,
          positionLeft: 0,
          positionRight: this.style.fadeWidth
        },
        rtt: true
      });
    } else {
      this._SubtitleWrapper.shader = undefined;
    }
    this._SubtitleWrapper.visible = this.subtitle ? true : false;
    this._SubtitleWrapper.alpha = this.style.alpha;
  }

  _updateDescription() {
    this._Description.patch({
      content: this.description,
      marquee: this.marquee,
      style: {
        textStyle: {
          ...this.style.descriptionTextStyle,
          maxLines: 1,
          wordWrap: true,
          wordWrapWidth: this._Text.w
        }
      }
    });
  }

  _updateLogo() {
    this.logoPosition = this.logoPosition || 'right';
    this._Logo.patch({
      type: Icon,
      w: this.logoWidth,
      h: this.logoHeight,
      icon: this.logo,
      alpha: this.style.alpha
    });

    this._Logo.x = this.logoPosition === 'left' ? 0 : this.w - this._Logo.w;
    this._Logo.y = (this.h - this.logoHeight) / 2;
  }

  _textW() {
    return this.w - (this.logo ? this.logoWidth + this.style.logoPadding : 0);
  }

  _textH() {
    const titleH = (this.title && this._Title && this._Title.h) || 0;
    const subtitleH =
      (this.subtitle && this._SubtitleWrapper && this._SubtitleWrapper.h) || 0;
    const descriptionH =
      (this.description && this._Description && this._Description.h) || 0;
    return titleH + subtitleH + descriptionH;
  }

  _getLogoWidth() {
    return this._logoWidth !== undefined
      ? this._logoWidth
      : this.style.logoWidth;
  }

  _setLogoWidth(w) {
    return w !== undefined ? w : this.logoWidth;
  }

  _getLogoHeight() {
    return this._logoHeight !== undefined
      ? this._logoHeight
      : this.style.logoHeight;
  }

  _setLogoHeight(h) {
    return h !== undefined ? h : this.logoHeight;
  }

  get syncArray() {
    return [
      ...(this.title ? [this._Title] : []),
      ...(this.description ? [this._Description] : []),
      ...(this.subtitle ? [this._Subtitle] : [])
    ];
  }

  set announce(announce) {
    super.announce = announce;
  }

  get announce() {
    return (
      this._announce || [
        this._Title && this._Title.announce,
        this._Subtitle && this._Subtitle.announce,
        this._Description && this._Description.announce,
        this.logoTitle
      ]
    );
  }
}

export default withMarqueeSync(MetadataBase);
