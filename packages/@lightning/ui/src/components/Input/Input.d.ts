import Button, { ButtonStyles } from '../../elements/Button';
import type { StylePartial } from '../../types/lui';
import type { TextBoxStyles } from '../../elements/TextBox';

export type InputStyles = ButtonStyles & {
  cursorStyles: Record<string, unknown>;
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
