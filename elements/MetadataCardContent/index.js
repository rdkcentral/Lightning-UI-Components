import MetadataBase from '../MetadataBase';
import Provider from '../Provider';
import TextBox from '../TextBox';
import * as styles from './MetadataCardContent.styles.js';
import { withExtensions } from '../../mixins';
import { FadeShader } from '../../textures';

class MetadataCardContent extends MetadataBase {
  static get __componentName() {
    return 'MetadataCardContent';
  }

  static get __themeStyles() {
    return styles;
  }

  static _template() {
    return {
      Text: {
        flex: { direction: 'column', justifyContent: 'flex-start' },
        Title: {
          type: TextBox
        },
        Description: {
          type: TextBox
        }
      },
      DetailsWrapper: {
        DetailsFader: {
          Details: {
            mountY: 0.5,
            type: TextBox
          }
        },
        Provider: {
          mount: 1,
          type: Provider
        }
      }
    };
  }

  static get properties() {
    return ['description', 'details', 'provider', 'title'];
  }

  static get tags() {
    return [
      'Text',
      {
        name: 'Title',
        path: 'Text.Title'
      },
      {
        name: 'Description',
        path: 'Text.Description'
      },
      'DetailsWrapper',
      {
        name: 'DetailsFader',
        path: 'DetailsWrapper.DetailsFader'
      },
      {
        name: 'Details',
        path: 'DetailsWrapper.DetailsFader.Details'
      },
      {
        name: 'Provider',
        path: 'DetailsWrapper.Provider'
      }
    ];
  }

  _update() {
    this._updateLines();
    this._updateProvider();
    this._updatePositions();
  }

  _updateLines() {
    this._Text.w = this.w;
    this._updateTitle();
    this._updateDescription();
    this._updateDetails();
  }

  _updateDescription() {
    this._Description.patch({
      content: this.description,
      textStyle: this.style.descriptionTextProperties,
      wordWrap: true,
      wordWrapWidth: this._Text.w
    });
  }

  _updateDetails() {
    const maxWidth = this._detailsMaxW();
    this._Details.patch({
      content: this.details,
      textStyle: this.style.detailsTextProperties,
      wordWrap: true,
      maxLines: 1,
      wordWrapWidth: maxWidth + this.style.fadeWidth / 2,
      maxLinesSuffix: ''
    });
    if (this._Details.finalW > maxWidth) {
      this._DetailsFader.patch({
        w: maxWidth + this.style.fadeWidth / 2,
        shader: {
          type: FadeShader,
          positionLeft: 0,
          positionRight: this.style.fadeWidth
        }
      });
    } else {
      this._DetailsFader.shader = undefined;
    }
  }

  _updateProvider() {
    if (this.provider) {
      this._Provider.patch({
        ...this.provider,
        style: this.style.providerStyle
      });
    }
  }

  _updatePositions() {
    this._Text.h = this._textH();
    this._Text.w = this._textW();

    this._DetailsWrapper.w = this._textW();
    this._DetailsWrapper.h = this._providerH();
    this._DetailsWrapper.y = this.h - this._DetailsWrapper.h;

    this._Details.y = this._DetailsWrapper.h / 2;

    this._Provider.x = this._DetailsWrapper.w - this._providerW();
    this._Provider.y = this._DetailsWrapper.h - this._providerH();
  }

  _textW() {
    return this.w;
  }

  _textH() {
    return this.h - this._providerH();
  }

  _providerW() {
    return this._Provider._Row._Items.w;
  }

  _providerH() {
    return this._Provider._Row._Items.h;
  }

  _detailsMaxW() {
    return this.w - this._providerW() - this.style.fadeWidth / 2;
  }

  get announce() {
    if (this._announce) {
      return this._announce;
    }
    return [
      this.title,
      this.description,
      this.details,
      this._Provider.announce
    ];
  }

  set announce(announce) {
    super.announce = announce;
  }
}

export default withExtensions(MetadataCardContent);
