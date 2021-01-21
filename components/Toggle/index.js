import lng from 'wpe-lightning';
import withStyles from '../../mixins/withStyles';

export const styles = theme => ({
  w: 64,
  h: 32,
  radius: 16,
  stroke: {
    weight: 4,
    color: theme.palette.grey[5]
  },
  knob: {
    size: 16
  },
  checked: {
    background: {
      color: theme.palette.green.default
    },
    knob: {
      color: theme.palette.grey[5],
      x: 38
    }
  },
  unchecked: {
    background: {
      color: theme.palette.grey[80]
    },
    knob: {
      color: theme.palette.grey[20],
      x: 8
    }
  }
});
class Toggle extends lng.Component {
  static _template() {
    return {
      checked: false,
      Container: {
        w: this.styles.w,
        h: this.styles.h,
        texture: lng.Tools.getRoundRect(
          this.styles.w - 8,
          this.styles.h - 4,
          this.styles.radius,
          this.styles.stroke.weight,
          0,
          true,
          0xffffffff
        ),
        Stroke: {
          w: this.styles.w,
          h: this.styles.h,
          texture: lng.Tools.getRoundRect(
            this.styles.w,
            this.styles.h,
            this.styles.radius,
            this.styles.stroke.weight,
            this.styles.stroke.color,
            false,
            false
          )
        },
        Knob: {
          zIndex: 2,
          x: 12,
          y: 7,
          texture: lng.Tools.getRoundRect(
            this.styles.knob.size,
            this.styles.knob.size,
            this.styles.knob.size / 2,
            0,
            0,
            true,
            0xffffffff
          )
        }
      }
    };
  }

  toggle() {
    this.checked = !this.checked;
    this._update();
    return this;
  }

  _init() {
    this._update();
  }

  get onEnter() {
    return this._onEnter || this.toggle;
  }

  set onEnter(onEnter) {
    this._onEnter = onEnter;
  }

  _handleEnter() {
    if (typeof this.onEnter === 'function') {
      this.onEnter(this);
    }
  }

  _update() {
    const { checked } = this;
    const state = checked ? 'checked' : 'unchecked';
    this._Knob.smooth = {
      x: this.styles[state].knob.x,
      color: this.styles[state].knob.color
    };
    this._Container.smooth = {
      color: this.styles[state].background.color
    };
  }

  get _Container() {
    return this.tag('Container');
  }
  get _Knob() {
    return this._Container.tag('Knob');
  }
}

export default withStyles(Toggle, styles);
