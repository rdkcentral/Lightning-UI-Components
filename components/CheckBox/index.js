import lng from '@lightningjs/core';
import withStyles from '../../mixins/withStyles';

const Check =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFKADAAQAAAABAAAADgAAAACYjX/eAAABKElEQVQ4EbXSO04DMRAGYHtlWaJYpYMcgSBxAUhFi1KkoUrBJVLmENR0XIDUFOQSCTT0SJEziLXzFOzwD3lIWbLahIAby/b42xnPavUHw3t/OJvxPaj3aF9vjqkOszqDVdL7gCGEo+mUH5n5RGvds1Zd/NoTbDDwPecSxtyVTP8Hg36Fr9S31ReZPeVmhoMANHUuXBehhRiAKIp0E4+KN+VbomEtDwVWRgPQTa4sGxDHcX9jPDJsSQnO+RFRUs0GCYaz59wysxdkDfRmfiF5Iwqny5hdsdV/KGUDvQPUUEq/GmPOjfkcTybcUYqPC8tcZLACZQ3UEPk2/vpLLF8Af+yCibEGygbQA5T8gPn7LbfNTO7K+AHKJhGX0jS00Xlrra7ndlOCM+MLVJf04NpHPKcAAAAASUVORK5CYII=';

export const styles = theme => ({
  w: 32,
  h: 32,
  radius: 4,
  background: { color: theme.palette.background.default },
  stroke: { color: theme.palette.grey[5], width: 4 },
  check: { w: 20, h: 14, src: Check }
});

class Checkbox extends lng.Component {
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
      Check: {
        w: this.styles.check.w,
        h: this.styles.check.h,
        mount: 0.5,
        x: w => w / 2,
        y: h => h / 2,
        alpha: 0,
        src: this.styles.check.src
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
    this._Check.smooth = { alpha: checked ? 1 : 0 };
  }

  get _Check() {
    return this.tag('Check');
  }
}

export default withStyles(Checkbox, styles);
