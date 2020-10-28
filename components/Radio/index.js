import lng from 'wpe-lightning';
import withStyles from '../../mixins/withStyles';

export const styles = theme => ({
  w: 32,
  h: 32,
  radius: 16,
  background: { color: theme.palette.background.default },
  stroke: { color: theme.palette.grey[5], width: 4 },
  knob: { color: theme.palette.grey[5], h: 16, w: 16 }
});

class Radio extends lng.Component {
  static _template() {
    return {
      w: this.styles.w,
      h: this.styles.h,
      texture: lng.Tools.getRoundRect(
        this.styles.w,
        this.styles.h,
        this.styles.radius,
        this.styles.stroke.width,
        this.styles.stroke.color,
        true,
        this.styles.background.color
      ),
      Knob: {
        w: this.styles.knob.w,
        h: this.styles.knob.h,
        mount: 0.5,
        x: w => w / 2,
        y: h => h / 2,
        alpha: 0,
        texture: lng.Tools.getRoundRect(
          this.styles.knob.w,
          this.styles.knob.h,
          this.styles.knob.w / 2,
          false,
          false,
          true,
          this.styles.knob.color
        )
      }
    };
  }

  _init() {
    this._update();
  }

  toggle() {
    this.checked = !this.checked;
    this._update();
    return this;
  }

  _handleEnter() {
    this.toggle();
  }

  _update() {
    const { checked } = this;
    this._Knob.smooth = { alpha: checked ? 1 : 0 };
  }

  get _Knob() {
    return this.tag('Knob');
  }
}

export default withStyles(Radio, styles);
