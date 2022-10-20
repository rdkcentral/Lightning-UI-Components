import lng from '@lightningjs/core';
import Button, { ButtonStyles } from '../../elements/Button';

type logoStylesObject = {
  radius?: lng.Tools.CornerRadius;
  h?: number;
  w?: number;
};

export type ListItemBaseStyles = ButtonStyles & {
  alpha?: number;
  descriptionTextStyle?: lng.textures.TextTexture.Settings;
  h?: number;
  logoStyles?: logoStylesObject;
  paddingX: number;
  prefixH: number;
  suffixH: number;
  titlePadding: number;
  titleTextStyle?: lng.textures.TextTexture.Settings;
};

export default class ListItemBaseThemed extends Button {
  description?: string;
  prefixLogo?: string;
  shouldCollapse?: boolean;
  suffixLogo?: string;
  static get __themeStyle(): ListItemBaseStyles;
  style: ListItemBaseStyles;
}
