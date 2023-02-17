import lng from '@lightningjs/core';
import MetadataBase, { MetadataBaseStyle } from '../MetadataBase';
import Provider, { ProviderStyle } from '../Provider';
import { TextBoxStyle } from '../TextBox';
import type { StylePartial } from '../../types/lui';

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
