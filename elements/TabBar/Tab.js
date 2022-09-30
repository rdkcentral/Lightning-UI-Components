import Surface from '../../elements/Surface';
import Icon from '../../elements/Icon';
import TextBox from '../../elements/TextBox';
import { withExtensions } from '../../mixins';

import * as styles from './Tab.styles';

class Tab extends Surface {
  static _template() {
    return {
      ...super._template(),
      Content: {
        mount: 0.5,
        x: w => w / 2,
        y: h => h / 2,
        Text: {
          type: TextBox,
          mountY: 0.5,
          signals: {
            textBoxChanged: '_onTextBoxChanged'
          }
        }
      }
    };
  }

  static get __themeStyle() {
    return styles;
  }

  static get __componentName() {
    return 'Tab';
  }

  static get properties() {
    return ['icon', 'title'];
  }

  static get tags() {
    return [
      ...super.tags,
      'Content',
      {
        name: 'Icon',
        path: 'Content.Icon'
      },
      {
        name: 'Text',
        path: 'Content.Text'
      }
    ];
  }

  _onTextBoxChanged() {
    this._updateContent();
    this._updateTabSize();
  }

  _update() {
    super._update();
    this._updateIcon();
    this._updateText();
    this._updateContent();
    this._updateTabSize();
  }

  _updateIcon() {
    if (this.icon) {
      const iconPatch = {
        src: this.icon,
        w: this.style.iconSize,
        h: this.style.iconSize,
        y: this._Content.h / 2,
        color: this.style.contentColor
      };
      if (!this.title) {
        iconPatch.mountX = 0.5;
        iconPatch.x = this._Content.w / 2;
      }
      if (this._Icon) {
        this._Icon.patch(iconPatch);
      } else {
        this._Content.patch({
          Icon: {
            type: Icon,
            mountY: 0.5,
            ...iconPatch
          }
        });
      }
    } else {
      this._Content.patch({ Icon: undefined });
    }
  }

  _updateText() {
    const textPatch = {
      content: this.title,
      textStyle: this.style.textStyle,
      y: this._Content.h / 2
    };
    if (this.icon) {
      textPatch.mountX = 0;
      textPatch.x = this._iconW + this.style.iconMarginRight;
    } else {
      textPatch.mountX = 0.5;
      textPatch.x = this._Content.w / 2;
    }
    this._Text.patch(textPatch);
  }

  _updateContent() {
    this._Content.patch({
      w:
        this._iconW +
        (this.title ? this.style.iconMarginRight : 0) +
        this._textW,
      h: Math.max(this._iconH, this._Text.h)
    });
  }

  _updateTabSize() {
    if (this.title || this.icon) {
      this.patch({
        w: this._paddingX * 2 + this._Content.w,
        h: this.style.paddingY * 2 + this._Content.h
      });
    } else {
      this.patch({ w: 0, h: 0 });
    }
  }

  get _textW() {
    return this.title ? this._Text.w : 0;
  }

  get _iconW() {
    return this.icon ? this._Icon.w : 0;
  }

  get _iconH() {
    return this.icon ? this._Icon.h : 0;
  }

  get _paddingX() {
    return this.title ? this.style.paddingX : this.style.noTitlePaddingX;
  }
}

export default withExtensions(Tab);
