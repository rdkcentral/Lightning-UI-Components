const theme = getXfinityTheme();
import { getXfinityTheme } from '../Styles/createTheme';
import lng from '@lightningjs/core';
import TextBox from '../elements/TextBox';
import withStyles from '../mixins/withStyles';
import withTags from '../mixins/withTags';
import withUpdates from '../mixins/withUpdates';

const styles = () => ({ h: 55 });
export default class CollectionLabel extends withTags(
  withUpdates(withStyles(lng.Component, styles))
) {
  static _template() {
    return {
      h: this.styles.h,
      skipFocus: true,
      Label: {
        type: TextBox,
        textColor: theme.palette.yellow.indicator
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
    if (this.title) this._Label.content = this.title;
  }
}
