import type lng from '@lightningjs/core';
import { Base } from '@lightning/ui';
import type { Color, StylePartial } from '@lightning/ui-core';

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
  titleTextStyle: lng.textures.TextTexture.Settings;
  descriptionTextStyle: lng.textures.TextTexture.Settings;
  actionAreaMarginTop: number;
  actionAreaTextStyle: lng.textures.TextTexture.Settings;
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
}
