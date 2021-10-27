import ListItem from '.';
import Radio from '../../elements/Radio';

export default class ListItemRadio extends ListItem {
  static get tags() {
    return [...super.tags, { name: 'Radio', path: 'Right.Radio' }];
  }

  _init() {
    super._init();
    this.icon = undefined;
    this._Right.patch({
      w: 32,
      h: 32,
      Radio: {
        type: Radio,
        checked: this.checked
      }
    });
  }
  get _textWidth() {
    return (
      this.w -
      2 * this.styles.paddingRight -
      this.styles.paddingLeft -
      this._Right.w
    );
  }
  isChecked() {
    return Boolean(this._Radio.checked);
  }

  toggle() {
    return this._Radio.toggle();
  }

  _getFocused() {
    return this._Radio;
  }

  _handleEnter() {
    this._Radio._handleEnter();
  }
}
