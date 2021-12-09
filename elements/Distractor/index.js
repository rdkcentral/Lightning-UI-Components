/**
 * Distractor Component
 *
 * Generic Distractor Component that handles setting text
 * and focus and unfocus states for the Distractor background.
 */
import withStyles from '../../mixins/withStyles';
import Base from '../Base';
import ThreeDot from './ThreeDot';
import { getValidColor } from '../../Styles/Styles';
import styles from './Distractor.styles';

export default class Distractor extends withStyles(Base, styles) {
  static get properties() {
    return ['circleSize', 'color'];
  }

  _construct() {
    super._construct();
    this._circleSize = this.styles.circleSize;
    this._color = getValidColor(this.styles.color);
  }

  _update() {
    this.childList.clear();
    this.patch({
      ThreeDot: {
        type: ThreeDot,
        circleSize: this.circleSize,
        color: getValidColor(this.color)
      }
    });
  }
}
