import lng from '@lightningjs/core';
import Base from '../../elements/Base';
import withStyles from '../../mixins/withStyles';
import styles from './ScrollWrapper.styles';

export default class ScrollWrapper extends withStyles(Base, styles) {
  static _template() {
    return {
      clipping: true,
      ScrollContainer: {
        w: w => w,
        wordWrap: true,
        flex: {
          direction: 'column'
        }
      },
      ScrollBarProgressOverlay: {
        w: this.styles.scrollBarContainer.w,
        x: w => w,
        zIndex: 2,
        alpha: 0
      },
      ScrollBarContainer: {
        // bar
        alpha: 0,
        w: this.styles.scrollBarContainer.w,
        x: w => w,
        zIndex: 1
      },
      ScrollBar: {
        // indicator
        texture: lng.Tools.getRoundRect(
          this.styles.scrollBar.w,
          this.styles.scrollBar.h,
          this.styles.scrollBar.radius,
          this.styles.scrollBar.stroke,
          this.styles.scrollBar.strokeColor,
          true,
          this.styles.scrollBar.fillColor
        ),
        w: this.styles.scrollBar.w,
        h: this.styles.scrollBar.h,
        x: w => w,
        zIndex: 3,
        alpha: 0
      }
    };
  }

  static get properties() {
    return [
      'autoScroll',
      'autoScrollDelay',
      'autoScrollSpeed',
      'content',
      'scrollBarY',
      'scrollContainerY',
      'scrollDuration',
      'scrollStep'
    ];
  }

  static get tags() {
    return [
      'ScrollBar',
      'ScrollBarContainer',
      'ScrollBarProgressOverlay',
      'ScrollContainer'
    ];
  }

  _focus() {
    this._ScrollBarContainer.smooth = { alpha: 1 };
    this._ScrollBarProgressOverlay.smooth = { alpha: 1 };
    this._ScrollBar.smooth = { alpha: 1 };
  }

  _unfocus() {
    this._ScrollBarContainer.smooth = { alpha: 0 };
    this._ScrollBarProgressOverlay.smooth = { alpha: 0 };
    this._ScrollBar.smooth = { alpha: 0 };
  }

  _construct() {
    super._construct();
    this._scrollStep = 10;
  }

  _init() {
    this._contentWidth = this.w - this._ScrollBar.w;
  }

  _firstEnable() {
    this._update();
  }

  _waitForComponentLoad() {
    if (this._ScrollContainer.children.length) {
      return Promise.all(
        this._ScrollContainer.children.map(
          child => new Promise(resolve => child.on('txLoaded', resolve))
        )
      );
    } else {
      this.h = 0;
      return Promise.resolve();
    }
  }

  _update() {
    this._initScrollableContent();

    this._waitForComponentLoad().then(() => {
      this._setScrollContainerSize();
      this._initScrollBar();
    });
  }

  _initScrollableContent() {
    if (!this._content) return;
    if (typeof this._content === 'string') {
      // if content is a string, create an element and patch it in
      this._ScrollContainer.patch({
        ScrollableText: {
          h: 0,
          wordWrap: true,
          w: this._contentWidth - this._ScrollBar.w,
          text: {
            text: this._content,
            ...this.styles.text
          }
        }
      });
    } else {
      // else, iterate through array items
      const childElements = this._content.map((item, index) => {
        const content = {};
        const id = `ScrollText${index}`;
        content[id] = {
          w: this._contentWidth - this._ScrollBar.w,
          text: {
            text: item.text,
            ...this.styles.text,
            ...item.style
          }
        };
        this._ScrollContainer.patch(content);
      });
    }
  }

  _setScrollContainerSize() {
    this._ScrollContainer.patch({
      y: 0,
      h: this._getScrollableContentHeight(),
      w: this._contentWidth
    });
    this._ScrollBarProgressOverlay.patch({
      texture: lng.Tools.getRoundRect(
        this._ScrollBarContainer.w,
        this.renderHeight,
        this.styles.scrollBarContainer.radius,
        0,
        0,
        true,
        this.styles.scrollBarContainer.progressColor
      ),
      h: 1,
      x: this._contentWidth,
      y: 4
    });
  }

  _initScrollBar() {
    this._ScrollBarContainer.patch({
      texture: lng.Tools.getRoundRect(
        this._ScrollBarContainer.w,
        this.renderHeight,
        this.styles.scrollBarContainer.radius,
        0,
        0,
        true,
        this.styles.scrollBarContainer.color
      ),
      h: this.renderHeight,
      x: this._contentWidth,
      y: 2
    });
    this._ScrollBar.patch({
      x:
        this._contentWidth -
        (this._ScrollBar.w - this._ScrollBarContainer.w) / 2,
      y: 0
    });
  }

  _getScrollableContentHeight() {
    return this._ScrollContainer.children.reduce(
      (acc, child) => acc + child.renderHeight,
      0
    );
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
      this._ScrollBarProgressOverlay.patch({
        smooth: {
          h: [
            this._ScrollBar.renderHeight / 2 + this._scrollBarY,
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
        this._autoScrollComplete = true;
        this.fireAncestors('$scrollChanged', 'endDown', this);
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
      this._ScrollBarProgressOverlay.patch({
        smooth: {
          h: [
            this._ScrollBar.renderHeight / 2 + this._scrollBarY,
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
    this._ScrollContainer.transition('y').finish();
    this._ScrollBar.transition('y').finish();
    delete this._ScrollContainer._transitions;
    delete this._ScrollBar._transitions;
    this._autoScrollComplete = false;
  }

  _getScrollStep(height) {
    const numSteps = Math.ceil(
      (this._ScrollContainer.h - this.renderHeight) / this._scrollStep
    );
    return (height - this.styles.scrollBar.h) / numSteps;
  }

  _setAutoScroll(val) {
    if (this._autoScroll !== val) {
      this._autoScroll = val;
    }
    this._setupAutoScroll();
    return val;
  }

  _setupAutoScroll() {
    clearTimeout(this._startAutoScroll);
    clearTimeout(this._performAutoScrollTimer);

    if (this.autoScroll) {
      this._startAutoScroll = setTimeout(
        () => this._performAutoScroll(),
        isNaN(this.autoScrollDelay) ? 2000 : this.autoScrollDelay
      );
    }
  }

  _setShowScrollBar(val) {
    this._ScrollBarContainer.visible = val;
    return val;
  }

  _performAutoScroll() {
    if (this.autoScroll && !this._autoScrollComplete) {
      this._handleDown();
      this._performAutoScrollTimer = setTimeout(
        () => this._performAutoScroll(),
        isNaN(this.autoScrollSpeed) ? 200 : this.autoScrollSpeed
      );
    }
  }

  _setContent(content) {
    if (content !== this._content) {
      if (this.enabled) {
        this.resetScroll();
        this._setupAutoScroll();
        this._update();
      }
    }
    return content;
  }

  get _scrollContainerY() {
    return this._ScrollContainer.transition('y').targetValue;
  }

  get _scrollBarY() {
    return this._ScrollBar.transition('y').targetValue;
  }
}
