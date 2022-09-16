import Base from '../../Base';
import { __TextType } from '@lightningjs/core';

export interface MetadataBaseStyles {
  descriptionTextProperties?: __TextType;
  fadeWidth?: number;
  logoWidth?: number;
  logoHeight: number;
  logoPadding?: number;
  subtitleTextProperties?: __TextType;
  titleTextProperties?: __TextType;
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
