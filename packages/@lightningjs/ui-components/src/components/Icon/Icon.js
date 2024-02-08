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

import lng from '@lightningjs/core';
import Base from '../Base';
import * as styles from './Icon.styles.js';
import context from '../../globals/context/index.js';
import { getValidColor } from '../../utils';
import CustomImageTexture from '../../textures/CustomImageTexture';

/**
 * Icon component that displays different types of icons, supporting SVGs and images.
 * @extends Base
 */
export default class Icon extends Base {
  /**
   * Returns the name of the component for theming support.
   * @returns {string} The name of the component.
   */
  static get __componentName() {
    return 'Icon';
  }

  /**
   * Returns the theme styles for the Icon component.
   * @returns {object} The theme styles object.
   */
  static get __themeStyle() {
    return styles;
  }

  /**
   * Returns the list of properties that can be set on the Icon component. Used by withUpdates
   * @returns {Array} An array of property names.
   */
  static get properties() {
    return ['icon', 'fixed', 'color'];
  }

  _init() {
    /**
     * Event listener for the 'txLoaded' event to handle icon texture loading.
     *
     * @listens 'txLoaded'
     */
    this.on('txLoaded', () => {
      if (!this.fixed) {
        this._notify.bind(this)(); // Notify parent component of the item change if not fixed.
      }
    });

    /**
     * Event listener for the 'txError' event to handle icon texture loading errors.
     *
     * @listens 'txError'
     * @param {Error} error - The error object containing information about the loading error.
     */
    this.on('txError', this._handleTxtError.bind(this));
  }

  /**
   * Returns the color to be used for the icon.
   *
   * @private
   * @returns {string} The color value.
   */
  _getColor() {
    return this._color || this.style.color;
  }

  /**
   * Notifies the parent and ancestors of item changes in the Icon component.
   *
   * @private
   */
  _notify() {
    this.w = this.finalW;
    this.h = this.finalH;
    this.signal('itemChanged', this); // Emit 'itemChanged' signal to notify parent.
    this.fireAncestors('$itemChanged'); // Emit '$itemChanged' signal to notify ancestors.
  }

  /**
   * Handles the error when loading the icon texture.
   *
   * @private
   * @param {Error} error - The error object containing information about the loading error.
   */
  _handleTxtError() {
    context.error(`Unable to load icon ${this._icon}`);
    this._icon = null;
    this.texture = null;
  }

  /**
   * Updates the Icon component based on the provided icon.
   *
   * @private
   */
  _update() {
    if (!this._icon) {
      this.texture = null; // If there's no icon, clear the texture.
      return;
    }
    this.patch(this._iconPatch); // Apply the icon patch.
  }

  /**
   * Generates the patch based on the icon type (SVG, image, etc.) and other properties.
   *
   * @private
   * @returns {object} The patch object to update the Icon component.
   */
  get _iconPatch() {
    const [isSvgTag, isSvgURI] = [/^<svg.*<\/svg>$/, /\.svg$/].map(regex =>
      RegExp.prototype.test.bind(regex)
    );
    let texture;
    const svgTag = isSvgTag(this.icon);
    const svgURI = isSvgURI(this.icon);

    if (svgTag) {
      texture = lng.Tools.getSvgTexture(
        `data:image/svg+xml,${encodeURIComponent(this.icon)}`,
        this.w,
        this.h
      );
    } else if (svgURI) {
      texture = lng.Tools.getSvgTexture(this.icon, this.w, this.h);
    } else {
      texture = {
        type: CustomImageTexture,
        w: this.w,
        h: this.h,
        src: this.icon
      };
    }

    const color = getValidColor(this._color || this.style.color);
    const shader =
      this.radius || this.style.radius
        ? {
            radius: this.radius || this.style.radius,
            type: lng.shaders.RoundedRectangle
          }
        : undefined;

    return {
      texture,
      shader,
      ...(color
        ? { colorUl: color, colorUr: color, colorBl: color, colorBr: color }
        : {})
    };
  }
}
