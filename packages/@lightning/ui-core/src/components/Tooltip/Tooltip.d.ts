import lng from '@lightningjs/core';
import Base from '../Base';
import type { Color, StylePartial } from '../../types/lui';
import type { TextBoxStyles } from '../TextBox';
import Tooltip, { TooltipStyles } from './Tooltip';

type TransitionObject = {
  delay: number;
  duration: number;
  timingFunction: string;
};

export type TooltipStyles = {
  backgroundColor: Color;
  marginBottom: number;
  paddingX: number;
  paddingY: number;
  pointerW: number;
  pointerH: number;
  radius: lng.Tools.CornerRadius;
  textStyle: TextBoxStyles;
  transition: TransitionObject;
};

export default class Tooltip extends Base {
  title?: string;
  delayVisible?: number;
  timeVisible?: number;
  get style(): TooltipStyles;
  set style(v: StylePartial<TooltipStyles>);
}