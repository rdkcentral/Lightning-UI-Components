import * as styles from './ListItemBase.styles.js';
import { Button, TextBox, Icon, withExtensions } from '@lightning/ui-core';

class ListItemBase extends Button {
  static get __componentName() {
    return 'ListItemBase';
  }

  static get __themeStyle() {
    return styles;
  }

  static _template() {
    return {
      ...super._template(),
      justify: 'left',
      fixed: true,
      Content: {
        TextWrapper: {
          Title: {
            type: TextBox,
            signals: {
              textBoxChanged: '_onTextBoxChanged'
            }
          }
        }
      }
    };
  }
  static get properties() {
    return [
      ...super.properties,
      'description',
      'prefixLogo',
      'suffixLogo',
      'shouldCollapse'
    ];
  }

  static get tags() {
    return [
      ...super.tags,
      { name: 'Description', path: 'Content.TextWrapper.Description' }
    ];
  }

  _onTextBoxChanged() {
    this._updateTitle();
  }

  _update() {
    this._updatePrefixLogo();
    this._updateSuffixLogo();
    super._update();
    this._updateTextWrapper();
    this._updateDescription();
  }

  _updateTextWrapper() {
    if (this._hasTitle || this._hasDescription) {
      this._TextWrapper.patch({
        mountY: 0.5,
        flex: { direction: 'column' }
      });
    }
  }

  _updateTitle() {
    this._Content.patch({
      TextWrapper: {
        Title: {
          content: this.title,
          textStyle: this.style.titleTextStyle
        }
      }
    });
  }

  _updateDescription() {
    if (this._hasDescription) {
      let descriptionPatch = {
        content: this.description,
        textStyle: this.style.descriptionTextStyle,
        visible: !this._collapse
      };
      if (!this._Description) {
        descriptionPatch = {
          type: TextBox,
          signals: {
            textBoxChanged: '_onTextBoxChanged'
          },
          ...descriptionPatch
        };
      }
      this._Content.patch({
        TextWrapper: {
          Description: descriptionPatch
        }
      });
    } else {
      this.patch({
        Content: {
          TextWrapper: {
            Description: undefined
          }
        }
      });
    }
  }

  _updateTruncation() {
    super._updateTruncation();
    if (this._Description) {
      this._Description.patch({
        wordWrap: true,
        wordWrapWidth: this._fixedWordWrapWidth
      });
    }
  }

  _updatePrefixLogo() {
    if (this._hasPrefixLogo) {
      this._prefix = this._addLogoProps(this._prefixLogo);
    }
  }

  _updateSuffixLogo() {
    if (this._hasSuffixLogo) {
      this._suffix = this._addLogoProps(this._suffixLogo);
    }
  }

  _addLogoProps(icon) {
    return {
      type: Icon,
      icon,
      style: { color: undefined, ...this.style.logoStyles }
    };
  }

  get _hasPrefixLogo() {
    return this.prefixLogo;
  }

  get _hasSuffixLogo() {
    return this.suffixLogo;
  }

  get _rowProps() {
    return {
      ...super._rowProps,
      autoResizeHeight: true
    };
  }

  get _buttonProps() {
    return {
      ...super._buttonProps,
      alpha: this.style.alpha
    };
  }

  get _hasDescription() {
    return !!this.description;
  }

  get _suffixX() {
    return this.w - this._paddingRight - this._suffixW - this.style.paddingX;
  }

  get _collapse() {
    return this.shouldCollapse && !this._isFocusedMode;
  }

  set announce(announce) {
    super.announce = announce;
  }

  get announce() {
    if (this._announce) {
      return this._announce;
    }

    return this.title + this.description + ', List Item';
  }
}

export default withExtensions(ListItemBase);
