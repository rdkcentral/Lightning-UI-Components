import { Button } from '../../elements';
import { Surface, TextBox } from '../../elements';
import * as styles from './ListItemBase.styles.js';
import { withExtensions } from '../../mixins';
import { measureTextWidth } from '../../utils';

class ListItemBase extends Button {
  static get __componentName() {
    return 'ListItemBase';
  }

  static get __themeStyles() {
    return styles;
  }

  static _template() {
    const template = super._template();
    return {
      ...template,
      Content: {
        ...template.Content,
        Title: undefined,
        Text: {
          flex: { direction: 'column' },
          Title: {
            type: TextBox,
            signals: {
              textBoxChanged: '_onTitleChanged'
            }
          },
          Description: {
            type: TextBox,
            signals: {
              textBoxChanged: '_onDescriptionChanged'
            }
          }
        }
      }
    };
  }

  static get properties() {
    return [...super.properties, 'description'];
  }

  static get tags() {
    return [
      ...Surface.tags,
      'Content',
      { name: 'Prefix', path: 'Content.Prefix' },
      { name: 'Checkbox', path: 'Prefix.Checkbox' },
      { name: 'Icon', path: 'Prefix.Icon' },
      { name: 'Text', path: 'Content.Text' },
      { name: 'Title', path: 'Text.Title' },
      { name: 'Description', path: 'Text.Description' }
    ];
  }

  _init() {
    this.fixed = true;
    super._init();
  }

  _update() {
    this._updateTruncation();
    this._updatePrefix();
    this._updateTitle();
    this._updateDescription();
    this._updateTextDimensions();
    this._updateContentDimensions();
    this._updateSurface();
    this._updateLayout();
    this._updateContentPosition();
    this._updateTextPosition();
    // delaying the super._update call so we update the surface sizing after the button has finished updating
    Surface.prototype._update.call(this);
  }

  _onTitleChanged() {
    this._textBoxChanged();
  }

  _onDescriptionChanged() {
    this._textBoxChanged();
  }

  _textBoxChanged() {
    this._updateTextDimensions();
    this._updateContentDimensions();
    this._updateSurface();
    this._updateLayout();
    this._updateContentPosition();
    this._updateTextPosition();
    Surface.prototype._update.call(this);
  }

  _updateTruncation() {
    super._updateTruncation();
    this._Description.patch({
      wordWrap: this.fixed,
      wordWrapWidth: this.fixed ? this.w - this.style.paddingX * 2 : 0
    });
  }

  _updatePrefix() {
    super._updatePrefix();

    if (this._Prefix) {
      this._Prefix.patch({ mountY: 0.5 });
    }
  }

  _updateTitle() {
    const titlePatch = {
      content: this.title,
      textStyle: this.style.titleStyle,
      textColor: this._titleColor,
      maxLines: 1
    };
    this._Title.patch(titlePatch);
  }

  _updateDescription() {
    if (this._hasDescription) {
      this._Description.visible = true;
      const descriptionPatch = {
        content: this.description,
        textStyle: this.style.descriptionStyle,
        textColor: this._descriptionColor,
        maxLines: 1
      };
      this._Description.patch(descriptionPatch);
    } else {
      this._Description.visible = false;
    }
  }

  _updateTextDimensions() {
    if (this._Text) {
      const textDimensionsPatch = {};
      const h = this._textH;
      const w = Math.max(
        this._hasTitle ? this._measuredTitleW : 0,
        this._hasDescription ? this._measuredDescriptionW : 0
      );

      if (this._Text.transition('w').targetValue !== w) {
        textDimensionsPatch.w = w;
      }
      if (this._Text.transition('h').targetValue !== h) {
        textDimensionsPatch.h = h;
      }

      if (Object.keys(textDimensionsPatch).length > 0) {
        this.applySmooth(this._Text, textDimensionsPatch);
      }
    }
  }

  _updateSurface() {
    if (this.fixed) {
      this.w = this._w;
    } else {
      const contentWidth =
        Math.max(this._measuredTitleW, this._measuredDescriptionW) +
        this._prefixW;
      const w =
        this._hasPrefix && !(this._hasTitle || this._hasDescription)
          ? contentWidth + this._paddingX
          : Math.max(contentWidth + this._paddingX, this.style.minWidth);
      this.w = w;
    }
  }

  _updateContentDimensions() {
    const contentDimensionsPatch = {};
    const h = Math.max(this._hasPrefix ? this._Prefix.h : 0, this._textH);

    const w = this._measuredTextW + (this._hasPrefix ? this._prefixW : 0);

    const y = this.h / 2;

    // reference transition targets to ensure we aren't checking against intermittent values
    if (this._Content.transition('w').targetValue !== w) {
      contentDimensionsPatch.w = w;
    }

    if (this._Content.transition('h').targetValue !== h) {
      contentDimensionsPatch.h = h;
    }

    if (this._Content.y !== y) {
      contentDimensionsPatch.y = y;
    }

    if (Object.keys(contentDimensionsPatch).length > 0) {
      this.applySmooth(this._Content, { contentDimensionsPatch });
    }

    if (this._Prefix) {
      this.applySmooth(this._Prefix, { y: h / 2 });
    }
  }

  _updateTextPosition() {
    if (this._Text) {
      this._Text.patch({ x: this._prefixW });
    }
  }

  get _titleColor() {
    return this.style.titleColor;
  }

  get _descriptionColor() {
    return this.style.descriptionColor;
  }

  get _hasDescription() {
    return !!this.description;
  }

  get _measuredDescriptionW() {
    // get the pre-calculated text width of the description to solve some race condition bugs
    if (this.fixed) {
      return this._Description.w;
    } else {
      return measureTextWidth(this._Description._Text.text);
    }
  }

  get _measuredTextW() {
    if (this._Title._Text) {
      return Math.min(
        Math.max(
          measureTextWidth(this._Title._Text.text),
          measureTextWidth(this._Description._Text.text)
        ),
        this._Title.wordWrapWidth
      );
    } else if (this._Description._Text) {
      return Math.min(
        measureTextWidth(this._Description._Text.text),
        this._Title.wordWrapWidth
      );
    } else {
      return this._Title.wordWrapWidth;
    }
  }

  get _textH() {
    return (
      (this._hasTitle && this._Title.h) +
      (this._hasDescription && this._Description.h)
    );
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
