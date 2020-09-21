/**
 * Button Component
 *
 * Generic Button Component that handles setting text
 * and focus and unfocus states for the button background.
 */
import lng from 'wpe-lightning';
import { RoundRect, measureTextWidth } from '../../utils';
import withStyles from '../../mixins/withStyles';
import Icon from '../Icon';

export const styles = {
  w: 150,
  h: 40,
  radius: 0,
  background: { color: 0xff1f1f1f },
  icon: { color: 0xffffffff },
  text: {
    fontSize: 20,
    color: 0xffffffff
  },
  padding: 50,
  stroke: {
    color: 0x00,
    weight: 2
  },
  unfocus: {
    patch: function() {
      const { background, icon, text } = this.styles;
      this.patch({
        smooth: { color: background.color },
        Content: {
          Title: { smooth: { color: text.color } },
          Icon: { smooth: { color: icon.color } }
        }
      });
    }
  },
  focus: {
    background: 0xffffffff,
    text: 0xff1f1f1f,
    icon: 0xff1f1f1f,
    patch: function() {
      const { background, icon, text } = this.styles.focus;
      this.patch({
        smooth: { color: background },
        Content: {
          Title: { smooth: { color: text } },
          Icon: { smooth: { color: icon } }
        }
      });
    }
  }
};

class Button extends lng.Component {
  static _template() {
    return {
      w: this.styles.w,
      h: this.styles.h,
      radius: this.styles.radius,
      strokeColor: this.styles.stroke.color,
      strokeWeight: this.styles.stroke.weight,
      Content: {
        mount: 0.5,
        x: w => w / 2,
        y: h => h / 2,
        flex: {
          direction: 'row',
          alignContent: 'center',
          alignItems: 'center'
        },
        Icon: {
          type: Icon
        },
        // TODO: Wonky lineHeight / fontsize from Lightning
        // Move title down 2 pixels to _visually_ center it
        // inside the button
        Title: { y: 2 }
      },
      Stroke: {
        zIndex: -1,
        mount: 0.5,
        x: w => w / 2,
        y: h => h / 2
      }
    };
  }

  _construct() {
    this._whenEnabled = new Promise(resolve => (this._enable = resolve));
    this._strokeWeight = 2;
    this._strokeColor = 0x00;
  }

  _init() {
    this._update();
  }

  _focus() {
    this.styles.focus.patch.apply(this);
  }

  _unfocus() {
    this.styles.unfocus.patch.apply(this);
  }

  _update() {
    this._whenEnabled.then(() => {
      const template = {};
      let Icon = {};
      const Stroke = {};
      const Title = {};

      template.color = [this.background, this.styles.background.color].find(
        Number.isFinite
      );

      if (this.title) {
        Title.text = {
          ...this.styles.text,
          fontColor: this.styles.text.color,
          fontSize: this.fontSize || this.styles.text.fontSize,
          fontFamily:
            this.styles.text.fontFace ||
            this.styles.text.fontFamily ||
            this.stage._options.defaultFontFace,
          text: this.title
        };
        Title.color = this.styles.text.color;
      } else {
        Title.texture = false;
      }

      if (this.icon) {
        const { color, size, spacing, src } = this.icon;
        Icon.color = color || this.styles.icon.color;
        Icon.w = size;
        Icon.h = size;
        if (this.title) {
          Icon.flexItem = { marginRight: spacing };
        }
        Icon.icon = src;
      } else {
        Icon = {
          w: 0,
          h: 0,
          texture: false,
          flexItem: false
        };
      }

      if (this.stroke) {
        const radius = this.radius || this.styles.radius;

        template.texture = lng.Tools.getRoundRect(
          RoundRect.getWidth(this.w),
          RoundRect.getHeight(this.h),
          radius,
          0x00,
          true,
          0xffffffff
        );

        Stroke.color = this.strokeColor;
        Stroke.texture = lng.Tools.getRoundRect(
          RoundRect.getWidth(this.w),
          RoundRect.getHeight(this.h),
          radius,
          this.strokeWeight,
          0xffffffff,
          true,
          this.background
        );
      } else {
        const radius = this.radius || this.styles.radius;
        template.texture = lng.Tools.getRoundRect(
          RoundRect.getWidth(this.w),
          RoundRect.getHeight(this.h),
          radius
        );
        Stroke.texture = false;
      }

      if (!this.fixed) {
        const iconSize = this._icon ? this._icon.size + this._icon.spacing : 0;
        const padding = [this.padding, this.styles.padding, 10].find(
          Number.isFinite
        );
        const w = measureTextWidth(Title.text) + padding * 2 + iconSize;

        if (w && w !== this.w) {
          this.w = w > this.styles.w ? w : this.styles.w;
          this.fireAncestors('$itemChanged');
          this.signal('buttonWidthChanged', { w: this.w });
        }
      }

      this._Title.patch(Title);
      this._Icon.patch(Icon);
      this._Stroke.patch(Stroke);
      this.patch(template);
    });
  }

  _handleEnter() {
    if (typeof this.onEnter === 'function') {
      this.onEnter(this);
    }
  }

  get radius() {
    return this._radius;
  }

  set radius(radius) {
    if (this._radius !== radius) {
      this._radius = radius;
      this._update();
    }
  }

  get title() {
    return this._title;
  }

  set title(title) {
    if (this._title !== title) {
      this._title = title;
      this._update();
    }
  }

  get icon() {
    return this._icon;
  }

  set icon({ src, size = 20, spacing = 5, color = 0xffffffff }) {
    if (src) {
      this._icon = { src, size, spacing, color };
    } else {
      this._icon = null;
    }
    this._update();
  }

  get strokeWeight() {
    return this._strokeWeight;
  }

  set strokeWeight(strokeWeight) {
    if (this._strokeWeight !== strokeWeight) {
      this._strokeWeight = strokeWeight;
      this._update();
    }
  }

  get strokeColor() {
    return this._strokeColor;
  }

  set strokeColor(strokeColor) {
    if (this._strokeColor !== strokeColor) {
      this._strokeColor = strokeColor;
      this._update();
    }
  }

  get stroke() {
    return this._stroke;
  }

  set stroke(stroke) {
    if (this._stroke !== stroke) {
      this._stroke = stroke;
      this._update();
    }
  }

  get w() {
    return this._w;
  }

  set w(w) {
    if (this._w !== w) {
      this._w = w;
      this._update();
    }
  }

  set label(label) {
    this._label = label;
  }

  get label() {
    return this._label || this._title;
  }

  get announce() {
    // TODO - Localization?
    // Do we need a locale file with
    // component translations?
    return this.label + ', Button';
  }

  get _Content() {
    return this.tag('Content');
  }

  get _Title() {
    return this.tag('Content.Title');
  }
  get _Icon() {
    return this.tag('Content.Icon');
  }
  get _Stroke() {
    return this.tag('Stroke');
  }
}

export default withStyles(Button, styles);
