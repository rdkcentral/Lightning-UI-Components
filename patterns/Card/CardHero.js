import { withStyles } from '../../mixins';
import Card, { baseCardProps, artCardProps, logoProps } from '.';
import { MetadataHero } from '../../elements';

const heroStyles = theme => ({
  orientation: 'horizontal',
  w: 1310,
  h: 360,
  imgRadius: theme.border.radius.medium,
  artHeight: 360,
  artWidth: 640
});

export default class CardHero extends withStyles(Card, heroStyles) {
  static _template() {
    return {
      ...super._template(),
      Metadata: {
        type: MetadataHero
      }
    };
  }

  static get properties() {
    return [...artCardProps, ...baseCardProps, ...logoProps, 'data', 'cta'];
  }
}
