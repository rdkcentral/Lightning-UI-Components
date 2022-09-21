import Base from '../../Base';
import { WithThemeStylesConstructor } from '../../mixins/withThemeStyles';
import lng from '@lightningjs/core';

type transitionObject = {
  delay: number;
  duration: number;
  timingFunction: string;
};

export interface TooltipStyles {
  backgroundColor: string;
  marginBottom: number;
  paddingX: number;
  paddingY: number;
  pointerW: number;
  pointerH: number;
  radius?: lng.Tools.CornerRadius;
  textStyle: string;
  transition: transitionObject;
}

declare const Tooltip_base: WithThemeStylesConstructor<typeof Base, Tooltip>;

export default class Tooltip extends Base {
  title?: string;
  delayVisible?: number;
  timeVisible?: number;
}
