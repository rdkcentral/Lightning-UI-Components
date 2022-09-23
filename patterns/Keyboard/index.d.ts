import lng from '@lightningjs/core';
import Base from '../../Base';
import { WithThemeStylesConstructor } from '../../mixins/withThemeStyles';

export interface KeyboardStyles {
  spacing: number;
}

declare const Keyboard_base: WithThemeStylesConstructor<
  typeof Base,
  KeyboardStyles
>;

export default class Keyboard extends Keyboard_base {
  centerAlign?: boolean;
  formats?: object | Array<lng.Component>;
  rowWrap?: boolean;
}
