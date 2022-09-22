import lng from '@lightningjs/core';
import { withExtensions } from '../../mixins';
import Base from '../../Base';
import * as styles from './Icon.styles';
import context from '../../context';
import { stringifyCompare, getValidColor } from '../../utils';

class Icon extends Base {
  static get __componentName() {
    return 'Icon';
  }

  static get __themeStyles() {
    return styles;
  }

  static get properties() {
    return ['icon'];
  }

  _init() {
    this.on('txLoaded', this._notify.bind(this));
    this.on('txError', this._handleTxtError.bind(this));
  }

  _notify() {
    this.w = this.finalW;
    this.h = this.finalH;
    this.signal('itemChanged');
    this.fireAncestors('$itemChanged');
  }

  // eslint-disable-next-line no-unused-vars
  _handleTxtError(error) {
    context.error(`Unable to load icon ${this._icon}`);
    this._icon = null;
    this.texture = null;
  }

  _update() {
    if (!this._icon) {
      this.texture = null;
      return;
    }
    const { icon, w, h } = this;
    if (
      !this.prevTemplateParams ||
      !stringifyCompare({ icon, w, h }, this.prevTemplateParams)
    ) {
      this.prevTemplateParams = { icon, w, h };
      const template = getIconTemplate(icon, w, h);
      this.patch(template);
      // only update color if color style is defined in theme
      if (!template.texture && this.style.color) {
        this.smooth = {
          color: getValidColor(this.style.color)
        };
      }
    } else if (this.style.color) {
      this.color = getValidColor(this.style.color);
    }

    // setting the radius on the Icon component
    if (this.radius || this.style.radius) {
      this.shader = {
        radius: this.radius || this.style.radius,
        type: lng.shaders.RoundedRectangle
      };
    } else {
      this.shader = undefined;
    }
  }
}

const [isSvgTag, isSvgURI, isImageURI] = [
  /^<svg.*<\/svg>$/,
  /\.svg$/,
  /\.(a?png|bmp|gif|ico|cur|jpe?g|pjp(eg)?|jfif|tiff?|webp)$/
].map(regex => RegExp.prototype.test.bind(regex));

function getIconTemplate(icon, w, h) {
  const template = { w, h };

  switch (true) {
    case isSvgTag(icon):
      template.texture = lng.Tools.getSvgTexture(
        `data:image/svg+xml,${encodeURIComponent(icon)}`,
        w,
        h
      );
      break;
    case isSvgURI(icon):
      template.texture = lng.Tools.getSvgTexture(icon, w, h);
      break;
    case isImageURI(icon):
      template.src = icon;
      break;
    default:
      template.src = icon;
      break;
  }
  return template;
}

export default withExtensions(Icon);
