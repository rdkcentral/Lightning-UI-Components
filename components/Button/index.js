/**
 * Button Component
 *
 * Generic Button Component that handles setting text
 * and focus and unfocus states for the button background.
 */
import lng from 'wpe-lightning';
import { RoundRect } from '../../utils';
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
    this.patch({
      color: [this.background, this.styles.background.color].find(
        Number.isFinite
      )
    });

    if (this.title) {
      const Title = {};
      Title.text = {
        ...this.styles.text,
        fontColor: this.styles.text.color,
        fontSize: this.fontSize || this.styles.text.fontSize,
        text: this.title
      };
      Title.color = this.styles.text.color;
      this._Title.patch(Title);

      this._Title.loadTexture();

      if (!this.fixed) {
        const iconSize = this._icon ? this._icon.size + this._icon.spacing : 0;
        const padding = [this.padding, this.styles.padding, 10].find(
          Number.isFinite
        );
        const w = this._Title.renderWidth + padding * 2 + iconSize;
        if (w !== this.w) {
          this.w = w > this.w ? w : this.w;
          this.fireAncestors('$itemChanged');
          this.signal('buttonWidthChanged', { w: this.w });
        }
      }
    }

    if (this.icon) {
      const Icon = {};
      const { color, size, spacing, src } = this.icon;
      Icon.color = color || this.styles.icon.color;
      Icon.w = size;
      Icon.h = size;
      Icon.flexItem = { marginRight: spacing };
      Icon.icon = src;
      this._Icon.patch(Icon);
    }

    if (this.stroke) {
      const Stroke = {};
      const { color, weight } = this.stroke;
      const radius = this.radius || this.styles.radius;

      this.patch({
        texture: lng.Tools.getRoundRect(
          RoundRect.getWidth(this.w),
          RoundRect.getHeight(this.h),
          radius,
          0x00,
          true,
          0xffffffff
        )
      });

      Stroke.color = color;
      Stroke.texture = lng.Tools.getRoundRect(
        RoundRect.getWidth(this.w),
        RoundRect.getHeight(this.h),
        radius,
        weight,
        0xffffffff,
        true,
        this.background
      );

      this._Stroke.patch(Stroke);
    } else {
      const radius = this.radius || this.styles.radius;
      this.patch({
        texture: lng.Tools.getRoundRect(
          RoundRect.getWidth(this.w),
          RoundRect.getHeight(this.h),
          radius
        )
      });
    }
  }

  _handleEnter() {
    if (typeof this.onEnter === 'function') {
      this.onEnter(this);
    }
  }

  get title() {
    return this._title;
  }

  set title(title) {
    this._title = title;
    this._update();
  }

  get icon() {
    return this._icon;
  }

  set icon({ src, size = 20, spacing = 5, color = 0xffffffff }) {
    if (src) {
      this._icon = { src, size, spacing, color };
      this._update();
    }
  }

  get stroke() {
    return this._stroke || this.styles.stroke;
  }

  set stroke({ weight = 2, color = 0x00 }) {
    this._stroke = { weight, color };
    this._update();
  }

  get announce() {
    // TODO - Localization?
    // Do we need a locale file with
    // component translations?
    return this._title + ', Button';
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
