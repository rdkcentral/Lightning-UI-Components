import MetadataBase from '../MetadataBase';
import { withExtensions, withThemeStyles as withStyles } from '../../mixins';
import * as styles from './MetadataTile.styles';

export default class MetadataTile extends withStyles(Base, styles) {
  static _template() {
    return {
      Text: {
        flex: { direction: 'column', justifyContent: 'center' },
        FirstLineWrapper: {
          Marquee: {
            type: Marquee,
            alpha: 0
          },
          FirstLine: {
            type: InlineContent,
            alpha: 0.001,
            rtt: true
          }
        },
        SecondLineWrapper: {
          SecondLine: {
            type: InlineContent
          }
        }
      }
    };
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
      this._Text.w = this._textW;
    }
  }

  _updatePosX() {
    if (this.secondLine !== this._SecondLine.content) {
      this._SecondLineWrapper.alpha = 0.001;
    }
    if (this.secondLine && this._textW && this._SecondLine.finalW) {
      const x =
        this._textW > this._SecondLine.finalW
          ? Math.abs((this._textW - this._SecondLine.finalW) / 2)
          : 0;
      if (this.smooth) {
        this._SecondLine.smooth = { x };
      } else {
        this._SecondLine.x = x;
      }
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
  set announce(announce) {
    super.announce = announce;
  }

  get announce() {
    if (this._announce) {
      return this._announce;
    }
    return [this._FirstLine.announce, this._SecondLine.announce];
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

  get h() {
    return (
      this.firstLineTextProperties.lineHeight +
      this.secondLineTextProperties.lineHeight
    );
  }

  set h(h) {
    console.warn('warning: cannot set property "h" of MetadataTile');
  }
}
