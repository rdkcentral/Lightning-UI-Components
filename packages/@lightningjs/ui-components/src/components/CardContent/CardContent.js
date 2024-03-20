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

import Card from '../Card';
import utils from '../../utils';
import Tile from '../Tile';
import MetadataCardContent from '../MetadataCardContent';
import * as styles from './CardContent.styles';

export default class CardContent extends Card {
  static get __componentName() {
    return 'CardContent';
  }

  static get __themeStyle() {
    return styles;
  }

  static _template() {
    return {
      ...super._template(),
      Tile: { type: Tile }
    };
  }

  static get properties() {
    return [
      ...super.properties,
      'tile',
      'metadata',
      'orientation',
      'collapseToMetadata',
      'shouldCollapse',
      'src'
    ];
  }

  static get tags() {
    return [...super.tags, 'Metadata', 'Tile'];
  }

  static get aliasStyles() {
    return [
      { prev: 'expandedW', curr: 'expandedWidth' },
      { prev: 'expandedH', curr: 'expandedHeight' }
    ];
  }

  _update() {
    this._updateSize();
    this._updateTile();
    this._updateMetadata();
    super._update();
  }

  _updateTitle() {}

  _updateTitlePosition() {}

  _updateTile() {
    let w = this.style.imageSize.w;
    let h = this.style.expandedHeight;
    const radius =
      Array.isArray(this.style.radius) && this.style.radius.length === 4
        ? this.style.radius
        : Array(4).fill(this.style.radius);

    let tileRadius = radius;

    if (!this._collapse) {
      tileRadius =
        this._orientation === 'horizontal'
          ? [radius[0], 0, 0, radius[3]]
          : [radius[0], radius[1], 0, 0];
    }

    if (this._orientation !== 'horizontal') {
      w = this.style.expandedWidth;
      h = this.style.imageSize.h;
    }

    // ensure a nested tile artwork src takes precedence over the class's src setter,
    // but that if src is undefined in both the setter and tile artwork object,
    // we don't incorrectly pass "src: undefined" to the Tile component (and in turn, Artwork)
    let tile = this.tile;
    if (this.src) {
      tile = utils.clone({ src: this.src }, this.tile);
    }

    this._Tile.patch({
      w,
      h,
      ...tile,
      style: {
        ...(tile.style || {}),
        radius: tileRadius
      },
      persistentMetadata: true,
      alpha: this._shouldShowTile ? 1 : 0
    });
  }

  _updateMetadata() {
    const metadataPatch = {
      ...this.metadata,
      ...this._metadataPosition,
      ...this._metadataDimensions,
      mode: this.mode,
      alpha: this._shouldShowMetadata ? 1 : 0,
      style: this.style.metadata
    };

    if (this.style.marqueeOnFocus) {
      metadataPatch.marquee = this._isFocusedMode;
    }

    if (!this._Metadata) {
      metadataPatch.type = MetadataCardContent;
    }

    this.patch({ Metadata: metadataPatch });
  }

  _updateSize() {
    let w = this.style.expandedWidth;
    let h = this.style.expandedHeight;
    if (this._collapse) {
      if (this._orientation === 'horizontal') {
        w = this._collapseW;
      } else {
        h = this._collapseH;
      }
    }
    this.w = w;
    this.h = h;
  }

  _getSrc() {
    return (
      (this.tile &&
        ((this.tile.artwork && this.tile.artwork.src) || this.tile.src)) ||
      this._src
    );
  }

  get _metadataDimensions() {
    const paddingHorizontal = this.style.paddingHorizontal * 2;
    const paddingVertical = this.style.paddingVertical * 2;

    let w =
      this.style.expandedWidth - this.style.imageSize.w - paddingHorizontal;
    let h = this.style.expandedHeight - paddingVertical;

    if (this.orientation !== 'horizontal') {
      w = this.style.expandedWidth - paddingHorizontal;
      h = this.style.expandedHeight - this.style.imageSize.h - paddingVertical;
    }
    return { w, h };
  }

  get _metadataPosition() {
    const paddingHorizontal = this.style.paddingHorizontal;
    const paddingVertical = this.style.paddingVertical;

    let x = paddingHorizontal + (this._collapse ? 0 : this.style.imageSize.w);
    let y = paddingVertical;

    if (this.orientation !== 'horizontal') {
      x = paddingHorizontal;
      y = paddingVertical + (this._collapse ? 0 : this.style.imageSize.h);
    }

    return { x, y };
  }

  get _shouldShowMetadata() {
    return !this._collapse || this.collapseToMetadata;
  }

  get _shouldShowTile() {
    return !this._collapse || (this._collapse && !this.collapseToMetadata);
  }

  get _collapse() {
    return this.shouldCollapse && !this._isFocusedMode;
  }

  get _collapseW() {
    return this.collapseToMetadata
      ? this.style.expandedWidth - this.style.imageSize.w
      : this.style.imageSize.w;
  }

  get _collapseH() {
    return this.collapseToMetadata
      ? this.style.expandedHeight - this.style.imageSize.h
      : this.style.imageSize.h;
  }

  set announce(announce) {
    super.announce = announce;
  }

  get announce() {
    return (
      this._announce || [
        this._Metadata && this._Metadata.announce,
        this._Tile && this._Tile.announce
      ]
    );
  }
}
