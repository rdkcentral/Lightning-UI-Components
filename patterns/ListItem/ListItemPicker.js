import ListItem from '.';
import { Arrow } from '../../textures';
import Row from '../../layout/Row';
import { Marquee } from '../../elements';

export default class ListItemPicker extends ListItem {
  static _template() {
    const ListItem = super._template();
    return {
      Container: {
        ...ListItem.Container,
        LeftArrow: {
          flexItem: false,
          mount: 0.5,
          x: 24, // TODO: utilze styles, not a hard coded number
          y: h => h / 2,
          zIndex: 2,
          texture: {
            type: Arrow,
            direction: 'left',
            h: 25, // TODO: utilze styles, not a hard coded number
            w: 14 // TODO: utilze styles, not a hard coded number
          }
        },
        Left: {
          ...ListItem.Container.Left,
          Title: {
            type: Marquee
          },
          Carousel: {
            type: Row,
            signals: {
              selectedChange: '_onSelectedChange'
            },
            alwaysScroll: true,
            scrollMount: 0,
            clipping: true
          }
        },
        Right: ListItem.Container.Right,
        RightArrow: {
          flexItem: false,
          mount: 0.5,
          x: w => w - 24, // TODO: utilze styles, not a hard coded number
          y: h => h / 2,
          zIndex: 2,
          texture: {
            type: Arrow,
            direction: 'right',
            h: 25, // TODO: utilze styles, not a hard coded number
            w: 14 // TODO: utilze styles, not a hard coded number
          }
        }
      }
    };
  }

  static get properties() {
    return [...super.properties, 'options', 'selectedOptionIndex'];
  }

  static get tags() {
    return [
      ...super.tags,
      {
        name: 'Carousel',
        path: 'Container.Left.Carousel'
      }
    ];
  }

  _construct() {
    super._construct();
    this._options = [];
    this._selectedOptionIndex = 0;
  }

  _init() {
    this.subtitle = !this.selectedOptionIndex
      ? this.options[0]
      : this.selectedOption;
  }

  get selectedOption() {
    return this.options[this._selectedOptionIndex];
  }

  _update() {
    this._updateTitle();
    this._updateArrows();
    this._updateCarousel();
    this._whenEnabled.then(() => {
      super._update();
      this._updateLeft();
    });
  }

  _getSubtitle() {
    return this.selectedOption;
  }

  _updateLeft() {
    this._Left.patch({
      flex: {
        alignItems: this.hasFocus() ? 'center' : 'flex-start'
      },
      flexItem: {
        grow: 1
      }
    });
  }

  get _textWidth() {
    // TODO: This hard coded number needs to go away. Harshita, does this represent the width of the arrows? Emily guessed here
    const arrowWidth = 28;
    return this.hasFocus()
      ? this.w -
          2 * this.styles.paddingRight -
          2 * this.styles.paddingLeft -
          arrowWidth
      : this.w - this.styles.paddingRight - this.styles.paddingLeft;
  }

  _updateSubtitle() {
    super._updateSubtitle();
    if (this._Subtitle) {
      this._Subtitle.visible = !this.hasFocus();
    }
  }

  _updateTitle() {
    if (!this._title) {
      this._Left.patch({ Title: undefined });
      return;
    }

    this._Left.patch({
      w: this.w,
      Title: {
        centerAlign: this.hasFocus(),
        w: this._textWidth,
        y: 2,
        h: this.styles.title.text.lineHeight + 4,
        color: this.hasFocus()
          ? this.styles.focused.title.color
          : this.styles.title.color,
        title: {
          ...this.styles.title.text,
          text: this._title
        }
      }
    });

    this.hasFocus()
      ? this._Title.startScrolling()
      : this._Title.stopScrolling();
  }

  _updateCarousel() {
    this._Carousel.visible = this.hasFocus();

    const currentOptionsString = this._Carousel.Items.childList._items.reduce(
      (acc, curr) => acc + curr.title,
      ''
    );
    const newOptionsString = this.options.reduce((acc, curr) => acc + curr, '');

    if (this._Carousel.w > 0 && currentOptionsString === newOptionsString) {
      if (this._Carousel.selectedIndex !== this._selectedOptionIndex) {
        this._Carousel.selectedIndex = this._selectedOptionIndex;
      }
      return;
    }
    this._Left.patch({
      Carousel: {
        type: Row,
        h: this.styles.subtitle.text.lineHeight,
        w: this._Left.finalW,
        alwaysScroll: true,
        scrollMount: 0,
        clipping: true,
        items: this.options.map(option => ({
          h: this.styles.subtitle.text.lineHeight,
          w: this._Left.finalW,
          type: Marquee,
          title: {
            ...this.styles.subtitle.text,
            textAlign: 'center',
            textColor: this.styles.focused.subtitle.color,
            text: option
          }
        })),
        signals: {
          selectedChange: '_onSelectedChange'
        }
      }
    });

    while (
      Number.isInteger(this._selectedOptionIndex) &&
      this._selectedOptionIndex !== this._Carousel.selectedIndex
    ) {
      this._selectedOptionIndex > this._Carousel.selectedIndex
        ? this._Carousel.selectedIndex++
        : this._Carousel.selectedIndex--;
    }
  }

  _updateArrows() {
    const visible = this.hasFocus();
    this._Container.patch({
      LeftArrow: { visible },
      RightArrow: { visible }
    });

    // TODO: Remove hardcoded alphas and add to styles
    if (this._Carousel.selectedIndex === 0) {
      this._Container.tag('LeftArrow').smooth = { alpha: 0.48 };
    } else if (this._Carousel.selectedIndex === this.options.length - 1) {
      this._Container.tag('RightArrow').smooth = { alpha: 0.48 };
    } else {
      const smooth = { smooth: { alpha: 1 } };
      this._Container.patch({
        LeftArrow: smooth,
        RightArrow: smooth
      });
    }
  }

  _onSelectedChange() {
    // Store the index at the top level since row resets it if items changes or construct runs
    this.currentIndex = this._Carousel.selectedIndex;

    this.fireAncestors(
      '$listItemPickerChanged',
      this._selectedOption,
      this._selectedOptionIndex,
      this
    );
    this._updateArrows();
  }

  _getFocused() {
    return this._Carousel;
  }
}
