import Button, { ButtonStyles } from '../Button';
import type { StylePartial } from '../../types/lui';

type SizeObject = {
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
};

export type KeyStyles = ButtonStyles & {
  h: number;
  sizes: SizeObject;
};

export default class Key extends Button {
  icon?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  toggle: string;
  get style(): KeyStyles;
  set style(v: StylePartial<KeyStyles>);
}
