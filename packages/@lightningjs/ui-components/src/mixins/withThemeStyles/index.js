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

import StyleManager from './StyleManager';
import { updateManager } from '../../globals';
import { context } from '../../globals';
import { getComponentConfig, getSubTheme } from './utils';
import { capitalizeFirstLetter } from '../../utils';
import utils from '../../utils';
/**
 * A higher-order function that returns a class with theme styles.
 * @param {function} Base - The base class to extend.
 * @param {object} mixinStyle - The mixin style to add to the component.
 * @returns {function} A class that extends the base class with theme styles.
 */
export default function withThemeStyles(Base, mixinStyle = {}) {
  return class extends Base {
    _construct() {
      if (this._withThemeStylesSetupComplete) {
        // Make sure this runs ony once if being used on a component that extends another component that is utilizing withThemeStyles
        super._construct();
        return;
      }
      super._construct();

      this._hSetByUser = false;
      this._wSetByUser = false;

      this._styleManager = new StyleManager({ component: this });
      this._style = this._styleManager.style; // Set the style for the first time. After this is will be updated by events

      this._updatePropDefaults();
      this._styleManager.on('styleUpdate', () => {
        this._style = this._styleManager.style;
        this._updatePropDefaults();
        this.queueThemeUpdate();
      });

      this._whenEnabled = new Promise(resolve => {
        this._whenEnabledResolver = resolve;
      });

      this._withThemeStylesSetupComplete = true;
    }

    /**
     * Checks for subThemes on _setup lifecycle event to allow the component to traverse the tree to find child theme properties.
     * @private
     * @returns {void}
     */
    _setup() {
      super._setup && super._setup();
      this._targetSubTheme = getSubTheme(this);
      if (this._targetSubTheme) {
        this._styleManager.clearListeners();
        this._styleManager.setupListeners();
        this._styleManager.clearStyleCache();
        this._styleManager.clearSourceCache();
        this._styleManager.update();
      }
    }

    _firstEnable() {
      this._readyForUpdates = true;
      this._whenEnabledResolver();
      updateManager.deleteRequestUpdate(this);
      this.queueThemeUpdate();
      super._firstEnable && super._firstEnable();
    }

    _updatePropDefaults() {
      // Add support for properties passed through the theme
      const componentConfigProps = this._styleManager.props || {};
      if (
        Object.keys(componentConfigProps).length &&
        this.constructor.properties &&
        this.constructor.properties.length
      ) {
        Object.keys(componentConfigProps).forEach(key => {
          if (this.constructor.properties.includes(key)) {
            this[`_${key}`] =
              typeof this[`_${key}`] === 'object' &&
              this[`_${key}`] !== null &&
              !Array.isArray(this[`_${key}`])
                ? utils.clone(this[`_${key}`] || {}, componentConfigProps[key])
                : componentConfigProps[key];
          }
        });
      }
    }

    /**
     * On component attach, ensures the StyleManager has been reinitialized if it was previously destroyed in detach.
     * @private
     * @returns {void}
     */
    _attach() {
      super._attach();
      if (!this._styleManager.isActive) {
        this._styleManager.init(this);
      }
    }

    /**
     * Detaches the component and destroys the style manager.
     * @private
     * @returns {void}
     */
    _detach() {
      super._detach();
      this._styleManager.destroy();
    }

    /**
     * Updates the mode to 'unfocused' when the component is unfocused.
     * @private
     * @internal
     * @returns {void}
     */
    _unfocus() {
      if (this._isFocusedMode) this.mode = 'unfocused';
      super._unfocus();
    }

    /**
     * Updates the mode to 'focused' when the component is focused.
     * @private
     * @returns {void}
     */
    _focus() {
      if (!this._isDisabledMode) this.mode = 'focused';
      super._focus();
    }

    /**
     * Checks if dimensions need updating, and updates if necessary.
     * Fixes mount issues if height is controlled by a component's style alone.
     * Setters for w/h will set the wSetByUser and hSetByUser flag to block this functionality and allow customization.
     * @private
     * @returns {void}
     */
    _checkDimensionUpdates() {
      let dimensionUpdateRequired = false;

      if (!this._wSetByUser && this.style.w && this._w !== this.style.w) {
        this._w = this.style.w;
        dimensionUpdateRequired = true;
      }

      if (!this._hSetByUser && this.style.h && this._h !== this.style.h) {
        this._h = this.style.h;
        dimensionUpdateRequired = true;
      }

      if (dimensionUpdateRequired) {
        this._updateDimensions();
      }
    }

    /**
     * Called by the update manager to trigger the _update lifecycle.
     * If `queueRequestUpdate` is undefined, then it's OK to call `_update()` directly because
     * the component does not have the `withUpdates` mixin, and hence `requestUpdate()` will not be defined either.
     * This check allows this mixin to work without `withUpdates`.
     * @private
     * @returns {void}
     */
    _updateThemeComponent() {
      if (this._readyForUpdates) {
        if (!this.style) return;
        if (!this._isAttached()) return;
        this._checkDimensionUpdates();
        this.queueRequestUpdate
          ? this.queueRequestUpdate()
          : this._update && this._update();
        this._updateItemLayout && this._updateItemLayout();
      }
    }

    /**
     * Queues component for update by the Global Update Manager.
     * @returns {void}
     */
    queueThemeUpdate() {
      updateManager.addUpdateTheme(this);
    }

    static get name() {
      return Base.name;
    }

    static get __componentName() {
      if (!super.__componentName) {
        throw new Error(
          `A valid static __componentName property is required for theming to work properly. Please add this to the ${this.constructor.name} class.`
        );
      }
      return super.__componentName;
    }

    static get __mixinStyle() {
      return mixinStyle;
    }

    /**
     * Reference to the global theme
     * @return {object}
     */
    get theme() {
      const subTheme =
        this._targetSubTheme && context.getSubTheme(this._targetSubTheme);
      return subTheme || context.theme;
    }

    /**
     * Set component level styles
     * @param {object} v - The styles to set, mode, and tone are not allowed
     */
    set style(v) {
      if (Object.prototype.toString.call(v) !== '[object Object]') {
        context.error('style must be an object');
        return;
      }
      this._componentLevelStyle = v;
      this._styleManager.clearStyleCache();
      this._styleManager.update();
    }

    /**
     * Get component level styles
     * @return {object}
     */
    get style() {
      return this._style;
    }

    /**
     * Get component level styles
     * @return {object}
     */
    get _componentStyle() {
      /** No longer supported */
      context.info(
        '_componentStyle will soon be deprecated. Please use Component.style'
      );
      return this._style;
    }

    /**
     * Set component styleConfig
     * @param {object} v - Special configuration rules to override styles
     */
    set styleConfig(v) {
      context.info(
        'style config is deprecated. Please use style = { base: {}, tone: {}, mode: {} }'
      );
      this._styleConfig = v;
      this._styleManager.update();
    }

    /**
     * Get component styleConfig
     * @return {object}
     */
    get styleConfig() {
      return this._styleConfig;
    }

    /**
     * Theme configuration for overrides and defaults
     * @return {object}
     */
    get _componentConfig() {
      return getComponentConfig(this);
    }

    /**
     * Get the mode property
     * @return {string}
     */
    get mode() {
      return this._mode || this._componentConfig?.mode || 'unfocused';
    }

    /**
     * Set the mode property
     * @param {string} v - The mode value to set
     */
    set mode(v) {
      if (typeof v !== 'string' || this._mode === v) return;
      this._mode = v;
      const event = this[`on${capitalizeFirstLetter(v)}`];
      if (event && typeof event === 'function') event.call(this);
      this._styleManager.update();
    }

    /**
     * Get the tone property
     * @return {string}
     */
    get tone() {
      return this._tone || this._componentConfig.tone || 'neutral';
    }

    /**
     * Set the tone property
     * @param {string} value - The tone value to set
     */
    set tone(v) {
      if (typeof v !== 'string' || this._tone === v) return;
      this._tone = v;
      this._styleManager.update();
    }

    /**
     * Allow for w to be overwritten by user if also in component's style file
     * @return {number}
     */
    get w() {
      return (this._wSetByUser && this._w) || this.style?.w || 0;
    }

    /**
     * Set the w property
     * @param {number} v - The w value to set
     */
    set w(v) {
      if (this._w === v) return;
      super.w = v;
      this._wSetByUser = true;
      this._styleManager.clearStyleCache();
      this._styleManager.update();
    }

    /**
     * Get the h property
     * @return {number}
     */
    get h() {
      return (this._hSetByUser && this._h) || this.style?.h || this._h || 0;
    }

    /**
     * Set the h property
     * @param {number} v - The h value to set
     */
    set h(v) {
      if (this._h === v) return;
      super.h = v;
      this._hSetByUser = true;
      this._styleManager.clearStyleCache();
      this._styleManager.update();
    }
  };
}
