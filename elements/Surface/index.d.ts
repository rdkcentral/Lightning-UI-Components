import Base from '../../Base';
import { WithThemeStylesConstructor } from '../../mixins/withThemeStyles';
import { Tools } from '@lightningjs/core';

export interface SurfaceStyles {
  backgroundColorDisabled?: string;
  backgroundColorFocused?: string;
  backgroundColorUnfocused?: string;
  radius?: Tools.CornerRadius;
}

declare const Surface_base: WithThemeStylesConstructor<
  typeof Base,
  SurfaceStyles
>;

export default class Surface extends Surface_base {
  style?: SurfaceStyles;
}
