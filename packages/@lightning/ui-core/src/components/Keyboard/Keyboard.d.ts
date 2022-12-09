import lng from '@lightningjs/core';
import Base from '../Base';
import type { StylePartial } from '../../types/lui';

export type KeyboardStyles = {
  spacing: number;
};

export default class Keyboard extends Base {
  centerKeyboard?: boolean;
  centerKeys?: boolean;
  formats?: lng.Component | Array<lng.Component>;
  rowWrap?: boolean;
  get style(): KeyboardStyles;
  set style(v: StylePartial<KeyboardStyles>);
}
