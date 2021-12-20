import ListItem from '.';
import { Arrow } from '../../textures'; // What is this
import Row from '../../layout/Row';

export default class ListItemPicker extends ListItem {
  static _template() {
    const ListItem = super._template();
    return {
      Container: {
        ...ListItem.Container,
        LeftArrow: {
          flexItem: false,
          mount: 0.5,
          x: 24,
          y: h => h / 2,
          zIndex: 2,
          texture: {
            type: Arrow,
            direction: 'left',
            h: 25,
            w: 14
          }
        },
        Left: {
          ...ListItem.Container.Left,
          Title: {},
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
          x: w => w - 24,
          y: h => h / 2,
          zIndex: 2,
          texture: {
            type: Arrow,
            direction: 'right',
            h: 25,
            w: 14
          }
        }
      }
    };
  }
  _init() {
    if (this.selectedOptionIndex == null) {
      this.subtitle = this.options[0];
    } else {
      this.subtitle = this.selectedOption;
    }
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

  get selectedOption() {
    return this.options[this._selectedOptionIndex];
  }

  _construct() {
    super._construct();
    this._options = [];
    this._selectedOptionIndex = 0;
  }

  _update() {
    this._whenEnabled.then(() => {
      super._update();
      this._updateLeft();
      this._updateArrows();
      this._updateCarousel();
      this._updateTitle();
      this._updateSubtitle();
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
    if (!this.hasFocus()) {
      return this.w - this.styles.paddingRight - this.styles.paddingLeft;
    } else {
      return (
        this.w - 2 * this.styles.paddingRight - 2 * this.styles.paddingLeft - 28
      );
    }
  }
  _updateSubtitle() {
    super._updateSubtitle();
    if (!this._Subtitle) return;
    this._Subtitle.patch({
      visible: !this.hasFocus()
    });
  }

  _updateCarousel() {
    this._Carousel.visible = this.hasFocus();

    const currentOptionsString = this._Carousel._Items.childList._items.reduce(
      (acc, curr) => {
        return acc + curr.text.text;
      },
      ''
    );

    const newOptionsString = this.options.reduce((acc, curr) => {
      return acc + curr;
    }, '');

    if (this._Carousel.w > 0 && currentOptionsString === newOptionsString) {
      this._Carousel.selectedIndex = this._selectedOptionIndex;
      return;
    }
    this._Left.patch({
      Carousel: {
        type: Row,
        h: this.styles.subtitle.text.lineHeight,
        w: this._Left.finalW,
        visible: this.hasFocus(),
        alwaysScroll: true,
        scrollMount: 0,
        clipping: true,
        items: this.options.map(option => ({
          h: this.styles.subtitle.text.lineHeight,
          w: this._Left.finalW,
          text: {
            ...this.styles.subtitle.text,
            textAlign: 'center',
            textColor: this.styles.focused.subtitle.color,
            text: option,
            wordWrapWidth: this._textWidth
          }
        })),
        signals: {
          selectedChange: '_onSelectedChange'
        }
      }
    });
    const { _selectedOptionIndex } = this;
    while (
      Number.isInteger(_selectedOptionIndex) &&
      _selectedOptionIndex !== this._Carousel.selectedIndex
    ) {
      if (_selectedOptionIndex > this._Carousel.selectedIndex) {
        this._Carousel.selectedIndex++;
      } else {
        this._Carousel.selectedIndex--;
      }
    }
  }

  _updateArrows() {
    this._Container.patch({
      LeftArrow: {
        visible: this.hasFocus()
      },
      RightArrow: {
        visible: this.hasFocus()
      }
    });

    if (this._Carousel.selectedIndex === 0) {
      this._Container.tag('LeftArrow').smooth = { alpha: 0.48 };
    } else if (this._Carousel.selectedIndex === this.options.length - 1) {
      this._Container.tag('RightArrow').smooth = { alpha: 0.48 };
    } else {
      this._Container.patch({
        LeftArrow: {
          smooth: {
            alpha: 1
          }
        },
        RightArrow: {
          smooth: {
            alpha: 1
          }
        }
      });
    }
  }

  _onSelectedChange() {
    this.currentIndex = this._Carousel.selectedIndex;
    // Store the index at the top level since row resets it if items changes or construct runs

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
