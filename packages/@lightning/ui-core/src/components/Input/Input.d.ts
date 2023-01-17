import lng from '@lightningjs/core';
import { ButtonStyles, Button, TextBoxStyles } from '@lightning/ui-core';
import { StylePartial } from '../../types/lui';

export type InputStyles = ButtonStyles & {
  cursorStyles: object;
  eyebrowTextStyle: TextBoxStyles;
  helpTextStyle: TextBoxStyles;
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
  get style(): InputStyles;
  set style(v: StylePartial<InputStyles>);

  // tags
  get _Eyebrow(): lng.Component;
  get _HelpText(): lng.Component;
  get _Cursor(): lng.Component;
  get _HiddenContent(): lng.Component;
}
