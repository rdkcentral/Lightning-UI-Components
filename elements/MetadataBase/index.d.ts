import Base from '../../Base';
import lng from '@lightningjs/core';

export interface MetadataBaseStyles {
  descriptionTextProperties?: lng.textures.TextTexture.Settings;
  fadeWidth?: number;
  logoWidth?: number;
  logoHeight: number;
  logoPadding?: number;
  subtitleTextProperties?: lng.textures.TextTexture.Settings;
  titleTextProperties?: lng.textures.TextTexture.Settings;
}

export default class MetadataBase extends Base {
  title?: string;
  subtitle?: string;
  description?: string;
  logo?: string;
  logoWidth?: number;
  logoHeight?: number;
  logoTitle?: string;
  logoPosition?: string;
  style: MetadataBaseStyles;
}
