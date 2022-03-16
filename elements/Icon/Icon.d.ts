import type { Base } from '../../Base';

export interface IconStyles {
  color?: string;
}

export default class Icon extends Base {
  icon: string;
  style?: IconStyles;
}
