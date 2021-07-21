import Base from '../Base';
import { Icon, TextBox, ProgressBar } from '..';
import { InlineContent } from '../../layout';
import { withStyles } from '../../mixins';
import { FadeShader } from '../../textures';

export const styles = theme => ({
  h: 200,
  title: {
    ...theme.typography.headline3,
    textColor: theme.palette.text.light.primary,
    maxLines: 2,
    maxLinesSuffix: '...'
  },
  data: {
    ...theme.typography.body3,
    textColor: theme.palette.text.light.tertiary
  },
  logo: {
    h: theme.typography.body3.lineHeight,
    offset: theme.spacing(1)
  },
  progressBarPadding: theme.spacing(3)
});

export default class MetadataSmall extends withStyles(Base, styles) {
  static _template() {
    return {
      h: this.styles.h,
      flex: { direction: 'column', justifyContent: 'flex-end' },
      Title: {
        type: TextBox,
        ...this.styles.title
      },
      DataClipContainer: {
        Data: {
          type: InlineContent,
          contentSpacing: 8,
          contentWrap: false,
          justify: 'flex-start',
          ...this.styles.data
        }
      },
      Logo: {
        flexItem: false,
        type: Icon,
        ...this.styles.logo
      },
      ProgressBarWrapper: {
        h: 0
      }
    };
  }

  static get properties() {
    return ['title', 'data', 'logo', 'logoWidth', 'logoHeight', 'progress'];
  }

  static get tags() {
    return [
      'Title',
      'Logo',
      'ProgressBarWrapper',
      'DataClipContainer',
      { name: 'Data', path: 'DataClipContainer.Data' },
      { name: 'ProgressBar', path: 'ProgressBarWrapper.ProgressBar' }
    ];
  }

  _construct() {
    super._construct();
    this._logoRenderHeight = this.logoHeight || this.styles.logo.h;
    this._logoRenderWidth = this.logoWidth || this._logoRenderHeight;
    this._logoYOffset = this.styles.logo.offset;
    this._progressBarPadding = this.styles.progressBarPadding;
    this._progressBarHeight =
      this.styles.progressBarPadding + ProgressBar.styles.h;
    this._fadeW = 100;
  }

  _init() {
    this._update();
  }

  _update() {
    this._updateWidth();
    this._updateTitle();
    this._updateData();
    this._updateLogo();
    this._updateProgress();
    this._updateShader();
  }

  $loadedInlineContent() {
    // update the shader if Data reloads
    this._updateShader();
  }

  _updateWidth() {
    this.w = this.originalW || this.w;
  }

  _updateTitle() {
    const wordWrapWidth = this._logo ? this.w - this._Logo.finalW : this.w;
    this._Title.patch({
      content: this._title,
      wordWrapWidth
    });
  }

  _updateData() {
    if (this.data) {
      this._Data.content = this.data;
      this._DataClipContainer.w = this.w - this._Logo.w;
      this._DataClipContainer.h = this._Data.finalH;
    }
  }

  _updateShader() {
    if (this._shouldClipData) {
      const logoOffset = this.logo ? this._Logo.w + this._Logo.offset : 0;
      this.stage.update();
      this._Data.loadTexture();
      this._DataClipContainer.patch({
        w: this.w + this._fadeW / 2 - logoOffset / 2,
        shader: {
          type: FadeShader,
          positionLeft: 0,
          positionRight: this._fadeW + logoOffset
        },
        rtt: true
      });
    } else {
      this._DataClipContainer.shader = undefined;
    }
  }

  _updateLogo() {
    const ratio = this.logoWidth / this.logoHeight;
    const progressBarOffset = this._progress ? this._progressBarHeight : 0;
    const height = this.finalH || this.h;
    this._Logo.patch({
      type: Icon,
      h: this._logoRenderHeight,
      w: this._logoRenderHeight * ratio,
      icon: this.logo,
      offset: this._logoYOffset
    });

    this._Logo.x = this.renderWidth - this._Logo.w;
    this._Logo.y =
      height - (this._logoRenderHeight + this._logoYOffset + progressBarOffset);
  }

  _updateProgress() {
    if (this._progress) {
      this._ProgressBarWrapper.patch({
        h: this._progressBarHeight,
        ProgressBar: {
          type: ProgressBar,
          progress: this._progress,
          y: this._progressBarPadding, // offset flexItem height
          w: this.finalW
        }
      });
    }
  }

  get _shouldClipData() {
    return this._dataRenderW > this.w - this._fadeW;
  }

  get _dataRenderW() {
    return this._Data.finalW;
  }
}
