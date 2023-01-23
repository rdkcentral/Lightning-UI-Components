import Button, { ButtonStyle } from '../Button';
import type { StylePartial } from '../../types/lui';

type SizeObject = {
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
};

export type KeyStyle = ButtonStyle & {
  h: number;
  sizes: SizeObject;
};

export default class Key extends Button {
  icon?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  toggle: string;
  get style(): KeyStyle;
  set style(v: StylePartial<KeyStyle>);
}
