import withStyles from '../../mixins/withStyles';
import Icon from '../../elements/Icon';
import Badge from '../../elements/Badge';
import { parseInlineContent, flatten } from '../../utils';
import Base from '../../elements/Base';
import styles from './InlineContent.styles';

export default class InlineContent extends withStyles(Base, styles) {
  static get properties() {
    return [
      'content',
      'contentProperties',
      'textProperties',
      'justify',
      'iconW',
      'iconH',
      'iconY',
      'textY',
      'badgeY',
      'contentSpacing',
      'badgeProperties',
      'contentWrap'
    ];
  }

  _construct() {
    super._construct();
    this._justify = this.styles.justify;
    this._iconW = this.styles.iconW;
    this._iconH = this.styles.iconH;
    this._iconY = this.styles.iconY;
    this._textY = this.styles.textY !== undefined ? this.styles.textY : 0;
    this._badgeY = this.styles.badgeY;
    this._contentSpacing = this.styles.contentSpacing;
    this._textProperties = this.styles.textProperties;
    this._badgeProperties = this.styles.badgeProperties;
    this._contentProperties = this.styles.contentProperties;
  }

  _update() {
    this.childList.clear();
    if (this._parsedContent && this._parsedContent.length) {
      this.patch({
        flex: {
          direction: 'row',
          wrap: this._contentWrap,
          justifyContent: this._justify
        }
      });

      this._parsedContent.forEach((item, index) => {
        const base = {
          flexItem: {
            ...this.contentProperties,
            marginBottom:
              index === this._parsedContent.length - 1
                ? 0
                : this._contentProperties.marginBottom,
            marginRight:
              index === this._parsedContent.length - 1
                ? 0
                : this.contentSpacing || this.contentProperties.marginRight
          }
        };
        if (typeof item === 'string' || item.text) {
          if (typeof this._parsedContent[index + 1] === 'string') {
            base.flexItem.marginRight = 0;
          }
          this.childList.a(this._createText(base, item));
        } else if (item.icon) {
          this.childList.a(this._createIcon(base, item));
        } else if (item.badge) {
          this.childList.a(this._createBadge(base, item.badge));
        } else if (item.newline && this.contentWrap) {
          this.childList.a({ h: 0, w: this.w });
        }
      });
    }
    this._waitForComponentLoad();
  }

  _waitForComponentLoad() {
    if (this.children.length) {
      Promise.all(
        this.children.map(
          child => new Promise(resolve => child.on('txLoaded', resolve))
        )
      ).finally(() => this._contentLoaded());
    } else {
      this.h = 0;
      this._contentLoaded();
    }
  }

  _contentLoaded() {
    // TODO: FIX
    if (this.children.length) {
      this.stage.update();
      setTimeout(() => {
        this.multiLineHeight = this.finalH;
        if (
          this.flex &&
          this.flex._layout &&
          this.flex._layout._lineLayouter &&
          this.flex._layout._lineLayouter._lines
        ) {
          this.multiLineHeight =
            this.finalH * this.flex._layout._lineLayouter._lines.length;
          this.fireAncestors('$loadedInlineContent', this);
        } else {
          this._contentLoaded();
        }
      }, 10);
    } else {
      this.fireAncestors('$loadedInlineContent', this);
    }
  }

  _createIcon(base, { icon, color }) {
    const y =
      (this.textHeight > this.textProperties.lineHeight
        ? this.textHeight
        : this.textProperties.lineHeight) - this.iconH;
    const iconObj = {
      ...base,
      type: Icon,
      y: this.iconY !== undefined ? this.iconY : y,
      w: this.iconW,
      h: this.iconH,
      icon
    };
    if (color) {
      iconObj.color = color;
    }
    return iconObj;
  }

  _createText(base, text) {
    const textObj = {
      ...base,
      y: this.textY,
      h: this.textHeight,
      text: {
        ...this.textProperties,
        ...text.style,
        text: text?.text || text
      }
    };

    return textObj;
  }

  get textHeight() {
    const offset =
      this.contentProperties.marginBottom < 0
        ? this.contentProperties.marginBottom
        : 0;
    return (
      (this.textProperties.lineHeight || this.textProperties.fontSize) - offset
    );
  }

  _createBadge(base, badge) {
    return {
      ...base,
      y: this.badgeY || 0,
      ...this.badgeProperties,
      type: Badge,
      title: badge
    };
  }

  $loadedBadge(badge) {
    if (this.badgeY === undefined) {
      badge.y =
        (this.textHeight > this.textProperties.lineHeight
          ? this.textHeight
          : this.textProperties.lineHeight) - badge.h;
    }
  }

  get announce() {
    const announce =
      this._parsedContent &&
      this._parsedContent.reduce((announce, item) => {
        if (typeof item === 'string') {
          announce += item;
        } else if (item.text) {
          announce += item.text;
        } else if (item.title) {
          announce += item.title;
        } else if (item.badge) {
          announce += item.badge;
        }
        return announce + ' ';
      }, '');
    return announce ? announce.replace(/\s+(?=\s)|\s$/g, '') : '';
  }

  /**
   * RegEx Lookbehinds do not work in WPE Browser, but we want the space
   * at the end of the previous string to prevent weird wrapping,
   * so we need to separate on spaces, then re-attach to the previous string
   *
   * @param { array } parsedContent
   *
   * @return { array }
   */
  _formatSpaces(parsedContent) {
    return flatten(
      (parsedContent || []).map(item =>
        typeof item === 'string' ? item.split(/(\s+)/) : item
      )
    )
      .map((item, index, arr) => {
        if (item === ' ') return false;
        if (arr[index + 1] === ' ') return item + ' ';
        return item;
      })
      .filter(Boolean);
  }

  _setContent(content) {
    if (content !== this._content) {
      this._content = content;
      let parsedContent = this._content;
      if (content && !Array.isArray(content)) {
        parsedContent = parseInlineContent(content);
      }
      this._parsedContent = this._formatSpaces(parsedContent);
    }
    return content;
  }
}
