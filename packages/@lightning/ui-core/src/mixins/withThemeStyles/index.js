import { context, updateManager } from '../../globals/index.js';
import { getValFromObjPath, clone, getHexColor } from '../../utils/index.js';

/** Will replace withStyles */
export default function withThemeStyles(Base, mixinStyle) {
  return class extends Base {
    static get name() {
      return Base.name;
    }

    static get __mixinStyle() {
      return mixinStyle;
    }

    static get __componentName() {
      if (super.__componentName) return super.__componentName;
      throw new Error(
        `A valid static __componentName property is required for theming to work properly. Please add this to the ${this.constructor.name} class.`
      );
    }

    _construct() {
      if (this._withThemeStylesSetupComplete) {
        // Make sure this runs ony once if being used on a component that extends another component that is utilizing withThemeStyles
        super._construct();
        return;
      }
      this._updateThemeBound = this._updateTheme.bind(this);
      this._setupListeners();
      // Set default values
      this._mode = 'unfocused';
      this._componentStyleCache = {};
      this._componentLevelStyleSource = {};
      this._withThemeStylesSetupComplete = true;
      // Create an object of all possible values and cache it
      this._createThemeDefaults();
      this._generateComponentStyleSource();
      super._construct();
    }

    _createThemeDefaults() {
      (this.constructor?.properties || []).forEach(prop => {
        if (this._componentConfig?.[prop] && !this[`_${prop}`]) {
          this[`_${prop}`] = this._componentConfig[prop];
        }
      });
    }

    /*
     *
     * Theme configuration for overrides and defaults
     */
    get _componentConfig() {
      // TODO: Add caching optimization
      if (!this.__prototypeChain)
        return (
          this.theme?.componentConfig?.[this.constructor.__componentName] || {}
        );
      return Array.from(this.__prototypeChain)
        .reverse()
        .reduce((acc, curr) => {
          return clone(acc, this.theme?.componentConfig?.[curr] || {});
        }, {});
    }

    /**
     *
     * Allows themes to override component values
     */
    get _styleOverrides() {
      return clone(this.styleConfig || {}, this._componentConfig?.styleConfig);
    }

    /**
     * Must check for subThemes on _setup lifecycle event to allow the component to traverse the tree to find child theme properties
     */

    _setup() {
      super._setup && super._setup();
      this._targetSubTheme = this._getSubTheme();
      if (this._targetSubTheme) {
        this._clearComponentStyleCache();
        this._generateComponentStyleSource();
        this.queueThemeUpdate.call(this);
      }
    }

    /**
     * Traverse the tree to check if any parent components are requesting a child theme
     * @private
     * @return {string}
     */
    _getSubTheme() {
      let parent = this.p;
      while (parent && !parent.subTheme) {
        parent = parent.parent;
      }
      return (parent && parent.subTheme) || undefined;
    }

    get _modeStyle() {
      return this._componentStyleSource?.mode?.[this.mode] || {};
    }

    get _toneStyle() {
      return this._componentStyleSource?.tone?.[this.tone] || {};
    }

    /**
     *
     * @return {object}
     */
    get _themeLevelStyle() {
      return this._componentConfig?.style || {};
    }

    /**
     *
     * @return {object}
     */
    get _componentLevelStyle() {
      return this._componentLevelStyleSource || {};
    }

    /**
     *
     * Basis for all theming. This is the final object to be referenced in the component that will dictate how it will look according to the rules set in place
     *
     * Objects are deep merged in this order
     *
     * 1. Tone - Responsible for color schemes `neutral`, `inverse`, `brand`
     * 2. Mode - unfocused (default), focused, disabled, selected
     * 3. Tone - Mode specific, any tone values can override modes if named in this format [modeName]Value (camelCase) ex. focusedBorderWidth: 10
     * 4. ThemeLevel - styles specified in theme.componentStyle[MyComponent] = {}. Also supports mode overrides
     * 5. ComponentLevel - styles set on the component itself ex. MyComponent.style = {radius: 10}
     *
     * @return {object}
     */
    get _componentStyle() {
      if (this._componentStyleCache[this.mode]) {
        return this._componentStyleCache[this.mode];
      }

      let v = this._componentStyleSource.base || {};

      // Mode style
      if (this._modeStyle) {
        v = clone(v, this._modeStyle);
      }

      // Tone style
      if (this._toneStyle) {
        v = clone(v, this._toneStyle);
      }

      // Theme Level style example: this.theme.componentStyle.foo = 'bar'
      if (this._themeLevelStyle) {
        v = clone(v, this._themeLevelStyle);
      }

      // Component Level style example: MyComponent.style.foo = 'bar'
      if (this._componentLevelStyle) {
        v = clone(v, this._componentLevelStyle);
      }

      // Fixes mount issues if height is controled by a component's style alone setters for w/h will set the wSetByUser and hSetByUser flag to block this functionality and allow customization
      let dimensionUpdateRequired = false;

      // Fixes mount issues if height is controled by a component's style alone setters for w/h will set the wSetByUser and hSetByUser flag to block this functionality and allow customization
      if (
        (dimensionUpdateRequired = !this._wSetByUser && v.w && this._w !== v.w)
      ) {
        this._w = v.w;
      }

      if (
        (dimensionUpdateRequired = !this._hSetByUser && v.h && this._h !== v.h)
      ) {
        this._h = v.h;
      }

      if (dimensionUpdateRequired) {
        this._updateDimensions(); // Notify lng that the dimensions have changed
      }

      // Support theme strings example: theme.radius.md
      const processedStyle = JSON.stringify(v, (key, value) => {
        if ('string' === typeof value && value.startsWith('theme.')) {
          return getValFromObjPath(this, value); // If no theme value exists the property will be removed from the object
        } else if (Array.isArray(value) && 2 === value.length) {
          // Process value as a color ['#663399', 1]
          return getHexColor(value[0], value[1]);
        }
        return value;
      });

      v = this._processModeOverrides(clone(v, JSON.parse(processedStyle)));

      // Set cache so deep merge is only run once
      this._componentStyleCache[this.mode] = v;
      this.emit('styleUpdated', v);
      return v;
    }

    /**
     *
     * Adds support to override modes with mode: {focused: {radius: 100}}
     * @return {object}
     */
    _processModeOverrides(styleObject) {
      const modeOverrides =
        styleObject.mode &&
        typeof styleObject.mode === 'object' &&
        styleObject.mode[this.mode];
      if (styleObject.mode) delete styleObject.mode;
      return modeOverrides ? clone(styleObject, modeOverrides) : styleObject;
    }

    /**
     * Listen for context events - these events tell the component when to update styles and refresh the component
     * @private
     * @return {void}
     */
    _setupListeners() {
      // Listen for global theme updates
      context.on('themeUpdate', this._updateThemeBound);
      // Listen for child theme updates
      if (this._targetSubTheme) {
        context.on(
          `themeUpdate${this._targetSubTheme}`,
          this._updateThemeBound
        );
      }
    }

    _updateTheme() {
      this._clearComponentStyleCache();
      this._generateComponentStyleSource();
      this.queueThemeUpdate();
    }

    _clearComponentStyleCache() {
      this._componentStyleCache = {};
    }

    _clearListeners() {
      context.off('themeUpdate', this._updateTheme);
      if (this._targetSubTheme) {
        context.off('themeUpdate', this._updateTheme);
      }
    }

    /**
     * Detach the event listeners attached to prevent memory leaks.
     */
    _detach() {
      this._clearListeners();
    }

    /**
     *
     * Sets this._componentStyleReference This will run on _setup and be run any time a theme or component level style changes
     *
     * Rules
     *
     * 1. Styles can be a function that returns an object
     * 2. Styles can be an object. If object contains any of the following properties (base, mode, tone) it will be treated as a standard style setup and all other properties will be discarded
     * 3. Styles can be an object with any of the following properties (base, mode, tone). These must be functions that return an object. Any other properties will be discarded
     */
    _generateComponentStyleSource() {
      let v = {};

      this._themeStyleChain.forEach(({ style }) => {
        if (
          typeof style === 'object' &&
          !style.base &&
          !style.mode &&
          !style.tone &&
          !style.default
        ) {
          v = clone(v, { base: style }); // Allows components to be wrapped by withThemeStyles
        } else {
          const { base, mode, tone } = style;
          if (base && typeof base === 'function') {
            v = clone(v, {
              base: base(this.theme) || {}
            });
          } else if (base && typeof base === 'object') {
            v = clone(v, {
              base
            });
          }

          if (mode && typeof mode === 'function') {
            v = clone(v, {
              mode: mode(this.theme) || {}
            });
          } else if (mode && typeof mode === 'object') {
            v = clone(v, {
              mode
            });
          }

          if (tone && typeof tone === 'function') {
            v = clone(v, {
              tone: tone(this.theme) || {}
            });
          } else if (tone && typeof tone === 'object') {
            v = clone(v, {
              tone
            });
          }
        }

        v = clone(v, this._styleOverrides);
      });

      this._componentStyleSource = v;

      // Update list of properties in componentSource
      const styleProps = new Set(Object.keys(v.base || {}));
      // Add mode props
      if (v.mode && typeof v.mode === 'object') {
        Object.keys(v.mode).forEach(prop => {
          if (typeof v.mode[prop] === 'object') {
            Object.keys(v.mode[prop]).forEach(prop => {
              styleProps.add(prop);
            });
          }
        });
      }
      // Add tone props
      if (v.tone && typeof v.tone === 'object') {
        Object.keys(v.tone).forEach(prop => {
          if (typeof v.tone[prop] === 'object') {
            Object.keys(v.tone[prop]).forEach(prop => {
              styleProps.add(prop);
            });
          }
        });
      }

      // Get list of all possible mode overrides. Used when generating componentStyles in style.js
      const modeOverrideProps = Object.keys(v.mode || {}).reduce(
        (acc, mode) => {
          const keys = new Set();
          Object.keys(v.mode[mode]).forEach(key => {
            keys.add(mode + key.charAt(0).toUpperCase() + key.slice(1));
          });
          return [...acc, ...Array.from(keys)];
        },
        []
      );
      this._componentStyleSourceProps = [
        ...Array.from(styleProps),
        ...modeOverrideProps
      ];
    }

    /**
     * Reference to the global theme
     * @return {object}
     */
    get theme() {
      const subTheme =
        this._targetSubTheme && context.getSubTheme(this._targetSubTheme);

      if (subTheme) {
        return subTheme;
      }
      return context.theme;
    }

    /**
     * @type {object}
     */
    get style() {
      return this._componentStyle;
    }

    /**
     * Allow style to be replaced or patched
     */
    set style(value) {
      if ('object' !== typeof value) return; // TODO: Throw warning
      this._componentLevelStyleSource = value;
      this._clearComponentStyleCache();
      this.queueThemeUpdate();
    }

    /**
     * Allow for w to be overwritten by user if also in component's style file
     */
    get w() {
      return (this._wSetByUser && this._w) || this._componentStyle.w || 0;
    }

    set w(v) {
      if (this._w === v) return;
      super.w = v;
      this._wSetByUser = true; // Flag to track if width has been set by the user. If so, it will no longer be tethered to the component's w value if exists
      this.queueThemeUpdate();
    }

    get h() {
      return (this._hSetByUser && this._h) || this._componentStyle.h || 0; // Add getH to allow override
    }

    set h(v) {
      if (this._h === v) return;
      super.h = v;
      this._hSetByUser = true; // Flag to track if height has been set by the user. If so, it will no longer be tethered to the component's h value if exists
      this.queueThemeUpdate();
    }

    /**
     * Styles can be added two ways using withThemeStyles.
     *
     * 1. Adding static get __themeStyle() { return [YOUR STYLE OBJECT OR FUNCTION]}
     * 2. Wrapping your component in withTheme ex. withThemeStyles(MyComponent, MyComponentStyles)
     * 3. ComponentStyles can be an object containing styles, and object containing any or all of the following properties: base: (theme) => {},  mode: (theme) => {}, tone: (theme) => {}
     *
     * @return {object}
     */

    /**
     *
     * Array of all style objects or functions from every component that this one extends ex. Surface -> Tile
     * @return {array}
     */
    get _themeStyleChain() {
      const styleSet = new Set();
      let proto;
      do {
        proto = !proto ? this : Object.getPrototypeOf(proto);
        if (proto && proto.constructor) {
          // Check if style was passed in as param into mixin withThemeStyles(MyComponent, {foo: 'bar'})
          if (
            proto.constructor.__mixinStyle &&
            !styleSet.has(proto.constructor.__mixinStyle)
          ) {
            if (
              typeof proto.constructor.__mixinStyle === 'object' &&
              Object.keys(proto.constructor.__mixinStyle).length
            ) {
              styleSet.add(proto.constructor.__mixinStyle);
            } else if (typeof proto.constructor.__mixinStyle === 'function') {
              styleSet.add(proto.constructor.__mixinStyle);
            }
          }
          // Check if has __themeStyle set
          if (
            proto.constructor.__themeStyle &&
            !styleSet.has(proto.constructor.__themeStyle)
          ) {
            if (
              typeof proto.constructor.__themeStyle === 'object' &&
              Object.keys(proto.constructor.__themeStyle).length
            ) {
              styleSet.add(proto.constructor.__themeStyle);
            } else if (typeof proto.constructor.__themeStyle === 'function') {
              styleSet.add(proto.constructor.__themeStyle);
            }
          }
        }
      } while (proto);

      return Array.from(styleSet)
        .map(style => {
          return {
            style
          };
        })
        .reverse();
    }

    /**
     * The Mode controls what property in the mode export of the style file is selected when generating the final _componentStyle object during the update lifecycle
     * @return {string}
     */
    get mode() {
      return this._mode || this._componentConfig.mode;
    }

    set mode(v) {
      if (this._mode === v) return;
      this._mode = v;
      this.queueThemeUpdate();
    }

    /**
     * Tone controls what property in the tone export of the style file is selected when generating the final _componentStyle object
     * @return {string}
     */
    get tone() {
      const tone = this._tone || this._componentConfig.tone;
      return tone && Object.keys(this._componentStyleSource.tone).includes(tone)
        ? tone
        : 'neutral';
    }

    set tone(value) {
      if (value === this._tone) return;
      this._tone = value;
      this._clearComponentStyleCache();
      this.queueThemeUpdate(); // Update component again since the styles may have changed
    }

    /**
     *
     * Component requires update, add to Global Update Manager (GUM)
     */
    queueThemeUpdate() {
      updateManager.addUpdateTheme(this);
    }

    /**
     * Called by update Manager will trigger _update lifecycle
     */
    _updateThemeComponent() {
      // It's OK to call `_update()` directly here since if queueRequestUpdate is undefined then
      // the component does NOT have the withUpdates mixin, and hence `requestUpdate()` will not be defined either.
      // This check exists to allow this mixin to work WITHOUT withUpdates.
      this.queueRequestUpdate
        ? this.queueRequestUpdate()
        : this._update && this._update();
      this._updateItemLayout && this._updateItemLayout(); // Update withLayout
    }

    _focus() {
      if (!this._isDisabledMode) this.mode = 'focused';
      super._focus();
    }

    _unfocus() {
      if (this._isFocusedMode) this.mode = 'unfocused';
      super._unfocus();
    }

    _inactive() {
      this._clearComponentStyleCache();
    }
  };
}
