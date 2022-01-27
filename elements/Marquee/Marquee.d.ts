import type { Base } from '../../Base';

declare class MarqueeStyles{
    fadeW?: number;
    shouldSmooth?: boolean;
    offset?: number;
}
export declare class Marquee extends Base {
    title?: string;
    contentTexture?: Record<string, any>;
    centerAlign?: boolean;
    autostart?: boolean;
    color?: string;
    delay?: number;
    repeat?: number;
    style?: MarqueeStyles;
} 