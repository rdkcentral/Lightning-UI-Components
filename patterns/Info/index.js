import lng from '@lightningjs/core';
import DataItem from '../DataItem';
import withStyles from '../../mixins/withStyles';
import { getFocusScale } from '../../Styles';

export const styles = theme => ({
  title: theme.typography.headline1,
  subtitle: {
    ...theme.typography.button1,
    textColor: theme.palette.text.light.primary
  },
  description: {
    ...theme.typography.body3,
    textColor: theme.palette.text.light.secondary
  },
  margin: {
    x: theme.spacing(2)
  },
  padding: {
    y: theme.spacing(2)
  },
  wordWrapWidth: 410 - theme.spacing(4)
});

export default class Info extends withStyles(lng.Component, styles) {
  static _template() {
    return {
      DataItem: {
        type: DataItem,
        h: 200,
        w: 410,
        margin: this.styles.margin.x,
        content: {
          flex: { direction: 'column' },
          w: w => w,
          Title: {
            text: {
              ...this.styles.title,
              wordWrapWidth: this.styles.wordWrapWidth
            }
          },
          Subtitle: {
            text: {
              ...this.styles.subtitle,
              wordWrapWidth: this.styles.wordWrapWidth
            }
          },
          Description: {
            text: {
              ...this.styles.description,
              wordWrapWidth: this.styles.wordWrapWidth
            }
          }
        }
      }
    };
  }

  _construct() {
    super._construct();
    this.paddingY = this.styles.padding.y;
  }

  _update() {
    const contentHeight =
      this._Title.renderHeight +
      this._Subtitle.renderHeight +
      this._Description.renderHeight;
    const h = this.hasFocus()
      ? contentHeight * getFocusScale(this._DataItem.w)
      : contentHeight + this.paddingY * 2;
    this.h = h;
    this._DataItem.h = h;
    this._DataItem._Background.h = h;
    this._updateFocusRing();
    this.fireAncestors('$itemChanged');
  }

  _focus() {
    this.h =
      this._DataItem.h * getFocusScale(this._DataItem.w) + this._DataItem.y;
    this.fireAncestors('$itemChanged');
  }

  _unfocus() {
    this.h = this._DataItem.h + this._DataItem.y;
    this.fireAncestors('$itemChanged');
  }

  _getFocused() {
    return this._DataItem;
  }

  _loadText(comp, text) {
    if (!comp._hasTxLoader) {
      comp._hasTxLoader = true;
      comp.on('txLoaded', () => this._update());
    }
    comp.text = text;
  }

  _updateFocusRing() {
    if (this._DataItem._FocusRing) {
      this._DataItem._FocusRing.h = this.h;
      this._DataItem._FocusRing._update();
    }
  }

  set title(title) {
    if (this._Title.text.text !== title) {
      this._loadText(this._Title, title);
    }
  }

  set subtitle(subtitle) {
    if (this._Subtitle.text.text !== subtitle) {
      this._loadText(this._Subtitle, subtitle);
    }
  }

  set description(description) {
    if (this._Description.text.text !== description) {
      this._loadText(this._Description, description);
    }
  }

  get announce() {
    const description = this._Description.text.text
      ? [this._Description.text.text]
      : [];
    const subtitle = this._Subtitle.text.text ? [this._Subtitle.text.text] : [];
    const title = this._Title.text.text ? [this._Title.text.text] : [];
    return [...title, ...subtitle, ...description].join(',');
  }

  get _DataItem() {
    return this.tag('DataItem');
  }
  get _Content() {
    return this.tag('DataItem')._Content;
  }
  get _Title() {
    return this._Content.tag('Title');
  }
  get _Subtitle() {
    return this._Content.tag('Subtitle');
  }
  get _Description() {
    return this._Content.tag('Description');
  }
}
