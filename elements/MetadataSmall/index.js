import Base from '../Base';
import styles from './MetadataSmall.styles';
import withStyles from '../../mixins/withStyles';
import InlineContent from '../../layout/InlineContent';
import Icon from '../Icon';
import { FadeShader } from '../../textures';
import TextBox from '../TextBox';

export default class MetadataSmall extends withStyles(Base, styles) {
  static _template() {
    return {
      Text: {
        flex: { direction: 'column' },
        FirstLine: {
          type: TextBox,
          signals: {
            textBoxChanged: '_textBoxChanged'
          }
        },
        SecondLineWrapper: {
          SecondLine: {
            type: InlineContent,
            y: this.styles.secondLinePaddingTop
          }
        }
      },
      Logo: {
        type: Icon,
        alpha: 0.001
      }
    };
  }

  static get properties() {
    return [
      'logo',
      'logoW',
      'logoH',
      'logoSpacing',
      'firstLine',
      'secondLine',
      'justify',
      'fadeWidth',
      'firstLineTextProperties',
      'secondLineTextProperties',
      'focusScaleConst',
      'unfocusScaleConst'
    ];
  }

  static get tags() {
    return [
      'Text',
      'SecondLineWrapper',
      'Logo',
      'FirstLine',
      { name: 'SecondLine', path: 'SecondLineWrapper.SecondLine' }
    ];
  }

  _construct() {
    super._construct();
    this._logoSpacing = this.styles.logoSpacing;
    this._logoW = this.styles.logoW;
    this._justify = this.styles.justify;
    this._firstLineTextProperties = this.styles.firstLineTextProperties;
    this._secondLineTextProperties = this.styles.secondLineTextProperties;
    this._fadeWidth = this.styles.fadeWidth;
    this._w = this.styles.w;
    this._secondLinePaddingTop = this.styles.secondLinePaddingTop;
  }

  _init() {
    if (this.focusScaleConst === undefined) {
      this._focusScaleConst = this._getFocusScale(this.w, this.h);
    }
    if (this.unfocusScaleConst === undefined) {
      this._unfocusScaleConst = this._getUnfocusScale(this.w, this.h);
    }
    this._enabledLogoListeners();
    super._init();
  }

  _enabledLogoListeners() {
    this._Logo.on('txLoaded', () => this._logoTxListenerCb(false));
    this._Logo.on('txError', () => this._logoTxListenerCb(true));
  }

  _logoTxListenerCb(isError = false) {
    this.logo = isError ? null : this.logo;
    this._logoLoaded = !isError;
    this._requestUpdateDebounce();
    this._alphaLogo();
  }

  _alphaLogo() {
    const alpha = this.logo ? 1 : 0;
    if (this._smooth) {
      this._Logo.smooth = { alpha };
    } else {
      this._Logo.patch({ alpha });
    }
  }

  $loadedInlineContent(line) {
    if (line.ref && this.tag(line.ref + 'Wrapper')) {
      this.tag(line.ref + 'Wrapper').h = line.textHeight;
      this.tag(line.ref + 'Wrapper').alpha = 1;
    }
    line.h = line.content ? line.textHeight : 0;
    this._updateComponentDimensions();
  }

  _textBoxChanged() {
    this._updateComponentDimensions();
  }

  _update() {
    this._updateFirstLine();
    this._updateSecondLine();
    this._updateLogo();
  }

  _updateComponentDimensions() {
    this._Text.h = this._FirstLine.renderHeight + this._SecondLine.h;
    this.h = this._FirstLine.renderHeight + this._SecondLine.renderHeight;
    this._updateLogo();
  }

  _updateLogo() {
    this._Logo.w = this.logoW;
    if (this.logoH) {
      this._Logo.h = this.logoH;
    }

    const logoH = this.logoH || this._Logo.finalH || this.h;
    const logoX = this._textW + this.logoSpacing;

    const logoY =
      this._Text.h > logoH
        ? (this._Text.h - logoH) / 2
        : (logoH - this._Text.h) / 2;

    if (this._smooth && this._logoLoaded) {
      this._Logo.smooth = { x: logoX, y: logoY };
    } else {
      this._Logo.patch({ x: logoX, y: logoY });
    }

    if (this._Logo.icon !== this.logo) {
      this._logoLoaded = false;
      this._Logo.icon = this.logo;
    }
  }

  _updateFirstLine() {
    this._firstLineObject.component.patch({
      content: this._firstLineObject.content,
      wordWrap: true,
      wordWrapWidth: this._textW,
      style: this._firstLineTextProperties
    });
  }

  _updateSecondLine() {
    this._secondLineObject.component.patch({
      justify: this._justify,
      content: this._secondLineObject.content,
      textProperties: this._secondLineObject.textProps
    });
    this._updateShader(this._secondLineObject);
    this._secondLineObject.wrapper.visible = this._secondLineObject.content
      ? true
      : false;
  }

  _updateShader(line) {
    if (line.component.finalW > this._textW) {
      line.wrapper.patch({
        w: this._textW + this.fadeWidth / 2,
        shader: {
          type: FadeShader,
          positionLeft: 0,
          positionRight: this.fadeWidth
        },
        rtt: true
      });
    } else {
      line.wrapper.shader = undefined;
    }
  }

  get _linesArray() {
    return [this._firstLineObject, this._secondLineObject];
  }

  get _firstLineObject() {
    return {
      component: this._FirstLine,
      content: this._firstLine,
      textProps: this._firstLineTextProperties
    };
  }

  get _secondLineObject() {
    return {
      wrapper: this._SecondLineWrapper,
      component: this._SecondLine,
      content: this._secondLine,
      textProps: this._secondLineTextProperties
    };
  }

  set announce(announce) {
    super._announce = announce;
  }

  get announce() {
    if (this._announce) {
      return this._announce;
    }
    return [this._FirstLine.announce, this._SecondLine.announce];
  }

  get _textW() {
    return this._focusW - (this.logo ? this.logoW + this.logoSpacing : 0);
  }

  get _focusW() {
    const scale =
      (this.hasFocus() ? this.focusScaleConst : this.unfocusScaleConst) || 1;
    return this.w * scale;
  }
}
