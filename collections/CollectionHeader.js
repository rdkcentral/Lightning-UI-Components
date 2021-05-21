import lng from '@lightningjs/core';
import Row from '../layout/Row';
import { ActionButtonXsmall } from '../elements/ActionButton';
import withStyles from '../mixins/withStyles';
import withUpdates from '../mixins/withUpdates';
import withTags from '../mixins/withTags';

const style = theme => {
  return {
    space: theme.spacing(4),
    headline: theme.typography.headline3
  };
};
class Heading extends withTags(withUpdates(withStyles(lng.Component, style))) {
  static _template() {
    return {
      Heading: {
        text: {
          ...this.styles.headline
        }
      }
    };
  }

  static get properties() {
    return ['title'];
  }

  static get tags() {
    return ['Heading'];
  }

  _init() {
    this._title = 'Please reference the "Docs" tab above for more information';
    this._Heading.on('txLoaded', () => {
      this._update();
    });
  }

  _update() {
    this._Heading.text.text = this._title;
    this.w = this._Heading.renderWidth;
    this.h = this._Heading.renderHeight;
    this.fireAncestors('$itemChanged');
  }
}
export default class CollectionHeader extends withTags(
  withUpdates(withStyles(lng.Component, style))
) {
  static _template() {
    return {
      h: ActionButtonXsmall.styles.h,
      Header: {
        alpha: 0.001,
        type: Row,
        itemSpacing: this.styles.space,
        items: [
          {
            type: Heading
          },
          {
            type: ActionButtonXsmall,
            backgroundType: 'stroke',
            title: 'View Docs',
            visible: false
          }
        ]
      }
    };
  }

  static get properties() {
    return ['title', 'url'];
  }

  static get tags() {
    return ['Header'];
  }

  $itemChanged() {
    this._Header.patch({
      alpha: 1
    });
  }

  _goToDocs() {
    if (!this.url) return;
    window.open(this.url, '_blank');
  }

  _getFocused() {
    return this._Header.items[1];
  }

  _update() {
    if (this.title) {
      this._Header.items[0].patch({
        title: this.title
      });
    }
    if (this.url) {
      this._Header.items[1].patch({
        visible: true,
        onEnter: this._goToDocs.bind(this)
      });
    }
  }
}
