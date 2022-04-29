import Icon from '../../elements/Icon';
import ListItemBase from './ListItemBase';
import styles from './ListItem.styles.js';
import withStyles from '../../mixins/withStyles';
import { MarqueeText } from '../../elements';
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
      2 * this.styles.paddingRight -
      this.styles.paddingLeft -
      this._calculateIconWidth()
    );
  }

  get _icons() {
    return this._Right.children;
  }

  get announce() {
    if (this._announce) {
      return this._announce;
    }
    return this.title + ` ${this.subtitle !== undefined ? this.subtitle : ''}`;
  }

  set announce(announce) {
    super.announce = announce;
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
    if (!this._title) {
      this._Left.patch({ Title: undefined });
      return;
    }

    this._Left.patch({
      w: this._textWidth,
      Title: {
        y: 2,
        h: this.styles.title.text.lineHeight + 4,
        w: this._textWidth,
        type: MarqueeText,
        color: this.hasFocus()
          ? this.styles.focused.title.color
          : this.styles.title.color,
        title: {
          ...this.styles.title.text,
          text: this._title
        }
      }
    });
    this.hasFocus()
      ? this._Title.startScrolling()
      : this._Title.stopScrolling();
  }

  _updateSubtitle() {
    if (!this.subtitle) {
      this._Left.patch({ Subtitle: undefined });
      this._Left.smooth = { y: 0 };
      return;
    }
    if (!this._Subtitle) {
      this._Left.patch({ Subtitle: { type: MarqueeText } });
    }
    this._Left.patch({
      w: this._textWidth,
      Subtitle: {
        h: this.styles.subtitle.text.lineHeight,
        w: this._textWidth,
        color: this.hasFocus()
          ? this.styles.focused.subtitle.color
          : this.styles.subtitle.color,
        title: {
          ...this.styles.subtitle.text,
          text: this._subtitle,
          lineHeight: this.styles.subtitle.text.lineHeight + 4
        }
      }
    });
    if (this.collapse) {
      this._Subtitle.smooth = { alpha: Number(this.hasFocus()) };
      this._Left.smooth = {
        y: this.hasFocus() ? 0 : this._Subtitle.renderHeight / 2
      };
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

    this._Right.patch(
      this._iconArray.reduce(
        (patchObject, icon, index) => {
          patchObject[`Icon${index}`] = {
            type: Icon,
            h: this.styles.icon.height,
            w: this.styles.icon.width,
            color: this.styles.icon.color,
            icon,
            flexItem: {
              marginLeft: index > 0 ? this.styles.icon.spacing : 0
            }
          };
          return patchObject;
        },
        { flex: { direction: 'row' } }
      )
    );

    const color = this.hasFocus()
      ? this.styles.focused.icon.color
      : this.styles.icon.color;
    if (this._icons && this._icons.length) {
      this._icons.forEach(icon => (icon.smooth = { color }));
    }
    if (this._collapseIcon) {
      this._Right.visible = this.hasFocus();
    }
  }

  _calculateIconWidth() {
    if (
      (this._collapseIcon && !this.hasFocus()) ||
      this._iconArray[0] === null
    ) {
      return 0;
    } else if (this._iconArray.length == 1) {
      return this.styles.icon.width;
    }
    return (
      this._iconArray.length *
      (this.styles.icon.width + this.styles.icon.spacing)
    );
  }

  get _iconArray() {
    return (Array.isArray(this._icon) ? this._icon : [this._icon]).filter(
      Boolean
    );
  }
}
