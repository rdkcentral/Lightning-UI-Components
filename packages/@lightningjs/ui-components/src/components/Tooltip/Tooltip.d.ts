import lng from '@lightningjs/core';
import Base from '../Base';
import type { Color, StylePartial } from '../../types/lui';
import type { TextBoxStyle } from '../TextBox';

type TransitionObject = {
  delay: number;
  duration: number;
  timingFunction: string;
};

export type TooltipStyle = {
  backgroundColor: Color;
  marginBottom: number;
  paddingX: number;
  paddingY: number;
  pointerW: number;
  pointerH: number;
  radius: lng.Tools.CornerRadius;
  textStyle: TextBoxStyle;
  transition: TransitionObject;
};

export default class Tooltip extends Base {
  title?: string;
  delayVisible?: number;
  timeVisible?: number;
  get style(): TooltipStyle;
  set style(v: StylePartial<TooltipStyle>);

  // tags
  get _Background(): lng.Component;
  get _Text(): lng.Component;
}
