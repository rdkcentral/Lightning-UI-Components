import lng from 'wpe-lightning';
import withStyles from '../../mixins/withStyles';
import Icon from '../Icon';
import Badge from '../Badge';
import { parseInlineContent, flatten } from '../../utils';

export const styles = theme => ({
  iconW: 36,
  iconH: 36,
  iconY: 6,
  badgeY: 8,
  textY: 0,
  contentSpacing: theme.spacing(1),
  contentProperties: {
    marginBottom: theme.typography.body1.lineHeight / -10
  },
  textProperties: {
    ...theme.typography.body1,
    color: theme.palette.text.light.secondary,
    maxLines: 1
  },
  justify: 'center'
});

class InlineContent extends lng.Component {
  _construct() {
    this._justify = this.styles.justify;
    this._iconW = this.styles.iconW;
    this._iconH = this.styles.iconH;
    this._iconY = this.styles.iconY !== undefined ? this.styles.iconY : 0;
    this._textY = this.styles.textY !== undefined ? this.styles.textY : 0;
    this._badgeY = this.styles.badgeY !== undefined ? this.styles.badgeY : 0;
    this._contentSpacing = this.styles.contentSpacing;
    this._textProperties = this.styles.textProperties;
    this._badgeProperties = this.styles.badgeProperties;
    this._contentProperties = this.styles.contentProperties;
    this.combinedLinesHeight = 0;
  }

  _init() {
    this._update();
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
        let base = {
          flexItem: {
            ...this.contentProperties,
            marginBottom:
              index === this._parsedContent.length - 1
                ? 0
                : this._contentProperties.marginBottom,
            marginRight:
              index === this._parsedContent.length - 1
                ? 0
                : this._contentSpacing || this._contentProperties.marginRight
          }
        };
        if (typeof item === 'string') {
          if (typeof this._parsedContent[index + 1] === 'string') {
            base.flexItem.marginRight = 0;
          }
          this.childList.a(this._createText(base, item));
        } else if (item.icon) {
          this.childList.a(this._createIcon(base, item.icon));
        } else if (item.badge) {
          this.childList.a(this._createBadge(base, item.badge));
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
    this.stage.update();
    // TODO: FIX
    setTimeout(() => {
      this.multiLineHeight = this.finalH;
      if (this.flex) {
        this.multiLineHeight =
          this.finalH * this.flex._layout._lineLayouter._lines.length;
      }
      this.fireAncestors('$loadedInlineContent', this);
    }, 10);
  }

  _createIcon(base, icon) {
    return {
      ...base,
      type: Icon,
      y: this._iconY,
      w: this._iconW,
      h: this._iconH,
      icon
    };
  }

  _createText(base, text) {
    const offset =
      this.contentProperties.marginBottom < 0
        ? this.contentProperties.marginBottom
        : 0;
    return {
      ...base,
      y: this._textY,
      h:
        (this.textProperties.lineHeight || this.textProperties.fontSize) -
        offset,
      text: {
        ...this.textProperties,
        text
      }
    };
  }

  _createBadge(base, badge) {
    return {
      ...base,
      y: this._badgeY,
      ...this._badgeProperties,
      type: Badge,
      title: badge
    };
  }

  get announce() {
    let announce = this._parsedContent.reduce((announce, item) => {
      if (typeof item === 'string') {
        announce += item;
      } else if (item.title) {
        announce += item.title;
      } else if (item.badge) {
        announce += item.badge;
      }
      return announce + ' ';
    }, '');
    return announce.replace(/\s+(?=\s)|\s$/g, '');
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

  set content(content) {
    if (content !== this._content) {
      this._content = content;
      let parsedContent = this._content;
      if (content && !Array.isArray(content)) {
        parsedContent = parseInlineContent(content);
      }
      this._parsedContent = this._formatSpaces(parsedContent);
      this._update();
    }
  }

  get content() {
    return this._content;
  }

  set textProperties(textProperties) {
    if (textProperties !== this._textProperties) {
      this._textProperties = textProperties;
      this._update();
    }
  }

  get textProperties() {
    return this._textProperties;
  }

  set contentProperties(contentProperties) {
    if (
      JSON.stringify(contentProperties) !==
      JSON.stringify(this._contentProperties)
    ) {
      this._contentProperties = contentProperties;
      this._update();
    }
  }

  get contentProperties() {
    return this._contentProperties;
  }

  set justify(justify) {
    if (justify !== this._justify) {
      this._justify = justify;
      this._update();
    }
  }

  get justify() {
    return this._justify;
  }

  set iconW(iconW) {
    if (iconW !== this._iconW) {
      this._iconW = iconW;
      this._update();
    }
  }

  get iconW() {
    return this._iconW;
  }

  set iconH(iconH) {
    if (iconH !== this._iconH) {
      this._iconH = iconH;
      this._update();
    }
  }

  get iconH() {
    return this._iconH;
  }

  set iconY(iconY) {
    if (iconY !== this._iconY) {
      this._iconY = iconY;
      this._update();
    }
  }

  get iconY() {
    return this._iconY;
  }

  set textY(textY) {
    if (textY !== this._textY) {
      this._textY = textY;
      this._update();
    }
  }

  get textY() {
    return this._textY;
  }

  set badgeY(badgeY) {
    if (badgeY !== this._badgeY) {
      this._badgeY = badgeY;
      this._update();
    }
  }

  get badgeY() {
    return this._badgeY;
  }

  set contentSpacing(contentSpacing) {
    if (contentSpacing !== this._contentSpacing) {
      this._contentSpacing = contentSpacing;
      this._update();
    }
  }

  get contentSpacing() {
    return this._contentSpacing;
  }

  set badgeProperties(badgeProperties) {
    if (badgeProperties !== this._badgeProperties) {
      this._badgeProperties = badgeProperties;
      this._update();
    }
  }

  get badgeProperties() {
    return this._badgeProperties;
  }

  set contentWrap(contentWrap) {
    if (contentWrap !== this._contentWrap) {
      this._contentWrap = contentWrap;
      this._update();
    }
  }

  get contentWrap() {
    return this._contentWrap;
  }
}

export default withStyles(InlineContent, styles);
