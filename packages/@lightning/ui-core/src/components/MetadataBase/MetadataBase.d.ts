import Base from '../Base';
import type { StylePartial } from '../../types/lui';
import type { TextBoxStyle } from '../TextBox';

export type MetadataBaseStyle = {
  descriptionTextStyle: TextBoxStyle;
  fadeWidth: number;
  logoWidth: number;
  logoHeight: number;
  logoPadding: number;
  subtitleTextStyle: TextBoxStyle;
  titleTextStyle: TextBoxStyle;
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
  get style(): MetadataBaseStyle;
  set style(v: StylePartial<MetadataBaseStyle>);
}
