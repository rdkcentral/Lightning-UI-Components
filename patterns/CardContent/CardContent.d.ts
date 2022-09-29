import { MetadataCardContent } from '../../elements';
import { WithThemeStylesConstructor } from '../../mixins/withThemeStyles';
import type Card from '../Card/Card';
import { CardStyles } from '../Card/Card';

export interface ImageSize {
  w?: number;
  h?: number;
}

export interface CardContentStyles extends CardStyles {
  expandedW?: number;
  expandedH?: number;
  imageSize?: ImageSize;
}

declare const CardContent_base: WithThemeStylesConstructor<
  typeof Card,
  CardContentStyles
>;

export default class CardContent extends CardContent_base {
  collapseToMetadata?: boolean;
  metadata: MetadataCardContent;
  orientation?: string;
  shouldCollapse?: boolean;
  src: string;
}
