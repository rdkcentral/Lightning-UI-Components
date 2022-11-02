import lng from '@lightningjs/core';
import { TextBoxStyles, StylePartial, ButtonStyles, Button } from '@lightning/ui-core';

type LogoStylesObject = {
  radius: lng.Tools.CornerRadius;
  h: number;
  w: number;
};

export type ListItemBaseStyles = ButtonStyles & {
  alpha: number;
  descriptionTextStyle: TextBoxStyles;
  h: number;
  logoStyles: LogoStylesObject;
  paddingX: number;
  prefixH: number;
  suffixH: number;
  titlePadding: number;
  titleTextStyle: TextBoxStyles;
};

export default class ListItemBaseThemed extends Button {
  description?: string;
  prefixLogo?: string;
  shouldCollapse?: boolean;
  suffixLogo?: string;
  get style(): ListItemBaseStyles;
  set style(v: StylePartial<ListItemBaseStyles>);
}
