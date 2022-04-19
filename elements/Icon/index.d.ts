import Base from '../../Base';
import { WithThemeStylesConstructor } from '../../mixins/withThemeStyles';

export interface IconStyles {
  color?: string;
}

declare const Icon_base: WithThemeStylesConstructor<typeof Base, IconStyles>;

export default class Icon extends Icon_base {
  icon: string;
}
