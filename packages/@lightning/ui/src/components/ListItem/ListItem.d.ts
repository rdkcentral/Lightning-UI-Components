import lng from '@lightningjs/core';
import {
  TextBoxStyle,
  StylePartial,
  ButtonStyle,
  Button
} from '@lightning/ui-core';

type LogoStyleObject = {
  radius: lng.Tools.CornerRadius;
  h: number;
  w: number;
};

export type ListItemStyle = ButtonStyle & {
  alpha: number;
  descriptionTextStyle: TextBoxStyle;
  h: number;
  logoStyle: LogoStyleObject;
  paddingX: number;
  prefixH: number;
  suffixH: number;
  titlePadding: number;
  titleTextStyle: TextBoxStyle;
};

export default class ListItem extends Button {
  description?: string;
  prefixLogo?: string;
  shouldCollapse?: boolean;
  suffixLogo?: string;
  get style(): ListItemStyle;
  set style(v: StylePartial<ListItemStyle>);

  // tags
  get _Description(): lng.Component;
}
