import lng from 'wpe-lightning';
import withStyles from '../../mixins/withStyles';

const styles = theme => ({
  text: {
    ...theme.typography.body1,
    color: theme.palette.text.light.primary
  },
  scrollBar: {
    color: 0xffffffff,
    w: 16,
    h: 16
  },
  scrollBarContainer: {
    color: 0xaaffffff,
    w: 8
  }
});

export default class ScrollWrapper extends withStyles(lng.Component, styles) {
  static _template() {
    return {
      clipping: true,
      ScrollContainer: {
        w: w => w,
        wordWrap: true
      },
      ScrollBarContainer: {
        alpha: 0,
        rect: true,
        w: this.styles.scrollBarContainer.w,
        x: w => w,
        color: this.styles.scrollBarContainer.color,
        ScrollBar: {
          rect: true,
          w: this.styles.scrollBar.w,
          h: this.styles.scrollBar.h,
          y: 0,
          color: this.styles.scrollBar.color
        }
      }
    };
  }

  _focus() {
    this._ScrollBarContainer.smooth = { alpha: 1 };
  }

  _unfocus() {
    this._ScrollBarContainer.smooth = { alpha: 0 };
  }

  _construct() {
    this._scrollStep = 10;
  }

  _firstEnable() {
    this._update();
  }

  _handleDown() {
    if (this._scrollContainerY + this._ScrollContainer.h > this.renderHeight) {
      const containerY = this._scrollContainerY - this._scrollStep;
      this._ScrollContainer.patch({
        smooth: {
          y: [
            containerY + this._ScrollContainer.h <= this.renderHeight
              ? this.renderHeight - this._ScrollContainer.h
              : containerY,
            {
              timingFunction: 'linear',
              duration: isNaN(this.scrollDuration) ? 0.2 : this.scrollDuration
            }
          ]
        }
      });
      const scrollBarY =
        this._scrollBarY + this._getScrollStep(this.renderHeight);
      this._ScrollBar.patch({
        smooth: {
          y: [
            scrollBarY < this.renderHeight - this.styles.scrollBar.h
              ? scrollBarY
              : this.renderHeight - this.styles.scrollBar.h,
            {
              timingFunction: 'linear',
              duration: isNaN(this.scrollDuration) ? 0.2 : this.scrollDuration
            }
          ]
        }
      });
      if (
        this._scrollContainerY + this._ScrollContainer.h <=
        this.renderHeight
      ) {
        this.fireAncestors('$scrollChanged', 'endDown', this);
        this.autoScroll = false;
      }
    }
  }

  _handleUp() {
    if (this._scrollContainerY < 0) {
      const containerY = this._scrollContainerY + this._scrollStep;
      this._ScrollContainer.patch({
        smooth: {
          y: [
            containerY >= 0 ? 0 : this._scrollContainerY + this._scrollStep,
            {
              timingFunction: 'linear',
              duration: isNaN(this.scrollDuration) ? 0.2 : this.scrollDuration
            }
          ]
        }
      });
      const scrollBarY =
        this._scrollBarY - this._getScrollStep(this.renderHeight);
      this._ScrollBar.patch({
        smooth: {
          y: [
            scrollBarY > 0 ? scrollBarY : 0,
            {
              timingFunction: 'linear',
              duration: isNaN(this.scrollDuration) ? 0.2 : this.scrollDuration
            }
          ]
        }
      });

      if (this._scrollContainerY >= 0) {
        this.fireAncestors('$scrollChanged', 'endUp', this);
      }
    }
  }

  resetScroll() {
    this._ScrollContainer.patch({ y: 0 });
    this._ScrollBar.patch({ y: 0 });
  }

  _update() {
    this._ScrollContainer.on('txLoaded', () => {
      const adjustW = this.w - this._ScrollBar.w;
      this._ScrollContainer.patch({
        h: this._ScrollContainer.renderHeight,
        w: adjustW - 10
      });
      this._ScrollBarContainer.patch({
        h: this.renderHeight,
        x: adjustW,
        ScrollBar: {
          x: (this._ScrollBarContainer.w - this._ScrollBar.w) / 2
        }
      });
    });
    this._ScrollContainer.patch({
      text: {
        ...this.styles.text,
        text: this._content
      }
    });
  }

  _getScrollStep(height) {
    const numSteps = Math.ceil(
      (this._ScrollContainer.h - this.renderHeight) / this._scrollStep
    );
    return (height - this.styles.scrollBar.h) / numSteps;
  }

  get autoScroll() {
    return this._autoScroll;
  }

  set autoScroll(val) {
    if (this._autoScroll !== val) {
      this._autoScroll = val;
    }

    if (this._autoScroll) {
      this._startAutoScroll = setTimeout(
        () => this._performAutoScroll(),
        isNaN(this.autoScrollDelay) ? 2000 : this.autoScrollDelay
      );
    } else {
      clearTimeout(this._startAutoScroll);
    }
  }

  get showScrollBar() {
    return this._showScrollBar;
  }

  set showScrollBar(val) {
    this._showScrollBar = val;
    this._ScrollBarContainer.visible = val;
  }

  _performAutoScroll() {
    if (this.autoScroll) {
      this._handleDown();
      setTimeout(
        () => this._performAutoScroll(),
        isNaN(this.autoScrollSpeed) ? 200 : this.autoScrollSpeed
      );
    }
  }

  get content() {
    return this._content;
  }

  set content(content) {
    if (content !== this._content) {
      this._content = content;
    }
  }

  get scrollStep() {
    return this._scrollStep;
  }

  set scrollStep(scrollStep) {
    if (scrollStep !== this._scrollStep) {
      this._scrollStep = scrollStep;
    }
  }

  get _scrollContainerY() {
    return this._ScrollContainer.transition('y').targetValue;
  }

  get _scrollBarY() {
    return this._ScrollBar.transition('y').targetValue;
  }

  get _ScrollContainer() {
    return this.tag('ScrollContainer');
  }

  get _ScrollBar() {
    return this.tag('ScrollBar');
  }

  get _ScrollBarContainer() {
    return this.tag('ScrollBarContainer');
  }
}
