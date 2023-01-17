import lng from '@lightningjs/core';
import { StylePartial } from '@lightning/ui-core';
import Card, { CardStyles } from '../Card/Card';
import { MetadataCardContent } from '../MetadataCardContent/MetadataCardContent';

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

  // tags
  get _Metadata(): lng.Component;
  get _Tile(): lng.Component;
}
