import type { Base } from '../../Base';

declare class RadioStyles {
    strokeColor?: string;
    knobColor?: string;
    backgroundColor?: string;
    backgroundColorOff?: string;
    backgroundColorInactive?: string;
    strokeColorInactive?: string;
    radius?: number;
    strokeWidth?: number;
    knobHeight?: number;
    knobWidth?: number;
}
export declare class Radio extends Base {
    checked?: boolean;
    isInactive?: boolean;
    style?: RadioStyles;
 }  