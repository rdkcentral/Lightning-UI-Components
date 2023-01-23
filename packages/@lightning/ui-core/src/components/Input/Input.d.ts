import lng from '@lightningjs/core';
import { ButtonStyle, Button, TextBoxStyle } from '@lightning/ui-core';
import { StylePartial } from '../../types/lui';

export type InputStyle = ButtonStyle & {
  cursorStyle: object;
  eyebrowTextStyle: TextBoxStyle;
  helpTextStyle: TextBoxStyle;
  minWidth: number;
  paddingX: number;
  paddingY: number;
};

export default class Input extends Button {
  actualTitle?: string;
  cursor: string;
  eyebrow?: string;
  helpText?: string;
  listening: boolean;
  mask?: string;
  password?: boolean;
  position?: number;
  get style(): InputStyle;
  set style(v: StylePartial<InputStyle>);

  // tags
  get _Eyebrow(): lng.Component;
  get _HelpText(): lng.Component;
  get _Cursor(): lng.Component;
  get _HiddenContent(): lng.Component;
}
