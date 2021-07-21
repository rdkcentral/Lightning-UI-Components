import { withStyles } from '../../mixins';
import Card, { baseCardProps, artCardProps, logoProps } from '.';

const smallMetadataStyles = theme => ({
  title: {
    ...theme.typography.headline3,
    textColor: theme.palette.text.light.primary
  },
  description: {
    ...theme.typography.body3,
    textColor: theme.palette.text.light.tertiary
  }
});

const verticalStyles = theme => ({
  orientation: 'vertical',
  w: 410,
  h: 335,
  imgRadius: theme.border.radius.medium,
  metadata: {
    ...smallMetadataStyles(theme),
    title: {
      ...smallMetadataStyles(theme).title,
      maxLines: 1
    },
    description: {
      ...smallMetadataStyles(theme).description,
      maxLines: 1
    }
  }
});

export default class CardVertical extends withStyles(Card, verticalStyles) {
  static get properties() {
    return [...artCardProps, ...baseCardProps];
  }
}

const verticalLargeStyles = theme => ({
  metadata: smallMetadataStyles(theme),
  orientation: 'vertical',
  w: 410,
  h: 502,
  imgRadius: theme.border.radius.medium
});

export class CardVerticalLarge extends withStyles(Card, verticalLargeStyles) {
  static get properties() {
    return [...artCardProps, ...baseCardProps, ...logoProps, 'data', 'cta'];
  }
}
