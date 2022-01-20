import lng from '@lightningjs/core';

export declare class Base extends lng.Component {
  static __componentName(): string;
  _whenEnabled: Promise<void>; //TODO move this to withUpdates mixin def
  _update(): void;
  _smooth?: boolean;

  set announce(announce: string): void;
  get announce(): string;
}
