import { ButtonSmall } from '../Button';
import { Tools } from '@lightningjs/core';

type logoStylesObject = {
  radius?: Tools.CornerRadius;
  h?: number;
  w?: number;
};

export interface ControlStyles {
  h?: number;
  iconStyles?: object;
  logoStyles?: logoStylesObject;
  radius?: Tools.CornerRadius;
}

export default class Control extends ButtonSmall {
  icon?: string;
  logo?: string;
  shouldCollapse?: boolean;
}

export class ControlSmall extends Control {}
