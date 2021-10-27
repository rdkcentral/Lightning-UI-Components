import Icon from '../../elements/Icon';
import ListItemBase from './ListItemBase';
import styles from './ListItem.styles.js';
import withStyles from '../../mixins/withStyles';
export default class ListItem extends withStyles(ListItemBase, styles) {
  static get properties() {
    return [
      ...super.properties,
      'collapse',
      'collapseIcon',
      'icon',
      'showIcon',
      'subtitle',
      'title'
    ];
  }

  static get tags() {
    return [
      ...super.tags,
      { name: 'Title', path: 'Left.Title' },
      { name: 'Subtitle', path: 'Left.Subtitle' },
      { name: 'Icon', path: 'Right.Icon' }
    ];
  }

  get _getTitleW() {
    const w =
      this.w ||
      this.styles.dimensions[this.size] ||
      this.styles.dimensions.large;

    return w - this.styles.paddingLeft - this.styles.paddingRight;
  }
  get _textWidth() {
    return (
      this.w -
      this.styles.paddingRight -
      this.styles.paddingLeft -
      this._calculateIconWidth()
    );
  }

  get _icons() {
    return this._Right.children;
  }

  get announce() {
    return this._announce
      ? this._announce
      : this.title + ` ${this.subtitle !== undefined ? this.subtitle : ''}`;
  }

  set announce(announce) {
    if (this._announce !== announce) {
      this._announce = announce;
      this._update();
    }
  }
  _init() {
    super._init();
    !this.hasFocus() && this._unfocus();
    this._update();
  }

  _update() {
    super._update();
    this._updateTitle();
    this._updateSubtitle();
    this._updateIcons();
  }

  _updateTitle() {
    if (this.title) {
      this._Left.patch({
        Title: {
          y: 2,
          h: this.styles.title.text.lineHeight + 4,
          color: this.styles.title.color,
          text: {
            ...this.styles.title.text,
            text: this._title,
            wordWrapWidth: this._textWidth
          }
        }
      });
    } else {
      this._Left.patch({ Title: undefined });
    }
    if (!this._Title) return;
    if (this.hasFocus()) {
      if (this._smooth) {
        this._Title.setSmooth('color', this.styles.focused.title.color);
      } else {
        this._Title.color = this.styles.focused.title.color;
      }
    } else {
      if (this._smooth) {
        this._Title.setSmooth('color', this.styles.title.color);
      } else {
        this._Title.color = this.styles.title.color;
      }
    }
  }
  _setSubtitle(subtitle) {
    this._subtitle = subtitle;
    if (subtitle) {
      this._Left.patch({
        Title: {},
        Subtitle: {
          h: this.styles.subtitle.text.lineHeight,
          text: {
            ...this.styles.subtitle.text,
            text: subtitle
          }
        }
      });
    } else {
      this._Left.patch({ Subtitle: undefined });
      this._Left.setSmooth('y', 0);
    }
    return this._subtitle;
  }

  _updateSubtitle() {
    if (this.subtitle) {
      this._Left.patch({
        Subtitle: {
          h: this.styles.subtitle.text.lineHeight,
          text: {
            ...this.styles.subtitle.text,
            text: this._subtitle,
            wordWrapWidth: this._textWidth
          }
        }
      });
    } else {
      this._Left.setSmooth('y', 0);
    }
    if (!this._Subtitle) {
      this._Left.setSmooth('y', 0);
      return;
    }

    if (this.hasFocus()) {
      if (this._smooth) {
        this._Subtitle.setSmooth('color', this.styles.focused.subtitle.color);
      } else {
        this._Subtitle.color = this.styles.focused.subtitle.color;
      }
      if (this.collapse == true && !this._Subtitle) {
        return;
      }
    } else {
      if (this._smooth) {
        this._Subtitle.setSmooth(
          'color',
          this.collapse ? 0 : this.styles.subtitle.color
        );
        this.collapse &&
          this._Left.setSmooth('y', this._Subtitle.renderHeight / 2);
      } else {
        this.collapse ? 0 : this.styles.subtitle.color;
        this._Subtitle.color = this.styles.subtitle.color;
      }
    }
    if (this.collapse && !this.hasFocus()) {
      this._Subtitle.color = 0;
      this._Left.setSmooth('y', this._Subtitle.renderHeight / 2);
    }
    if (this.collapse && !this.hasFocus() && !this._Subtitle) {
      this._Left.setSmooth('y', 0);
    }
  }

  _updateIcons() {
    if (this.icon) {
      this._Right.patch({
        Icon: {
          color: this.styles.icon.color,
          icon: this.icon
        }
      });
    }

    const right = {
      flex: {
        direction: 'row'
      }
    };
    const icon = Array.isArray(this._icon) ? this._icon : [this._icon];
    icon.filter(Boolean).forEach((icon, index) => {
      right[`Icon${index}`] = {
        type: Icon,
        h: this.styles.icon.height,
        w: this.styles.icon.width,
        color: this.styles.icon.color,
        icon,
        flexItem: {
          marginLeft: index > 0 ? this.styles.icon.spacing : 0
        }
      };
    });
    if (0 < Object.keys(right).length) {
      this._Right.patch(right);
    }

    if (this.hasFocus()) {
      (this._icons || []).length &&
        this._icons.forEach(icon =>
          icon.setSmooth('color', this.styles.focused.icon.color)
        );
      this._Left.smooth = { y: 0 };

      if (this._collapseIcon) {
        this._Right.alpha = 1;
      }
    } else {
      (this._icons || []).length &&
        this._icons.forEach(icon =>
          icon.setSmooth('color', this.styles.icon.color)
        );

      if (this._collapseIcon) {
        this._Right.alpha = 0;
      }
    }
  }
  _calculateIconWidth() {
    const icon = Array.isArray(this._icon) ? this._icon : [this._icon];
    if (this._Icon == undefined) {
      return 0;
    } else {
      if (icon.length == 1) {
        const iconWidth = this.styles.icon.width + this.styles.icon.spacing;
        return iconWidth;
      }
      const iconWidth =
        icon.length * (this.styles.icon.width + this.styles.icon.spacing);
      return iconWidth;
    }
  }
  _focus() {
    super._focus();
    this._update();
  }

  _unfocus() {
    super._unfocus();
    this._update();
  }
}
