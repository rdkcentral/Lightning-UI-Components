import lng from '@lightningjs/core';
import {
  MetadataBase,
  MetadataBaseStyles,
  TextBoxStyles,
  StylePartial
} from '@lightning/ui-core';
import Provider, { ProviderStyles } from '../Provider';

export type MetadataCardContentStyles = MetadataBaseStyles & {
  detailsTextStyle: TextBoxStyles;
  providerStyle: ProviderStyles;
};

export default class MetadataCardContent extends MetadataBase {
  details?: string;
  provider?: Provider;
  get style(): MetadataCardContentStyles;
  set style(v: StylePartial<MetadataCardContentStyles>);

  // tags
  get _Text(): lng.Component;
  get _Title(): lng.Component;
  get _Description(): lng.Component;
  get _DetailsWrapper(): lng.Component;
  get _DetailsFader(): lng.Component;
  get _Details(): lng.Component;
  get _Provider(): lng.Component;
}
