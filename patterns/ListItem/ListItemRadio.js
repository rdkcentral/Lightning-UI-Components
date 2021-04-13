import ListItem from '.';
import Radio from '../../elements/Radio';

export default class ListItemRadio extends ListItem {
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

  get _Radio() {
    return this.tag('Container').tag('Radio');
  }

  get _rightOffset() {
    return 40;
  }
}
