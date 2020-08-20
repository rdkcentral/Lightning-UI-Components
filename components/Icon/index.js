import lng from 'wpe-lightning';

export default class Icon extends lng.Component {
  static _template() {
    return {
      color: 0xffffffff,
      w: 0,
      h: 0
    };
  }

  get icon() {
    return this._icon;
  }

  set icon(icon) {
    this._icon = icon;
    this._update();
  }

  _init() {
    this._update();
  }

  _update() {
    const { icon, w, h } = this;
    const template = getIconTemplate(icon, w, h);
    this.patch(template);
  }
}

const [isSvgTag, isSvgURI, isImageURI] = [
  /^<svg.*<\/svg\>$/,
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
      throw new TypeError('invalid icon ' + icon);
  }
  return template;
}
