import lng from '@lightningjs/core';

export declare class Base extends lng.Component {
  _whenEnabled: Promise<void>;
  _getFocusScale(): number;
  _getUnfocusScale(): number;
  _update(): void;
  _focus(): void;
  _unfocus(): void;
  _smooth?: boolean;

  set announce(announce: string): void;
  get announce(): string;
}
