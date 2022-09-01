import lng from '@lightningjs/core';
import { SpeechType } from './mixins/withAnnouncer';
import { WithLayoutConstructor } from './mixins/withLayout';
import { WithThemeStylesConstructor } from './mixins/withThemeStyles';

declare const Base_base: WithThemeStylesConstructor<
  WithLayoutConstructor<typeof lng.Component>,
  Record<string, any>
>;

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
