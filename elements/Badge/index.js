import lng from '@lightningjs/core';
import Base from '../../Base';
import Icon from '../Icon';
import * as styles from './Badge.styles';
import TextBox from '../TextBox';
import { withExtensions } from '../../mixins';
import { getHexColor } from '../../utils';

class Badge extends Base {
  static _template() {
    return {
      rect: true,
      shader: {
        type: lng.shaders.RoundedRectangle
      },
      BadgeText: {
        type: TextBox,
        mountY: 0.5,
        signals: {
          textBoxChanged: '_badgeTextLoaded'
        }
      },
      Icon: {
        type: Icon,
        mountY: 0.5,
        signals: {
          itemChanged: '_iconLoaded'
        }
      }
    };
  }

  static get __componentName() {
    return 'Badge';
  }

  static get __themeStyles() {
    return styles;
  }

  static get properties() {
    return [
      'icon',
      'title',
      'iconWidth',
      'iconColor',
      'iconHeight',
      'iconAlign'
    ];
  }

  static get tags() {
    return ['BadgeText', 'Icon'];
  }

  _setTitle(v) {
    this._badgeTextPromise = new Promise(resolve => {
      this._badgeTextPromiseResolver = resolve;
    });
    return v;
  }

  _setIcon(v) {
    this._iconPromise = new Promise(resolve => {
      this._iconPromiseResolver = resolve;
    });
    return v;
  }

  _setIconWidth(v) {
    this._iconPromise = new Promise(resolve => {
      this._iconPromiseResolver = resolve;
    });
    return v;
  }

  _setIconHeight(v) {
    this._iconPromise = new Promise(resolve => {
      this._iconPromiseResolver = resolve;
    });
    return v;
  }

  async _update() {
    this._updateText();
    this._updateIcon();
    await Promise.all(
      [this._badgeTextPromise, this._iconPromise].filter(Boolean)
    );
    this._updateWidth();
    this._updateBackground();
    this._updatePositions();
  }

  _badgeTextLoaded() {
    this._badgeTextPromiseResolver && this._badgeTextPromiseResolver();
  }

  _iconLoaded() {
    this._iconPromiseResolver && this._iconPromiseResolver();
  }

  _updateBackground() {
    this.patch({
      h: Math.max(this._BadgeText.h, this._Icon.h) + this.style.paddingY * 2,
      color: this.style.backgroundColor,
      shader: { radius: this.style.radius }
    });
  }

  _updateText() {
    if (this._BadgeText) {
      this._BadgeText.patch({
        textAlign: this.style.textAlign,
        textStyle: this.style.textStyle,
        content: this.title || '',
        x: this.style.paddingX,
        y: this._h / 2
      });
    }
  }

  _updateIcon() {
    this._Icon.patch({
      icon: this.icon,
      w: this.iconWidth,
      h: this.iconHeight,
      style: {
        color: getHexColor(this.style.iconColor)
      }
    });
  }

  _updateWidth() {
    let contentSpacing = 0;
    if (this.icon && this.title) {
      contentSpacing = this.style.contentSpacing;
    }
    this.w = this.title
      ? this._BadgeText.renderWidth +
        this.style.paddingX * 2 +
        (this._Icon.finalW || 0) +
        contentSpacing
      : this.style.paddingX * 2 + (this._Icon.finalW || 0);
  }

  _updatePositions() {
    this._Icon.y = this.h / 2;
    // set icon and text position
    if (this.iconAlign === 'left' && this.title) {
      this._Icon.x = this.style.paddingX;
      this._BadgeText.x =
        this._Icon.x + this._Icon.finalW + this.style.contentSpacing;
    } else if (this.iconAlign === 'right' && this.title) {
      this._BadgeText.x = this.style.paddingX;
      this._Icon.x =
        this._BadgeText.x +
        this._BadgeText.renderWidth +
        this.style.contentSpacing;
    } else {
      this._Icon.x = this.style.paddingX;
    }
    this.fireAncestors('$loadedBadge', this);
    this._BadgeText.y = this.h / 2; // Set new alignment for badge text
  }

  _getIconHeight() {
    if (this.icon) {
      if (!this._Icon.finalH) {
        if (this._BadgeText._Text) {
          return this._BadgeText._Text.text.lineHeight;
        }
      } else {
        return this._Icon.finalH;
      }
    } else {
      return 0;
    }
  }
}

export default withExtensions(Badge);
