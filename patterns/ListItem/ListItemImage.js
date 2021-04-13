import ListItem from '.';

export default class ListItemImage extends ListItem {
  static _template() {
    const template = super._template();
    return {
      ...template,
      Container: {
        Image: {
          flexItem: {
            marginRight: 16
          },
          h: 56,
          w: 56,
          zIndex: 2,
          texture: {
            type: lng.textures.ImageTexture,
            resizeMode: { type: 'cover', w: 56, h: 56 }
          }
        },
        ...template.Container,
        flex: {
          ...template.Container.flex,
          justifyContent: 'flex-start'
        }
      }
    };
  }

  _init() {
    super._init();

    if (this.icon) {
      this._Right.patch({
        flex: {
          justifyContent: 'flex-end'
        },
        flexItem: {
          grow: 1
        }
      });
    }
    this._Image.patch({
      texture: { src: this.image }
    });
    if (this.styles.radius > 0) {
      this._Image.patch({
        shader: {
          type: lng.shaders.RoundedRectangle,
          radius: this.styles.radius
        }
      });
    }
  }

  get _Image() {
    return this._Container.tag('Image');
  }

  set texture(texture) {
    this._Image.patch({
      texture
    });
  }

  get _rightOffset() {
    return 72;
  }
}
