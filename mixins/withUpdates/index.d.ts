import lng from '@lightningjs/core';

export interface WithUpdates {
  queueRequestUpdate();
  requestUpdate(force: boolean);
  logPropTable();
}

export type WithUpdatesConstructor<BaseType extends typeof lng.Component> =
  BaseType & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    new (...args: any[]): BaseType & WithUpdates;
  };

export default function withUpdates<BaseType extends typeof lng.Component>(
  base: BaseType
): WithUpdatesConstructor<BaseType>;
