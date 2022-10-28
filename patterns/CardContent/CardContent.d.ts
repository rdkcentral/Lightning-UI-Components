import type Card from '../Card/Card';
import { CardStyles } from '../Card/Card';
import { MetadataCardContent } from '../../elements';
import type { StylePartial } from '../../types/lui';

type ImageSize = {
  w: number;
  h: number;
};

export type CardContentStyles = CardStyles & {
  expandedW: number;
  expandedH: number;
  imageSize: ImageSize;
};

export default class CardContent extends Card {
  collapseToMetadata?: boolean;
  metadata: MetadataCardContent;
  orientation?: string;
  shouldCollapse?: boolean;
  src: string;
  get style(): CardContentStyles;
  set style(v: StylePartial<CardContentStyles>);
}
