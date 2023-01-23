import lng from '@lightningjs/core';
import Base from '../Base';
import type { StylePartial } from '../../types/lui';

type inputStyleObject = {
  radius: lng.Tools.CornerRadius;
};

export type KeyboardInputStyle = {
  keySpacing: number;
  screenW: number;
  marginX: number;
  inputSpacing: number;
  inputStyles: inputStyleObject;
};

export default class KeyboardInput extends Base {
  centerKeyboard?: boolean;
  defaultFormat?: string;
  input?: Record<string, unknown>;
  keyboardType?: lng.Component; // use this prop to specify which keyboard to use (KeyboardQwerty, KeyboardEmail, etc)
  get style(): KeyboardInputStyle;
  set style(v: StylePartial<KeyboardInputStyle>);
}
