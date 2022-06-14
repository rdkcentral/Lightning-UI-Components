import Base from '../../Base';
import { WithThemeStylesConstructor } from '../../mixins/withThemeStyles';

type transitionObject = {
  delay: number;
  duration: number;
  timingFunction: string;
};

export interface TooltipStyles {
  radius: number;
  textStyle: string;
  marginBottom: number;
  paddingY: number;
  paddingX: number;
  pointerW: number;
  pointerH: number;
  transition: transitionObject;
  backgroundColor: string;
  textColor: string;
}

declare const Tooltip_base: WithThemeStylesConstructor<typeof Base, Tooltip>;

export default class Tooltip extends Base {
  title?: string;
  delayVisible?: number;
  timeVisible?: number;
}
