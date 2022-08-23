import lng from '@lightningjs/core';
import { SpeechType } from './mixins/withAnnouncer';
import { WithLayoutConstructor } from './mixins/withLayout';

declare const Base_base: WithLayoutConstructor<typeof lng.Component>;

export default class Base extends Base_base {
  static get __componentName(): string;
  _whenEnabled: Promise<void>; //TODO move this to withUpdates mixin def
  _update(): void;
  _smooth?: boolean;
  _announce?: SpeechType;
  _announceContext?: SpeechType;

  set announce(announce: SpeechType);
  get announce(): SpeechType;
  set announceContext(announce: SpeechType);
  get announceContext(): SpeechType;
}
