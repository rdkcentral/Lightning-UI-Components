import lng from '@lightningjs/core';
import { withExtensions } from '../../mixins';
import Base from '../../Base';
import withStyles from '../../mixins/withThemeStyles';
import styles from './Icon.styles';
import context from '../../context';
import { stringifyCompare } from '../../utils';
import { getValidColor } from '../../Styles/Colors';

class Icon extends Base {
  static get __componentName() {
    return 'Icon';
  }
  static _template() {
    return {
      w: 0,
      h: 0
    };
  }

  static get properties() {
    return ['icon'];
  }

  _init() {
    this.on('txLoaded', this._notify.bind(this));
    this.on('txError', this._handleTxtError.bind(this));
  }

  _notify() {
    this.signal('itemChanged');
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
      if (!template.texture) {
        this.smooth = {
          color:
            getValidColor(this.color) ||
            getValidColor(this._componentStyles.color)
        };
      }
    } else {
      this.color = getValidColor(this._componentStyles.color);
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

export default withExtensions(withStyles(Icon, styles));
