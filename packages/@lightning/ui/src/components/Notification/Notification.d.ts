import type lng from '@lightningjs/core';
import type {
  Base,
  Color,
  StylePartial,
  TextBoxStyles
} from '@lightning/ui-core';

type Animation = {
  duration?: number;
  delay?: number;
};

type LogoStylesObject = {
  radius: lng.Tools.CornerRadius;
  h: number;
  w: number;
};

export type NotificationStyles = {
  w: number;
  backgroundColor: Color;
  iconStyles: Record<string, unknown>;
  logoStyles: LogoStylesObject;
  iconOnlyMarginX: number;
  marginX: number;
  marginY: number;
  iconSize: number;
  iconMarginRight: number;
  iconMarginTop: number;
  titleTextStyle: TextBoxStyles;
  descriptionTextStyle: TextBoxStyles;
  actionAreaMarginTop: number;
  actionAreaTextStyle: TextBoxStyles;
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
  get style(): NotificationStyles;
  set style(v: StylePartial<NotificationStyles>);

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
