import lng from '@lightningjs/core';

export type WithMarqueeSyncConstructor<BaseType extends typeof lng.Component> =
  BaseType & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    new (...args: any[]): BaseType;
    _cleanupSyncValues(): void;
    _updateSignals(): void;
    _willMarquee(): void;
    get _shouldSync(): boolean;
  };

export default function withMarqueeSync<BaseType extends typeof lng.Component>(
  base: BaseType
): WithMarqueeSyncConstructor<BaseType>;
