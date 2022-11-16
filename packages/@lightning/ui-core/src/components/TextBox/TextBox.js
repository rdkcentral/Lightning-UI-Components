import lng from '@lightningjs/core';
import * as styles from './TextBox.styles';
import Base from '../Base';
import InlineContent from '../InlineContent';
import Marquee from '../Marquee';
import { context } from '../../globals';
import utils from '../../utils';
import { withExtensions } from '../../mixins';

/**
 *
 * Get defaults directly from @lightningjs/core to ensure correct fallback values
 *
 */
const lightningTextDefaults = Object.entries(
  Object.getOwnPropertyDescriptors(lng.textures.TextTexture.prototype)
).reduce((acc, [prop]) => {
  const value = lng.textures.TextTexture.prototype[prop];
  if (prop.startsWith('_') || ['undefined', 'function'].includes(typeof value))
    return acc;
  return {
    [prop]: value,
    ...acc
  };
}, {});

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
    return ['InlineContent', 'Marquee', 'Text'];
  }

  static get properties() {
    return [
      'content',
      'textAlign',
      'textColor',
      'textStyle',
      'marquee',
      'maxLines',
      'maxLinesSuffix',
      'verticalAlign',
      'wordWrap',
      'wordWrapWidth',
      ...InlineContent.properties
    ];
  }

  _setDimensions(w, h) {
    let width = w;
    let height = h;
    if (!this._isInlineContent) {
      width = this._Text.texture.getRenderWidth();
      height = this._Text.texture.getRenderHeight();
    }
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
    if (Array.isArray(content) || utils.isMarkupString(content)) {
      this._isInlineContent = true;
    }
    if ('string' !== typeof content && !this._isInlineContent) {
      return '';
    }
    return content;
  }

  _setTextColor(textColor) {
    const color = utils.getValidColor(textColor);
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
      return 0;
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
      return 0;
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

  _construct() {
    super._construct();
    this._marqueeContentListenerAttached = false;
    this._marqueeOverrideLoopX = undefined;
    this._resetMarqueePromise();
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
    this._updateText();
    this._isInlineContent ? this._updateInlineContent() : this._updateText();
    this._updateMarquee();
  }

  _updateInlineContent() {
    this.patch({ Text: undefined });
    const inlineContentPatch = InlineContent.properties.reduce((acc, prop) => {
      if (this[prop] != undefined) {
        acc[prop] = this[prop];
      }
      return acc;
    }, {});
    if (this.wordWrapWidth > 0) {
      inlineContentPatch.w = this.wordWrapWidth;
      inlineContentPatch.rtt = true;
    }
    this.patch({
      alpha: 1,
      InlineContent: {
        type: InlineContent,
        ...inlineContentPatch,
        signals: {
          loadedInlineContent: '_setDimensions'
        }
      }
    });
  }

  _updateText() {
    this.patch({ InlineContent: undefined });
    if (!this._Text) {
      this.patch({ Text: {} });
      this._Text.on('txLoaded', this._setDimensions.bind(this));
    }
    const fontStyle = this._textStyleSet;
    if (this._Text) {
      this._Text.patch({
        y: this.style.offsetY,
        x: this.style.offsetX,
        text: {
          ...lightningTextDefaults, // order matters this should always be first
          ...fontStyle,
          wordWrapWidth: fontStyle.wordWrapWidth,
          maxLines: fontStyle.maxLines
        }
      });
    }
  }

  // keep this out of the update lifecycle
  set marqueeOverrideLoopX(v) {
    this._marqueeOverrideLoopX = v;
    if (this._Marquee) this._Marquee.overrideLoopX = this._marqueeOverrideLoopX;
    this._resolveAwaitMarqueeOverrideX();
  }

  get marqueeOverrideLoopX() {
    return this._marqueeOverrideLoopX;
  }

  _resetMarqueePromise() {
    this._awaitMarqueeOverrideX = new Promise((resolve, reject) => {
      this._resolveAwaitMarqueeOverrideX = resolve;
      this._rejectAwaitMarqueeOverrideX = reject;
    });
  }

  _updateMarquee() {
    const contentTag = this._isInlineContent ? this._InlineContent : this._Text;
    if (this._Marquee && !this.marquee) {
      this._toggleMarquee(contentTag);
    }
    if (this.marquee) {
      this._resetMarqueePromise();
      const marqueePatch = {
        w: this.wordWrapWidth,
        h: this.h,
        y: this.style.offsetY,
        x: this.style.offsetX
      };
      if (!this._Marquee) {
        marqueePatch.type = Marquee;
      }
      if (this._isInlineContent) {
        this._InlineContent.w = 0; // ensure we're copying the full, unwrapped inlineContent
        marqueePatch.contentTexture = contentTag.getTexture();
        marqueePatch.w = this.wordWrapWidth;
      } else {
        marqueePatch.title = {
          text: contentTag.text.text,
          ...this._textStyleSet,
          wordWrapWidth: 0,
          maxLines: 1
        };
      }
      this.patch({
        Marquee: marqueePatch
      });
      if (!this._marqueeContentListenerAttached) {
        this._marqueeContentListenerAttached = true;
        this._Marquee._Content.on('txLoaded', () => {
          this.signal('willMarquee', this._Marquee);
        });
      }
      if ('undefined' !== typeof this._marqueeOverrideLoopX) {
        this._awaitMarqueeOverrideX.then(() => {
          this._toggleMarquee(contentTag);
        });
      } else {
        this._toggleMarquee(contentTag);
      }
    }
  }

  get _textStyleSet() {
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
    return fontStyle;
  }

  _toggleMarquee(contentTag) {
    if (this.marquee) {
      contentTag.alpha = 0.001;
      this._Marquee.alpha = 1;
      this._Marquee.startScrolling();
    } else {
      contentTag.alpha = 1;
      this._Marquee.alpha = 0.001;
      this._Marquee.stopScrolling();
    }
  }

  get announce() {
    return (
      this._announce ||
      (this._isInlineContent && this._InlineContent
        ? this._InlineContent.announce
        : this.content)
    );
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
