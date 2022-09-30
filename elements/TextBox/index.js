import Base from '../../Base';
import * as styles from './TextBox.styles';
import { withExtensions } from '../../mixins';
import { InlineContent } from '../../layout';
import { isMarkupString } from '../../utils';
import { getValidColor } from '../../utils';
import context from '../../context';

class TextBox extends Base {
  static _template() {
    return {
      alpha: 0.001
    };
  }

  static get __componentName() {
    return 'TextBox';
  }

  static get __themeStyle() {
    return styles;
  }

  static get tags() {
    return ['TextBox', 'Text', 'InlineContent'];
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
      'wordWrapWidth',
      ...InlineContent.properties
    ];
  }

  _setDimensions() {
    const width = this._Text.texture.getRenderWidth();
    const height = this._Text.texture.getRenderHeight();
    if (width && height) {
      this.h = height;
      this.w = width;
      // Position updates can produce flash of poorly positioned content, hide the element until measurements are made.
      if (this.alpha < 1) {
        this.patch({
          alpha: 1
        });
      }

      this._notifyAncestors();
    }
  }

  _setContent(content) {
    this._isInlineContent = false;
    if (Array.isArray(content) || isMarkupString(content)) {
      this._isInlineContent = true;
    }
    if ('string' !== typeof content && !this._isInlineContent) {
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
      return this.style.maxLinesSuffix;
    }
    return maxLinesSuffix;
  }

  get title() {
    return this._content;
  }

  _notifyAncestors(w = this.w, h = this.h) {
    this.fireAncestors('$itemChanged');
    this.signal('textBoxChanged', { w, h });
  }

  _update() {
    if (!this.content) {
      // If content is not defined hide the component, but do NOT set visibility
      // as a parent component may need to control that (i.e. Control Button)
      this.patch({ Text: undefined, InlineContent: undefined });
      this.w = this.h = 0;
      this._notifyAncestors(); // need to alert parents that the width and height are now 0
      return;
    }
    this._isInlineContent ? this._updateInlineContent() : this._updateText();
  }

  _updateInlineContent() {
    this.patch({ Text: undefined });
    const inlineContentPatch = InlineContent.properties.reduce((acc, prop) => {
      if (this[prop] != undefined) {
        acc[prop] = this[prop];
      }
      return acc;
    }, {});
    this.patch({
      alpha: 1,
      InlineContent: {
        w: this.w,
        type: InlineContent,
        ...inlineContentPatch,
        signals: {
          loadedInlineContent: '_notifyAncestors'
        }
      }
    });
  }

  _updateText() {
    this.patch({ InlineContent: undefined });
    if (!this._Text) {
      this.patch({ Text: { text: { textBaseline: 'bottom' } } });
      this._Text.on('txLoaded', this._setDimensions.bind(this));
    }

    const fontStyle = {
      ...(this.style.typography[this.style.defaultTextStyle] ||
        this.style.typography.body1),
      ...(null !== this.textStyle &&
      'object' === typeof this.textStyle &&
      Object.keys(this.textStyle)
        ? this.textStyle
        : this.style.typography[this.textStyle])
    };
    this.constructor.properties.forEach(prop => {
      if ('fontStyle' !== prop && 'undefined' !== typeof this[`_${prop}`]) {
        const key = 'content' === prop ? 'text' : prop;
        fontStyle[key] = this[`_${prop}`];
      }
    });
    this._updateTextGivenStyle(fontStyle);
  }

  _updateTextGivenStyle(fontStyle) {
    if (this._Text) {
      this._Text.patch({
        y: this.style.offsetY,
        x: this.style.offsetX,
        text: fontStyle
      });
    }
  }

  get announce() {
    return this._announce || this.content;
  }

  set announce(announce) {
    super.announce = announce;
  }

  set smooth(v) {
    context.warn(
      'warning: value smoothing is known to cause bugs with the TextBox - patch updated values instead.'
    );
    super.smooth = v;
  }
}

export default withExtensions(TextBox);
