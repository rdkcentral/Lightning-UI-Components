import FocusRing from '../elements/FocusRing';

export default {
  methods: {
    before__update() {
      this.focusStyle = { alpha: 1 };
      this.unfocusStyle = { alpha: 0 };
      if (!this._componentStyles || !this._componentStyles.focusRing) {
        if (this.tag('FocusRing')) {
          this.patch({
            FocusRing: undefined
          });
        }
        return;
      }

      if (this.hasFocus() || this.tag('FocusRing')) {
        if (!this.tag('FocusRing')) {
          this.patch({
            FocusRing: { type: FocusRing, w: this._w, h: this._h }
          });
        }

        this.tag('FocusRing').patch({
          w: this._w,
          h: this._h,
          variant: this.variant,
          zIndex: this.zIndex + 10,
          style: {
            color: this._componentStyles.focusRingColor,
            radius: this._componentStyles.radius || 0 + 2
          }
        });

        const style = this.hasFocus() ? this.focusStyle : this.unfocusStyle;

        if (this._smooth) {
          this.tag('FocusRing').smooth = style;
        } else {
          this.tag('FocusRing').patch(style);
        }

        if (this.hasFocus()) {
          this.tag('FocusRing').startAnimation();
        } else {
          this.tag('FocusRing').stopAnimation();
        }
      }
    }
  },
  destroy() {
    this.patch({ FocusRing: undefined });
    // TODO: Remove all animations
  }
};
