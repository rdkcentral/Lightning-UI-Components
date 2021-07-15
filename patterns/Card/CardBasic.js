import { withStyles } from '../../mixins';
import Card, { baseCardProps } from '.';

const basicStyles = theme => ({
  w: 410,
  h: 231
});

export default class CardBasic extends withStyles(Card, basicStyles) {
  static get properties() {
    return [...baseCardProps, 'logo', 'logoWidth', 'logoHeight'];
  }
}
