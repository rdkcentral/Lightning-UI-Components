import type MetadataBase from '../MetadataBase';
import { MetadataBaseStyles } from '../MetadataBase';
import type Provider from '../Provider';
import { ProviderStyles } from '../Provider';
import { __TextType } from '@lightningjs/core';

export interface MetadataCardContentStyles extends MetadataBaseStyles {
  titleTextProperties?: __TextType;
  descriptionProperties?: __TextType;
  detailsTextProperties?: __TextType;
  providerStyle?: ProviderStyles;
}

export declare class MetadataCardContent extends MetadataBase {
  details?: string;
  provider?: Provider;
  style: MetadataCardContentStyles;
}
