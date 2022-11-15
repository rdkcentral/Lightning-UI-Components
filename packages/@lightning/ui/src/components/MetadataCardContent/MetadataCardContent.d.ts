import Provider, { ProviderStyles } from '../Provider';
import {
  MetadataBase,
  MetadataBaseStyles,
  TextBoxStyles,
  StylePartial
} from '@lightning/ui-core';

export type MetadataCardContentStyles = MetadataBaseStyles & {
  titleTextStyle: TextBoxStyles;
  detailsTextStyle: TextBoxStyles;
  providerStyle: ProviderStyles;
};

export declare class MetadataCardContent extends MetadataBase {
  details?: string;
  provider?: Provider;
  get style(): MetadataCardContentStyles;
  set style(v: StylePartial<MetadataCardContentStyles>);
}
