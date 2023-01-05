import lng from '@lightningjs/core';

export interface WithExtensions {
  get _withExtensionsApplied(): boolean;
  get _prototypeChain(): Set<string>;
  get _extensions(): Record<string, any>[];
  get _componentExtensions(): unknown[];
  get _extensionsApplied(): boolean;

  _resetComponent(): void;
  _calculateComponentExtensionLength(): number;
  _createExtension(): void;
  _createExtensionClass(): unknown;
  _createExtensionAliases(obj: Record<string, any>): object;
  _setComponentAliases(aliasObj: Record<string, any>): void;
}

export interface WithExtensionsConstructor {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  new (...args: any[]): WithExtensions;
}

export default function withExtensions<BaseType extends typeof lng.Component>(
  base: BaseType
): BaseType & WithExtensionsConstructor;
