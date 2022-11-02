import { withExtensions } from '../../mixins';
import TextBox from '..//TextBox';
import Row from '../Row';

import * as styles from './TitleRow.styles.js';

class TitleRow extends Row {
  static get __componentName() {
    return 'TitleRow';
  }

  static get __themeStyle() {
    return styles;
  }

  static _template() {
    return {
      Title: {
        type: TextBox,
        signals: {
          textBoxChanged: '_titleLoaded'
        }
      },
      ...super._template(),
      autoResizeHeight: false
    };
  }

  static get properties() {
    return [...super.properties, 'title'];
  }

  static get tags() {
    return [...super.tags, 'Title'];
  }

  _titleLoaded() {
    this._updateRow();
  }

  _update() {
    super._update();
    this._updateTitle();
    this._updateRow();
  }

  _updateTitle() {
    if (this.title) {
      this._Title.patch({
        x: this.style.titleMarginLeft,
        content: this.title,
        textStyle: this.style.titleTextStyle
      });
    } else if (this._Title) {
      this._Title.patch({
        h: 0,
        content: ''
      });
    }
  }

  _updateRow() {
    this.Items.patch({
      y: this._Title.finalH + this.style.rowMarginTop
    });
    this.patch({
      w: this.w || this.style.w,
      h: this.Items.y + this.Items.h
    });
  }

  set announce(announce) {
    super.announce = announce;
  }

  get announce() {
    return this._announce || (this._Title && this._Title.announce);
  }
}

export default withExtensions(TitleRow);
