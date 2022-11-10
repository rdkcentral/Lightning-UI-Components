import lng from '@lightningjs/core';
import {
  TextBoxStyles,
  StylePartial,
  ButtonStyles,
  Button
} from '@lightning/ui-core';

type LogoStylesObject = {
  radius: lng.Tools.CornerRadius;
  h: number;
  w: number;
};

export type ListItemStyles = ButtonStyles & {
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

export default class ListItem extends Button {
  description?: string;
  prefixLogo?: string;
  shouldCollapse?: boolean;
  suffixLogo?: string;
  get style(): ListItemStyles;
  set style(v: StylePartial<ListItemStyles>);
}
