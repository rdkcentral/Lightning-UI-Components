import type lng from '@lightningjs/core';
import type {
  Base,
  Color,
  StylePartial,
  TextBoxStyle
} from '@lightning/ui-core';

type Animation = {
  duration?: number;
  delay?: number;
};

type LogoStyleObject = {
  radius: lng.Tools.CornerRadius;
  h: number;
  w: number;
};

export type NotificationStyle = {
  w: number;
  backgroundColor: Color;
  iconStyle: Record<string, unknown>;
  logoStyle: LogoStyleObject;
  iconOnlyMarginX: number;
  marginX: number;
  marginY: number;
  iconSize: number;
  iconMarginRight: number;
  iconMarginTop: number;
  titleTextStyle: TextBoxStyle;
  descriptionTextStyle: TextBoxStyle;
  actionAreaMarginTop: number;
  actionAreaTextStyle: TextBoxStyle;
  enterAlpha: number;
  enterScale: number;
  dismissAlpha: number;
  dismissScale: number;
  step1Animation: Animation;
  step2Animation: Animation;
  step2TextEnterAnimation: Animation;
  step2TextExitAnimation: Animation;
  step3Animation: Animation;
};

export default class Notification extends Base {
  icon?: string;
  logo?: string;
  title?: string;
  description?: string;
  actionArea?: string;
  entered?: boolean;
  get style(): NotificationStyle;
  set style(v: StylePartial<NotificationStyle>);

  // tags
  get _Container(): lng.Component;
  get _Content(): lng.Component;
  get _Icon(): lng.Component;
  get _Text(): lng.Component;
  get _Title(): lng.Component;
  get _Description(): lng.Component;
  get _ActionArea(): lng.Component;
  get _ActionAreaText(): lng.Component;
}
