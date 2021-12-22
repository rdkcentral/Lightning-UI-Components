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
