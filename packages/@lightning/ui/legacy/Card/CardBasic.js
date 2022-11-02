import Card, { baseCardProps } from '.';

import { withStyles } from '@lightning/ui-core';

// eslint-disable-next-line no-unused-vars
const basicStyles = theme => ({
  w: 410,
  h: 231
});

export default class CardBasic extends withStyles(Card, basicStyles) {
  static get properties() {
    return [...baseCardProps, 'logo', 'logoWidth', 'logoHeight'];
  }
}
