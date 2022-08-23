import Base from '../../Base';
import Icon from '../Icon';
import TextBox from '../TextBox';
import { FadeShader } from '../../textures';
import withExtensions from '../../mixins/withExtensions';
import * as styles from './MetadataBase.styles';

class Metadata extends Base {
  static get __componentName() {
    return 'MetadataBase';
  }

  static get __themeStyles() {
    return styles;
  }

  static _template() {
    return {
      Text: {
        flex: { direction: 'column', justifyContent: 'flex-start' },
        Title: {
          type: TextBox,
          signals: {
            textBoxChanged: '_resolveTitle'
          }
        },
        SubtitleWrapper: {
          Subtitle: {
            type: TextBox,
            signals: {
              textBoxChanged: '_resolveSubtitle'
            }
          }
        },
        Description: {
          type: TextBox,
          signals: {
            textBoxChanged: '_resolveDescription'
          }
        }
      },
      Logo: {
        flexItem: false,
        type: Icon
      }
    };
  }

  _init() {
    this._update();
  }

  static get properties() {
    return [
      'title',
      'subtitle',
      'description',
      'logo',
      'logoWidth',
      'logoHeight',
      'logoTitle',
      'logoPosition'
    ];
  }

  _setTitle(title) {
    if (title) {
      this._titlePromise = new Promise(resolve => {
        this._titlePromiseResolver = resolve;
      });
    } else {
      this._titlePromise = undefined;
    }
    return title;
  }

  _setSubtitle(subtitle) {
    if (subtitle) {
      this._subtitlePromise = new Promise(resolve => {
        this._subtitlePromiseResolver = resolve;
      });
    } else {
      this._subtitlePromise = undefined;
    }
    return subtitle;
  }

  _setDescription(description) {
    if (description) {
      this._descriptionPromise = new Promise(resolve => {
        this._descriptionPromiseResolver = resolve;
      });
    } else {
      this._descriptionPromise = undefined;
    }
    return description;
  }

  _getLogoWidth() {
    return this._logoWidth !== undefined
      ? this._logoWidth
      : this.style.logoWidth;
  }

  _setLogoWidth(w) {
    return w !== undefined ? w : this.logoWidth;
  }

  _getLogoHeight() {
    return this._logoHeight !== undefined
      ? this._logoHeight
      : this.style.logoHeight;
  }

  _setLogoHeight(h) {
    return h !== undefined ? h : this.logoHeight;
  }

  static get tags() {
    return [
      'Text',
      {
        name: 'Title',
        path: 'Text.Title'
      },
      {
        name: 'SubtitleWrapper',
        path: 'Text.SubtitleWrapper'
      },
      {
        name: 'Subtitle',
        path: 'Text.SubtitleWrapper.Subtitle'
      },
      {
        name: 'Description',
        path: 'Text.Description'
      },
      'Logo'
    ];
  }

  async _update() {
    this._updateLines();
    await Promise.all(
      [
        this._titlePromise,
        this._subtitlePromise,
        this._descriptionPromise
      ].filter(Boolean)
    );
    this._updatePositions();
    this._updateLogo();
    this.signal('updateComponentDimensions');
  }

  _updateLines() {
    this._Text.w = this._textW();
    this._updateTitle();
    this._updateSubtitle();
    this._updateDescription();
  }

  _updatePositions() {
    this._Text.h = this._textH();
    this.h = Math.max(this.logoHeight, this._Text.h);
    this._Text.x =
      this.logo && this.logoPosition === 'left'
        ? this.logoWidth + this.style.logoPadding
        : 0;
    this._Text.y = (this.h - this._Text.h) / 2;

    this.signal('updateComponentDimensions');
  }

  _updateTitle() {
    this._Title.patch({
      content: this.title,
      textStyle: this.style.titleTextProperties,
      wordWrap: true,
      maxLines: 1,
      wordWrapWidth: this._Text.w
    });
  }

  _updateSubtitle() {
    this._Subtitle.patch({
      content: this.subtitle,
      textProperties: this.style.subtitleTextProperties,
      justify: 'flex-start'
    });
    if (this._Subtitle.finalW > this._textW()) {
      this._SubtitleWrapper.patch({
        w: this._textW() + this.style.fadeWidth / 2,
        shader: {
          type: FadeShader,
          positionLeft: 0,
          positionRight: this.style.fadeWidth
        },
        rtt: true
      });
    } else {
      this._SubtitleWrapper.shader = undefined;
    }
    this._SubtitleWrapper.visible = this.subtitle ? true : false;
  }

  _updateDescription() {
    this._Description.patch({
      content: this.description,
      textStyle: this.style.descriptionTextProperties,
      wordWrap: true,
      maxLines: 1,
      wordWrapWidth: this._Text.w
    });
  }

  _resolveTitle() {
    this._titlePromiseResolver && this._titlePromiseResolver();
  }

  _resolveSubtitle({ h }) {
    this._subtitlePromiseResolver && this._subtitlePromiseResolver();
    if (this.subtitle) {
      this._SubtitleWrapper.h = h;
      this._SubtitleWrapper.alpha = 1;
    } else {
      this._SubtitleWrapper.h = 0;
    }
  }

  _resolveDescription() {
    this._descriptionPromiseResolver && this._descriptionPromiseResolver();
  }

  _updateLogo() {
    this.logoPosition = this.logoPosition || 'right';
    this._Logo.patch({
      type: Icon,
      w: this.logoWidth,
      h: this.logoHeight,
      icon: this.logo
    });

    this._Logo.x = this.logoPosition === 'left' ? 0 : this.w - this._Logo.w;
    this._Logo.y = (this.h - this.logoHeight) / 2;
  }

  _textW() {
    return this.w - (this.logo ? this.logoWidth + this.style.logoPadding : 0);
  }

  _textH() {
    const titleH = (this.title && this._Title && this._Title.h) || 0;
    const subtitleH =
      (this.subtitle && this._SubtitleWrapper && this._SubtitleWrapper.h) || 0;
    const descriptionH =
      (this.description && this._Description && this._Description.h) || 0;
    return titleH + subtitleH + descriptionH;
  }

  get announce() {
    if (this._announce) {
      return this._announce;
    }
    return [
      this.title,
      this._Subtitle.announce,
      this.description,
      this.logoTitle
    ];
  }

  set announce(announce) {
    super.announce = announce;
  }
}

export default withExtensions(MetadataBase);
