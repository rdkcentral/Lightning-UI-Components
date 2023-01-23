import lng from '@lightningjs/core';
import { StylePartial } from '@lightning/ui-core';
import Card, { CardStyle } from '../Card/Card';
import { default as MetadataCardContent } from '../MetadataCardContent/MetadataCardContent';

type ImageSize = {
  w: number;
  h: number;
};

export type CardContentStyle = CardStyle & {
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
  get style(): CardContentStyle;
  set style(v: StylePartial<CardContentStyle>);

  // tags
  get _Metadata(): lng.Component;
  get _Tile(): lng.Component;
}
