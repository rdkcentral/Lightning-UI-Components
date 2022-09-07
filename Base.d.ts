import lng from '@lightningjs/core';
import { SpeechType } from './mixins/withAnnouncer';
import { WithHandleKeyConstructor } from './mixins/withHandleKey';
import { WithLayoutConstructor } from './mixins/withLayout';
import { WithTagsConstructor } from './mixins/withTags';
import { WithUpdatesConstructor } from './mixins/withUpdates';
import { WithThemeStylesConstructor } from './mixins/withThemeStyles';

declare const Base_base: WithLayoutConstructor<
  WithThemeStylesConstructor<
    WithUpdatesConstructor<
      WithTagsConstructor<WithHandleKeyConstructor<typeof lng.Component>>
    >,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Record<string, any>
  >
>;

export default class Base extends Base_base {
  static get __componentName(): string;
  static get properties(): Array<string>;
  static get tags(): Array<string>;

  protected _whenEnabled: Promise<void>; //TODO move this to withUpdates mixin def
  protected _update(): void;
  protected _resetLoadedPromise(): void;
  protected _smooth?: boolean;
  protected _announce?: SpeechType;
  protected _announceContext?: SpeechType;

  set announce(announce: SpeechType);
  get announce(): SpeechType;
  set announceContext(announce: SpeechType);
  get announceContext(): SpeechType;

  skipPlinko?: boolean;
  extraItemSpacing?: number;

  isFullyOnScreen(): boolean;
}
