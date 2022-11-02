import Base from '../Base';
import type { StylePartial } from '../../types/lui';
import type { TextBoxStyles } from '../TextBox';

export type MetadataBaseStyles = {
  descriptionTextStyle: TextBoxStyles;
  fadeWidth: number;
  logoWidth: number;
  logoHeight: number;
  logoPadding: number;
  subtitleTextStyle: TextBoxStyles;
  titleTextStyle: TextBoxStyles;
};

export default class MetadataBase extends Base {
  title?: string;
  subtitle?: string;
  description?: string;
  logo?: string;
  logoWidth?: number;
  logoHeight?: number;
  logoTitle?: string;
  logoPosition?: string;
  get style(): MetadataBaseStyles;
  set style(v: StylePartial<MetadataBaseStyles>);
}
