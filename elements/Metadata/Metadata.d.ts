import Base from '../../Base.d.ts';
import { __TextType } from '@lightningjs/core';

export interface MetadataStyles {
  titleTextProperties?: __TextType;
  subtitleTextProperties?: __TextType;
  descriptionTextProperties?: __TextType;
  logoW?: number;
  logoH?: number;
  logoPadding?: number;
  fadeWidth?: number;
}

export default class Metadata extends Base {
  title?: string;
  subtitle?: string;
  description?: string;
  logo?: string;
  logoWidth?: number;
  logoHeight?: number;
  logoTitle?: string;
  logoPosition?: string;
  styles?: MetadataStyles;
}
