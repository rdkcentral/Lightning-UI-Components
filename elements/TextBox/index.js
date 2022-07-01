import Base from '../../Base';
import styles from './TextBox.styles';
import { withExtensions, withThemeStyles as withStyles } from '../../mixins';
import { getValidColor } from '../../Styles';

class TextBox extends Base {
  static _template() {
    return {
      alpha: 0.001,
      Text: {
        text: { textBaseline: 'bottom' }
      }
    };
  }

  static get __componentName() {
    return 'TextBox';
  }

  static get tags() {
    return ['TextBox', 'Text'];
  }

  static get properties() {
    return [
      'content',
      'textAlign',
      'textColor',
      'textStyle',
      'maxLines',
      'maxLinesSuffix',
      'verticalAlign',
      'wordWrap',
      'wordWrapWidth'
    ];
  }

  _init() {
    this._Text.on('txLoaded', this._setDimensions.bind(this));
  }

  _setDimensions() {
    const width = this._Text.texture.getRenderWidth();
    const height = this._Text.texture.getRenderHeight();
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
    if (!this.content) {
      // If content is not defined hide the component
      this.visible = false;
      return;
    }
    this.visible = true;
    const textStyle = {
      ...this._componentStyles.textStyle,
      ...(null !== this.textStyle &&
      'object' === typeof this.textStyle &&
      Object.keys(this.textStyle)
        ? this.textStyle
        : this._componentStyles.typography[this.textStyle])
    };
    this.constructor.properties.forEach(prop => {
      if ('fontStyle' !== prop && 'undefined' !== typeof this[`_${prop}`]) {
        const key = 'content' === prop ? 'text' : prop;
        textStyle[key] = this[`_${prop}`];
      }
    });

    this._Text.patch({
      y: this._componentStyles.offsetY,
      x: this._componentStyles.offsetX,
      text: textStyle
    });
  }

  get announce() {
    return this._announce || this.content;
  }

  set announce(announce) {
    super.announce = announce;
  }
}

export default withExtensions(withStyles(TextBox, styles));
