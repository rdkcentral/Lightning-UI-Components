import ListItem from '.';
import Toggle from '../../elements/Toggle';

export default class ListItemToggle extends ListItem {
  static _template() {
    const ListItem = super._template();
    return {
      Container: {
        ...ListItem.Container,
        Left: ListItem.Container.Left,
        Right: {
          ...ListItem.Container.Right,
          Toggle: {
            w: 64,
            h: 32,
            type: Toggle,
            checked: this.checked
          }
        }
      }
    };
  }

  static get properties() {
    return [...super.properties, 'onEnter', 'checked'];
  }

  static get tags() {
    return [...super.tags, { name: 'Toggle', path: 'Right.Toggle' }];
  }
  _setChecked(value) {
    if (this.isChecked() !== value) {
      this._Toggle.toggle();
    }
    return value;
  }

  _update() {
    super._update();
    this.icon = undefined;
    this._Left.patch({
      Title: {
        y: 2,
        h: this.styles.title.text.lineHeight + 4,
        color: this.styles.title.color,
        text: {
          ...this.styles.title.text,
          text: this._title,
          wordWrapWidth: this._textWidth
        }
      }
    });
    this._Left.patch({
      Subtitle: {
        h: this.styles.subtitle.text.lineHeight,
        text: {
          ...this.styles.subtitle.text,
          text: this._subtitle,
          wordWrapWidth: this._textWidth
        }
      }
    });
  }
  get _textWidth() {
    return (
      this.w -
      2 * this.styles.paddingRight -
      this.styles.paddingLeft -
      this._Toggle.w
    );
  }
  _getTitleW() {
    const w =
      this.w ||
      this.styles.dimensions[this.size] ||
      this.styles.dimensions.large;
    return w - this.styles.paddingLeft - this.styles.paddingRight - 72;
  }

  isChecked() {
    return Boolean(this._Toggle.checked);
  }

  toggle() {
    return this._Toggle.toggle();
  }

  _getFocused() {
    return this._Toggle;
  }

  _setOnEnter(onEnter) {
    this._Toggle.onEnter = onEnter;
    this._update();
    this.isChecked();
    return this._Toggle.onEnter;
  }
}
