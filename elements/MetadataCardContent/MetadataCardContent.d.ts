import type MetadataBase from '../MetadataBase/MetadataBase';
import type Provider from '../Provider/Provider';
import { ProviderStyles } from '../Provider/Provider';
import { __TextType } from '@lightningjs/core';

export interface MetadataCardContentStyles {
  titleTextProperties?: __TextType;
  descriptionProperties?: __TextType;
  detailsTextProperties?: __TextType;
  providerStyle?: ProviderStyles;
}

export declare class MetadataCardContent extends MetadataBase {
  details?: string;
  provider?: Provider;
  style?: MetadataCardContentStyles;
}
