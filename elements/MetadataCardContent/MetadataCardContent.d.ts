import MetadataBase, { MetadataBaseStyles } from '../MetadataBase';
import Provider, { ProviderStyles } from '../Provider';
import type { StylePartial } from '../../types/lui';
import type { TextBoxStyles } from '../TextBox';

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
