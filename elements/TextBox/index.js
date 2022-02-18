import Base from '../../Base';
import styles from './TextBox.styles';
import withStyles from '../../mixins/withThemeStyles';
import { getValidColor } from '../../Styles';
import context from '../../context';
export default class TextBox extends withStyles(Base, styles) {
  static _template() {
    return {
      alpha: 0.001,
      text: { textBaseline: 'bottom' }
    };
  }

  static get __componentName() {
    return 'TextBox';
  }

  static get tags() {
    return ['TextBox'];
  }

  static get properties() {
    return [
      'content',
      'textStyle',
      'textColor',
      'textAlign',
      'verticalAlign',
      'wordWrap',
      'maxLines',
      'wordWrapWidth',
      'maxLinesSuffix'
    ];
  }

  _construct() {
    super._construct && super._construct();
    context.on('fontsLoaded', this._forceUpdate.bind(this));
  }

  _detach() {
    context.off('fontsLoaded', this._forceUpdate.bind(this));
  }

  _init() {
    this.on('txLoaded', this._setDimensions.bind(this));
  }

  _forceUpdate() {
    // Fonts that are loaded asynchronous via the theme are not picked up by the component unless the textureSourceHashmap is cleared first.
    const id = this.text._getLookupId();
    if (this.text && id) {
      this.stage.textureManager.textureSourceHashmap.delete(id);
      this.text._changed();
    }
  }

  _setDimensions() {
    const width = this.texture.getRenderWidth();
    const height = this.texture.getRenderHeight();
    if (width && height) {
      this.h = height;
      this.w = width;
      // Position updates can produce flash of poorly positioned content, hide the element until measurements are made.
      if (1 > this.alpha) {
        this.patch({
          alpha: 1
        });
      }

      this._notifyAncestors();
    }
  }

  _setContent(content) {
    if ('string' !== typeof content) {
      return '';
    }
    return content;
  }

  _setTextColor(textColor) {
    const color = getValidColor(textColor);
    if (null === color) {
      return undefined;
    }
    return color;
  }

  _setTextAlign(textAlign) {
    const options = ['left', 'center', 'right'];
    if ('string' !== typeof textAlign || -1 === options.indexOf(textAlign)) {
      return undefined;
    }
    return textAlign;
  }

  _setVerticalAlign(verticalAlign) {
    const options = ['top', 'middle', 'bottom'];
    if (
      'string' !== typeof verticalAlign ||
      -1 === options.indexOf(verticalAlign)
    ) {
      return undefined;
    }
    return verticalAlign;
  }

  _setMaxLines(maxLines) {
    if ('number' !== typeof maxLines || 0 > maxLines) {
      return undefined;
    }
    return maxLines;
  }

  _setWordWrap(wordWrap) {
    if ('boolean' !== typeof wordWrap) {
      return undefined;
    }
    return wordWrap;
  }

  _setWordWrapWidth(wordWrapWidth) {
    if ('number' !== typeof wordWrapWidth || 0 > wordWrapWidth) {
      return undefined;
    }
    return wordWrapWidth;
  }

  _setMaxLinesSuffix(maxLinesSuffix) {
    if ('string' !== typeof maxLinesSuffix) {
      return this._componentStyles.maxLinesSuffix;
    }
    return maxLinesSuffix;
  }

  get title() {
    return this._content;
  }

  _notifyAncestors() {
    this.fireAncestors('$itemChanged');
    this.signal('textBoxChanged', {
      w: this.w,
      h: this.h
    });
  }

  _update() {
    const fontStyle = {
      ...(this._componentStyles.typography[this.textStyle] ||
        this._componentStyles.typography.body1)
    };

    this.constructor.properties.forEach(prop => {
      if ('fontStyle' !== prop && 'undefined' !== typeof this[`_${prop}`]) {
        const key = 'content' === prop ? 'text' : prop;

        fontStyle[key] = this[`_${prop}`];
      }
    });

    this.patch({ text: fontStyle });
  }

  get announce() {
    return this._announce || this.content;
  }

  set announce(announce) {
    super.announce = announce;
  }
}
