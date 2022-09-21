import MetadataBase, { MetadataBaseStyles } from '../MetadataBase';
import Provider from '../Provider';
import { ProviderStyles } from '../Provider';
import lng from '@lightningjs/core';

export interface MetadataCardContentStyles extends MetadataBaseStyles {
  titleTextProperties?: lng.textures.TextTexture.Settings;
  descriptionProperties?: lng.textures.TextTexture.Settings;
  detailsTextProperties?: lng.textures.TextTexture.Settings;
  providerStyle?: ProviderStyles;
}

export declare class MetadataCardContent extends MetadataBase {
  details?: string;
  provider?: Provider;
  style: MetadataCardContentStyles;
}
