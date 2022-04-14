import lng from '@lightningjs/core';
import ListItem from '.';
import styles from './ListItemImage.styles';
import { withStyles } from '../../mixins';
export default class ListItemImage extends withStyles(ListItem, styles) {
  static _template() {
    const template = super._template();
    return {
      ...template,
      Container: {
        Image: {
          flexItem: {
            marginRight: this.styles.paddingRight
          },
          zIndex: 2,
          texture: {}
        },
        ...template.Container,
        flex: {
          ...template.Container.flex,
          justifyContent: 'flex-start'
        }
      }
    };
  }

  static get properties() {
    return [...super.properties, 'image', 'imageSize'];
  }

  static get tags() {
    return [...super.tags, { name: 'Image', path: 'Container.Image' }];
  }
  _construct() {
    super._construct();
    this._imageSize = this.styles.imageSize;
  }
  get _textWidth() {
    return (
      this.w -
      this.imageSize -
      this.styles.paddingRight -
      2 * this.styles.paddingLeft -
      this._calculateIconWidth()
    );
  }

  // Make sure src is ignored if passed in
  set src(src) {
    return;
  }

  _update() {
    this._updateIcon();
    this._updateImage();
    this._updateRadius();
    super._update();
  }

  _updateIcon() {
    if (this.icon) {
      this._Right.patch({
        flex: {
          justifyContent: 'flex-end'
        },
        flexItem: {
          grow: 1
        }
      });
    } else {
      this._Right.patch({
        flex: {},
        flexItem: {}
      });
    }
  }

  _updateImage() {
    if (this.image) {
      const paddingTop = this.styles.paddingTop;
      const h =
        this.size == 'xsmall' ? this.styles.xsmallHeight : this.styles.h;
      const imageHeight = this.imageSize + 2 * paddingTop;
      if (imageHeight > h) {
        this.h = imageHeight;
      } else {
        this.h = h;
      }
      this._Image.patch({
        h: this.imageSize,
        w: this.imageSize,
        texture: {
          type: lng.textures.ImageTexture,
          resizeMode: {
            type: 'cover',
            h: this.imageSize,
            w: this.imageSize
          },
          src: this.image
        }
      });
    } else {
      this._Image.patch({
        texture: undefined
      });
    }
  }

  _updateRadius() {
    if (this.styles.radius > 0) {
      this._Image.patch({
        shader: {
          type: lng.shaders.RoundedRectangle,
          radius: this.styles.radius
        },
        rtt: true
      });
    } else {
      this._Image.patch({
        shader: undefined
      });
    }
  }
}
