import Base from '../../Base';
import { WithThemeStylesConstructor } from '../../mixins/withThemeStyles';
import { Tools } from '@lightningjs/core';

type transitionObject = {
  delay: number;
  duration: number;
  timingFunction: string;
};

export interface SurfaceStyles {
  animation?: transitionObject;
  backgroundColor?: string;
  radius?: Tools.CornerRadius;
  scale?: number;
}

declare const Surface_base: WithThemeStylesConstructor<
  typeof Base,
  SurfaceStyles
>;

export default class Surface extends Surface_base {
  style?: SurfaceStyles;
}
