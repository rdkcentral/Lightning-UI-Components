import lng from '@lightningjs/core';
import withUpdates from '../mixins/withUpdates';
import withTags from '../mixins/withTags';
import withStyles from '../mixins/withStyles';
import { TYPOGRAPHY } from '../Styles';

const style = theme => {
  return {
    h: theme.typography.caption.lineHeight
  };
};

export default class CollectionLabel extends withTags(
  withUpdates(withStyles(lng.Component, style))
) {
  static _template() {
    return {
      h: this.styles.h,
      skipFocus: true,
      Label: {
        text: {
          ...TYPOGRAPHY.caption
        }
      }
    };
  }

  static get properties() {
    return ['title'];
  }

  static get tags() {
    return ['Label'];
  }

  _update() {
    if (this.title) this._Label.text.text = this.title;
  }
}
