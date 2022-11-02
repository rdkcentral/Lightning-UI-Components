import { withStyles } from '@lightning/ui-core';
import Card, { baseCardProps, artCardProps, logoProps } from '.';

const heroStyles = theme => ({
  orientation: 'horizontal',
  w: 1310,
  h: 360,
  imgRadius: theme.border.radius.medium,
  artHeight: 360,
  artWidth: 640
});

export default class CardHero extends withStyles(Card, heroStyles) {
  static get properties() {
    return [...artCardProps, ...baseCardProps, ...logoProps, 'data', 'cta'];
  }
}
