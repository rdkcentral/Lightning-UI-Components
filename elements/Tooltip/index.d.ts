import Base from '../../Base';
import { WithThemeStylesConstructor } from '../../mixins/withThemeStyles';
import type { Tools } from '@lightningjs/core';

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
  radius?: Tools.CornerRadius;
  textStyle: string;
  transition: transitionObject;
}

declare const Tooltip_base: WithThemeStylesConstructor<typeof Base, Tooltip>;

export default class Tooltip extends Base {
  title?: string;
  delayVisible?: number;
  timeVisible?: number;
}
