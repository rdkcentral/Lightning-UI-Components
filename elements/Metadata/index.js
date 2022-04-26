import Base from '../../Base';
import Icon from '../Icon';
import InlineContent from '../../layout/InlineContent';
import TextBox from '../TextBox';
import { FadeShader } from '../../textures';
import withStyles from '../../mixins/withThemeStyles';
import withExtensions from '../../mixins/withExtensions';
import styles from './Metadata.styles';

class Metadata extends Base {
  static get __componentName() {
    return 'Metadata';
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
            type: InlineContent
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
      : this._componentStyles.logoWidth;
  }

  _setLogoWidth(w) {
    return w !== undefined ? w : this.logoWidth;
  }

  _getLogoHeight() {
    return this._logoHeight !== undefined
      ? this._logoHeight
      : this._componentStyles.logoHeight;
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
        ? this.logoWidth + this._componentStyles.logoPadding
        : 0;
    this._Text.y = (this.h - this._Text.h) / 2;
  }

  _updateTitle() {
    this._Title.patch({
      content: this.title,
      textStyle: this._componentStyles.titleTextProperties,
      wordWrap: true,
      maxLines: 1,
      wordWrapWidth: this._Text.w
    });
  }

  _updateSubtitle() {
    this._Subtitle.patch({
      content: this.subtitle,
      textProperties: this._componentStyles.subtitleTextProperties,
      justify: 'flex-start'
    });
    if (this._Subtitle.finalW > this._textW()) {
      this._SubtitleWrapper.patch({
        w: this._textW() + this._componentStyles.fadeWidth / 2,
        shader: {
          type: FadeShader,
          positionLeft: 0,
          positionRight: this._componentStyles.fadeWidth
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
      textStyle: this._componentStyles.descriptionTextProperties,
      wordWrap: true,
      maxLines: 1,
      wordWrapWidth: this._Text.w
    });
  }

  _resolveTitle() {
    this._titlePromiseResolver && this._titlePromiseResolver();
  }

  // TODO: swap out for signal when InlineContent is refactored
  $loadedInlineContent() {
    this._subtitlePromiseResolver && this._subtitlePromiseResolver();
    if (this.subtitle) {
      this._SubtitleWrapper.h = this._Subtitle.multiLineHeight;
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
    return (
      this.w -
      (this.logo ? this.logoWidth + this._componentStyles.logoPadding : 0)
    );
  }

  _textH() {
    const titleH = (this.title && this._Title && this._Title.h) || 0;
    const subtitleH =
      (this.subtitle && this._Subtitle && this._Subtitle.multiLineHeight) || 0;
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

export default withExtensions(withStyles(Metadata, styles));
