import Base from '../Base';
import { Icon, TextBox, ProgressBar } from '..';
import { InlineContent } from '../../layout';
import { withStyles } from '../../mixins';
import { FadeShader } from '../../textures';

export const styles = theme => ({
  h: 200,
  textPaddingLeft: theme.spacing(1),
  titleY: theme.spacing(2), // account for font whitespace
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
    verticalOffset: theme.spacing(2)
  },
  progressBarPadding: theme.spacing(3),
  animationHeight: theme.spacing(7),
  logoClipOffset: theme.spacing(4), // pads the right size of the logo to prevent clipping on scale
  fadeWidth: 100 // sets length of the fade from the right edge of the element. see textures/FadeShader.js for more details
});

export default class MetadataSmall extends withStyles(Base, styles) {
  static _template() {
    return {
      h: this.styles.h,
      clipping: true,
      flex: { direction: 'column', justifyContent: 'flex-end' },
      Content: {
        h: this.styles.h,
        flex: { direction: 'column', justifyContent: 'flex-end' },
        Title: {
          type: TextBox,
          y: this.styles.titleY,
          x: this.styles.textPaddingLeft,
          ...this.styles.title
        },
        DataClipContainer: {
          Data: {
            type: InlineContent,
            x: this.styles.textPaddingLeft,
            justify: 'flex-start',
            ...this.styles.data
          }
        },
        Logo: {
          flexItem: false,
          type: Icon,
          alpha: 0,
          ...this.styles.logo
        },
        ProgressBarWrapper: {
          h: 0
        }
      }
    };
  }

  static get properties() {
    return [
      'title',
      'data',
      'logo',
      'logoWidth',
      'logoHeight',
      'progress',
      'originalW',
      'animate',
      'animationHeight',
      'logoClipOffset',
      'fadeWidth'
    ];
  }

  static get tags() {
    return [
      'Content',
      { name: 'Title', path: 'Content.Title' },
      { name: 'Logo', path: 'Content.Logo' },
      {
        name: 'ProgressBarWrapper',
        path: 'Content.ProgressBarWrapper'
      },
      'DataClipContainer',
      { name: 'Data', path: 'Content.DataClipContainer.Data' },
      {
        name: 'ProgressBar',
        path: 'Content.ProgressBarWrapper.ProgressBar'
      }
    ];
  }

  _construct() {
    super._construct();
    this._animate = true;
    this._logoHeight = this.styles.logo.h;
    this._logoWidth = this.styles.logo.w || this._logoHeight;
    this._logoYOffset = this.styles.logo.verticalOffset;
    this._progressBarPadding = this.styles.progressBarPadding;
    this._progressBarHeight =
      this.styles.progressBarPadding + ProgressBar.styles.h;
    this._logoClipOffset = this.styles.logoClipOffset; // prevent the logo from clipping out on animation
    this._fadeWidth = this.styles.fadeWidth;
    this._animationHeight = this.styles.animationHeight;
  }

  _firstEnable() {
    super._firstEnable();
    this._whenEnabled.then(() => {
      this._update();
    });
  }

  _update() {
    this._updateWidth();
    this._updateY();
    this._updateTitle();
    this._updateLogo();
    this._updateData();
    this._updateProgress();
    this._updateShader();
  }

  $loadedInlineContent() {
    // update the shader when Data reloads
    this._updateShader();
  }

  _updateY() {
    const animateDistance = this.animationHeight;
    const focusY = 0;
    const unfocusY = this.animate ? animateDistance : 0;
    const y = this.hasFocus() ? focusY : unfocusY;

    if (this._smooth) {
      this._Content.smooth = { y };
    } else {
      this._Content.y = y;
    }
  }

  _updateWidth() {
    this.w = (this.originalW || this.w) + this._logoClipOffset;
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
        w: this.w + this.fadeWidth / 2 - logoOffset,
        shader: {
          type: FadeShader,
          positionLeft: 0,
          positionRight: this.fadeWidth + logoOffset
        },
        rtt: true
      });
    } else {
      this._DataClipContainer.shader = undefined;
    }
  }

  _updateLogo() {
    const progressBarOffset = this._progress ? this._progressBarHeight : 0;
    const height = this._Content.finalH;

    this._Logo.patch({
      type: Icon,
      w: this.logoWidth,
      h: this.logoHeight,
      icon: this.logo,
      offset: this._logoYOffset
    });

    const x = this.renderWidth - this._Logo.w - this._logoClipOffset;
    const y =
      height - (this.logoHeight + this._logoYOffset + progressBarOffset);

    if (this._smooth) {
      this._Logo.smooth = { x, y };
    } else {
      this._Logo.x = x;
      this._Logo.y = y;
    }

    if (!this.animate) {
      // show logo if metadata is persistent
      if (this._smooth) {
        this._Logo.smooth = { alpha: 1 };
      } else {
        this._Logo.alpha = 1;
      }
    }

    if (this._Logo.alpha === 0) {
      this._Logo.transition('x').on('finish', () => {
        // wait until logo is positioned to render in
        this._Logo.transition('x').off();
        if (this._smooth) {
          this._Logo.smooth = { alpha: 1 };
        } else {
          this._Logo.alpha = 1;
        }
      });
    }
  }

  _updateLogoAlpha() {
    if (this._smooth) {
      this._Logo.smooth = { alpha: 1 };
    } else {
      this._Logo.alpha = 1;
    }
  }

  _updateProgress() {
    if (this.progress) {
      this._ProgressBarWrapper.patch({
        h: this._progressBarHeight,
        ProgressBar: {
          type: ProgressBar,
          progress: this.progress,
          y: this._progressBarPadding, // offset flexItem height
          w: this.finalW
        }
      });
    }
  }

  get _shouldClipData() {
    return this._dataRenderW > this.w - this.fadeWidth;
  }

  get _dataRenderW() {
    return this._Data.finalW;
  }
}
