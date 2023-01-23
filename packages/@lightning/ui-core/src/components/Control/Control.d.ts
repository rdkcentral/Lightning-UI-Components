import type lng from '@lightningjs/core';
import { ButtonSmall, ButtonStyle } from '../Button';
import type { StylePartial } from '../../types/lui';

type LogoStyleObject = {
  radius: lng.Tools.CornerRadius;
  h: number;
  w: number;
};

export type ControlStyle = ButtonStyle & {
  h: number;
  iconStyle: Record<string, unknown>;
  logoStyle: LogoStyleObject;
  radius: lng.Tools.CornerRadius;
};

export default class Control extends ButtonSmall {
  icon?: string;
  logo?: string;
  shouldCollapse?: boolean;
  get style(): ControlStyle;
  set style(v: StylePartial<ControlStyle>);
}
