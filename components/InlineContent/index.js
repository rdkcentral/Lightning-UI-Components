import lng from 'wpe-lightning';
import withStyles from '../../mixins/withStyles';
import Icon from '../Icon';
import Badge from '../Badge';
import { parseInlineContent } from '../../utils';

export const styles = theme => ({
  iconW: 36,
  iconH: 36,
  iconY: 6,
  badgeY: 8,
  textY: 0,
  contentSpacing: theme.spacing(1),
  textProperties: {
    ...theme.typography.body1,
    color: theme.palette.text.light.secondary,
    textAlign: 'center',
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
    this._contentTags = [];
    this._loadedTags = [];
    this._checkLoaded = true;
    this.combinedLinesHeight = 0;
  }

  _init() {
    this._update();
  }

  _update() {
    if (this._content && this._content.length) {
      this.patch(
        this._content.reduce(
          (patch, item, index) => {
            let tag;
            let base = {
              flexItem: {
                marginRight:
                  index === this._content.length - 1 ? 0 : this._contentSpacing
              }
            };
            if (typeof item === 'string') {
              if (
                this._content[index + 1] &&
                typeof this._content[index + 1] === 'string'
              ) {
                base.flexItem.marginRight = 0;
              }
              tag = `Text${index}`;
              patch[tag] = this._createText(base, item);
            } else if (item.icon) {
              tag = `Icon${index}`;
              patch[tag] = this._createIcon(base, item.icon);
            } else if (item.badge) {
              tag = `Badge${index}`;
              patch[tag] = this._createBadge(base, item.badge);
            }
            if (tag && !this._contentTags.includes(tag))
              this._contentTags.push(tag);
            return patch;
          },
          {
            flex: {
              direction: 'row',
              wrap: this._contentWrap,
              justifyContent: this._justify
            }
          }
        )
      );
      this._setContentsEvents();
    }
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
    return {
      ...base,
      y: this._textY,
      h: this.textProperties.lineHeight || this.textProperties.fontSize,
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

  _setContentsEvents() {
    this._contentTags.forEach(tag => {
      this.tag(tag).on('txLoaded', () => {
        this._tagLoaded(tag);
      });
    });
  }

  _tagLoaded(tag) {
    if (this._checkLoaded) {
      let loaded = this._loadedTags.includes(tag);
      if (!loaded) {
        this._loadedTags.push(tag);
        if (this._contentTags.length === this._loadedTags.length) {
          this._checkLoaded = false;
          this.stage.update();
          this.fireAncestors('$loadedInlineContent', this);
        }
      }
    }
  }

  get announce() {
    return this._content.reduce((announce, item, index) => {
      if (typeof item === 'string') {
        announce += item;
      } else if (item.title) {
        announce += ' ' + item.title;
      } else if (item.badge) {
        announce += ' ' + item.badge;
      }
      return announce;
    }, '');
  }

  set content(content) {
    this._content = [];
    if (content && !Array.isArray(content)) {
      content = parseInlineContent(content);
    }
    content.forEach(item => {
      if (typeof item === 'string') {
        this._content = this._content.concat(item.split(/(?=\s)/));
      } else {
        this._content.push(item);
      }
    });
    this._update();
  }

  get content() {
    return this._content;
  }

  set textProperties(textProperties) {
    this._textProperties = textProperties;
    this._update();
  }

  get textProperties() {
    return this._textProperties;
  }

  set justify(justify) {
    this._justify = justify;
    this._update();
  }

  get justify() {
    return this._justify;
  }

  set iconW(width) {
    this._iconW = width;
    this._update();
  }

  get iconW() {
    return this._iconW;
  }

  set iconH(height) {
    this._iconH = height;
    this._update();
  }

  get iconH() {
    return this._iconH;
  }

  set iconY(y) {
    this._iconY = y;
    this._update();
  }

  get iconY() {
    return this._iconY;
  }

  set textY(y) {
    this._textY = y;
    this._update();
  }

  get textY() {
    return this._textY;
  }

  set badgeY(y) {
    this._badgeY = y;
    this._update();
  }

  get badgeY() {
    return this._badgeY;
  }

  set contentSpacing(spacing) {
    this._contentSpacing = spacing;
    this._update();
  }

  get contentSpacing() {
    return this._contentSpacing;
  }

  set badgeProperties(properties) {
    this._badgeProperties = properties;
    this._update();
  }

  get badgeProperties() {
    return this._badgeProperties;
  }

  set contentWrap(wrap) {
    this._contentWrap = wrap;
    this._update();
  }

  get contentWrap() {
    return this._contentWrap;
  }
}

export default withStyles(InlineContent, styles);
