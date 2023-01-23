import lng from '@lightningjs/core';
import {
  MetadataBase,
  MetadataBaseStyle,
  TextBoxStyle,
  StylePartial
} from '@lightning/ui-core';
import Provider, { ProviderStyle } from '../Provider';

export type MetadataCardContentStyle = MetadataBaseStyle & {
  detailsTextStyle: TextBoxStyle;
  providerStyle: ProviderStyle;
};

export default class MetadataCardContent extends MetadataBase {
  details?: string;
  provider?: Provider;
  get style(): MetadataCardContentStyle;
  set style(v: StylePartial<MetadataCardContentStyle>);

  // tags
  get _Text(): lng.Component;
  get _Title(): lng.Component;
  get _Description(): lng.Component;
  get _DetailsWrapper(): lng.Component;
  get _DetailsFader(): lng.Component;
  get _Details(): lng.Component;
  get _Provider(): lng.Component;
}
