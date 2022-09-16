import MetadataBase from '../MetadataBase';
import { withExtensions, withThemeStyles as withStyles } from '../../mixins';
import * as styles from './MetadataTile.styles';

class MetadataTile extends MetadataBase {
  static get __componentName() {
    return 'MetadataTile';
  }

  static get __themeStyles() {
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

  _resolveSubtitle({ h }) {
    this._subtitlePromiseResolver && this._subtitlePromiseResolver();
    if (this.subtitle && !this.description) {
      this._SubtitleWrapper.h = h;
      this._SubtitleWrapper.alpha = 1;
    } else {
      this._SubtitleWrapper.h = 0;
    }
    this.signal('updateComponentDimensions');
  }

  get announce() {
    if (this._announce) {
      return this._announce;
    }
    return [
      this.title,
      !this.description && this._Subtitle.announce,
      !this.subtitle && this.description,
      this.logoTitle
    ];
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
