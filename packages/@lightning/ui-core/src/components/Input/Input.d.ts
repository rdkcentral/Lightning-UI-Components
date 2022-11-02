import type { StylePartial } from '../../types/lui';
import type { ButtonStyles, Button, TextBoxStyles } from '@lightning/ui-core';

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
}
