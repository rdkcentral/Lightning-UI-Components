import type lng from '@lightningjs/core';
import { ButtonSmall, ButtonStyles } from '../Button';
import type { StylePartial } from '../../types/lui';

type LogoStylesObject = {
  radius: lng.Tools.CornerRadius;
  h: number;
  w: number;
};

export type ControlStyles = ButtonStyles & {
  h: number;
  iconStyles: Record<string, unknown>;
  logoStyles: LogoStylesObject;
  radius: lng.Tools.CornerRadius;
};

export default class Control extends ButtonSmall {
  icon?: string;
  logo?: string;
  shouldCollapse?: boolean;
  get style(): ControlStyles;
  set style(v: StylePartial<ControlStyles>);
}
