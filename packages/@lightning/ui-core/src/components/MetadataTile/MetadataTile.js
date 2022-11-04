import MetadataBase from '../MetadataBase/index.js';
import {
  withExtensions,
  withThemeStyles as withStyles
} from '../../mixins/index.js';
import * as styles from './MetadataTile.styles.js';

class MetadataTile extends MetadataBase {
  static get __componentName() {
    return 'MetadataTile';
  }

  static get __themeStyle() {
    return styles;
  }

  _updateSubtitle() {
    if (this.description) {
      this._Subtitle.patch({ content: '' });
      this._Subtitle.alpha = 0;
      this._Subtitle.visible = false;
    } else {
      this._Subtitle.alpha = 1;
      this._Subtitle.visible = true;
      super._updateSubtitle();
    }
  }

  _updateSubtitleLayout({ h }) {
    if (this.subtitle && !this.description) {
      this._SubtitleWrapper.h = h;
      this._SubtitleWrapper.alpha = 1;
    } else {
      this._SubtitleWrapper.h = 0;
    }
  }

  set announce(announce) {
    super.announce = announce;
  }

  get announce() {
    return (
      this._announce || [
        this._Title && this._Title.announce,
        (this._Subtitle && this._Subtitle.announce) ||
          (this._Description && this._Description.announce),
        this.logoTitle
      ]
    );
  }

  _textH() {
    const titleH = (this.title && this._Title && this._Title.h) || 0;
    const subtitleH =
      (this.subtitle &&
        this._Subtitle &&
        this._Subtitle.visible &&
        this._SubtitleWrapper.h) ||
      0;
    const descriptionH =
      (this.description && this._Description && this._Description.h) || 0;
    return titleH + subtitleH + descriptionH;
  }
}

export default withExtensions(withStyles(MetadataTile, styles));
