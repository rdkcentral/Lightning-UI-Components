import lng from '@lightningjs/core';
import Base from '../Base';
import type { StylePartial } from '../../types/lui';

type inputStyleObject = {
  radius: lng.Tools.CornerRadius;
};

export type KeyboardStyle = {
  keySpacing: number;
  screenW: number;
  marginX: number;
  inputSpacing: number;
  inputStyle: inputStyleObject;
};

export default class Keyboard extends Base {
  centerKeyboard?: boolean;
  centerKeys?: boolean;
  formats?: lng.Component | Array<lng.Component>;
  keyComponent?: lng.Component;
  rowWrap?: boolean;
  get style(): KeyboardStyle;
  set style(v: StylePartial<KeyboardStyle>);
}
