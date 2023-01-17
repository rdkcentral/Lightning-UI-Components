import {
  withExtensions,
  MetadataBase,
  TextBox,
  FadeShader
} from '@lightning/ui-core';
import Provider from '../Provider';
import * as styles from './MetadataCardContent.styles.js';

class MetadataCardContent extends MetadataBase {
  static get __componentName() {
    return 'MetadataCardContent';
  }

  static get __themeStyle() {
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
        Description: {
          type: TextBox,
          signals: {
            textBoxChanged: '_resolveDescription'
          }
        }
      },
      DetailsWrapper: {
        DetailsFader: {
          Details: {
            mountY: 0.5,
            type: TextBox,
            signals: {
              textBoxChanged: '_resolveDetails'
            }
          }
        },
        Provider: {
          mount: 1,
          type: Provider,
          signals: {
            providerChanged: '_resolveProvider'
          }
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

  _setDetails(details) {
    if (details) {
      this._detailsPromise = new Promise(resolve => {
        this._detailsPromiseResolver = resolve;
      });
    } else {
      this._detailsPromise = undefined;
    }
    return details;
  }

  _setProvider(provider) {
    if (provider) {
      this._providerPromise = new Promise(resolve => {
        this._providerPromiseResolver = resolve;
      });
    } else {
      this._providerPromise = undefined;
    }
    return provider;
  }

  async _update() {
    this._updateLines();
    this._updateProvider();
    await Promise.all(
      [
        this._titlePromise,
        this._descriptionPromise,
        this._detailsPromise,
        this._providerPromise
      ].filter(Boolean)
    );
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
      style: {
        textStyle: {
          ...this.style.descriptionTextStyle,
          wordWrap: true,
          wordWrapWidth: this._Text.w
        }
      }
    });
  }

  _updateDetails() {
    const maxWidth = this._detailsMaxW;
    this._Details.patch({
      content: this.details,
      style: {
        textStyle: {
          ...this.style.detailsTextStyle,
          wordWrap: true,
          maxLines: 1, // sets default for details
          wordWrapWidth: maxWidth + this.style.fadeWidth / 2
        }
      }
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

  _resolveDetails() {
    this._detailsPromiseResolver && this._detailsPromiseResolver();
    this._updatePositions();
  }

  _updateProvider() {
    if (this.provider) {
      this._Provider.patch({
        mode: this.mode,
        ...this.provider,
        style: this.style.providerStyle
      });
    }
  }

  _resolveProvider() {
    this._providerPromiseResolver && this._providerPromiseResolver();
    this._updatePositions();
  }

  _updatePositions() {
    this._Text.h = this._textH;
    this._Text.w = this._textW;

    this._DetailsWrapper.w = this._textW;
    this._DetailsWrapper.h = Math.max(this._providerH, this._Details.h);
    this._DetailsWrapper.y = this.h - this._DetailsWrapper.h;

    this._Details.y = this._DetailsWrapper.h / 2;

    this._Provider.x = this._DetailsWrapper.w - this._providerW;
    this._Provider.y = this._DetailsWrapper.h - this._providerH;
  }

  get _textW() {
    return this.w;
  }

  get _textH() {
    return this.h - this._providerH;
  }

  get _providerW() {
    return this._Provider.w;
  }

  get _providerH() {
    return this._Provider._Row._Items.h;
  }

  get _detailsMaxW() {
    return this.w - this._providerW - this.style.fadeWidth / 2;
  }

  set announce(announce) {
    super.announce = announce;
  }

  get announce() {
    return (
      this._announce || [
        this._Title && this._Title.announce,
        this._Description && this._Description.announce,
        this._Details && this._Details.announce,
        this._Provider && this._Provider.announce
      ]
    );
  }
}

export default withExtensions(MetadataCardContent);
