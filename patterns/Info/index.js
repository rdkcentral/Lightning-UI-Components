import { Base } from '../../elements';
import styles from './Info.styles';
import DataItem from '../DataItem';
import withStyles from '../../mixins/withStyles';

export default class Info extends withStyles(Base, styles) {
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

  static get properties() {
    return ['title', 'subtitle', 'description', 'announce'];
  }

  static get tags() {
    return [
      'DataItem',
      { name: 'Content', path: 'DataItem.Content' },
      { name: 'Title', path: 'DataItem.Content.Title' },
      { name: 'Subtitle', path: 'DataItem.Content.Subtitle' },
      { name: 'Description', path: 'DataItem.Content.Description' }
    ];
  }

  _construct() {
    super._construct();
    this._paddingY = this.styles.padding.y;
  }

  _init() {
    this._Title.on('txLoaded', () => this._onTextLoaded());
    this._Subtitle.on('txLoaded', () => this._onTextLoaded());
    this._Description.on('txLoaded', () => this._onTextLoaded());
    this._update();
  }

  _update() {
    this._updateText();
    this._updateFocusRing();
    this.fireAncestors('$itemChanged');
  }

  _updateText() {
    this._Title.text = this.title;
    this._Subtitle.text = this.subtitle;
    this._Description.text = this.description;
  }

  _onTextLoaded() {
    const contentHeight =
      this._Title.renderHeight +
      this._Subtitle.renderHeight +
      this._Description.renderHeight;

    const nextH = contentHeight + this._paddingY * 2;
    this._DataItem.h = nextH;
    this._DataItem._Background.h = nextH;
    this._update();
  }

  _updateFocusRing() {
    if (this._DataItem._FocusRing) {
      this._DataItem._FocusRing.h = this._DataItem.h;
      this._DataItem._FocusRing._update();
    }
  }

  _getFocused() {
    return this._DataItem;
  }

  _getAnnounce() {
    if (this._announce) {
      return this._announce;
    }

    const description = this._Description.text.text
      ? [this._Description.text.text]
      : [];
    const subtitle = this._Subtitle.text.text ? [this._Subtitle.text.text] : [];
    const title = this._Title.text.text ? [this._Title.text.text] : [];
    return [...title, ...subtitle, ...description].join(',');
  }
}
