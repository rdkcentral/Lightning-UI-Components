import lng from '@lightningjs/core';
import { SpeechType } from './mixins/withAnnouncer/withAnnouncer';
import WithLayout from'./mixins/withLayout/withLayout';

export default class Base extends lng.Component implements WithLayout {
  static get __componentName(): string;
  _whenEnabled: Promise<void>; //TODO move this to withUpdates mixin def
  _update(): void;
  _smooth?: boolean;
  _disabled?: boolean;
  _announce?: SpeechType;
  _announceContext?: SpeechType;

  set announce(announce: SpeechType): void;
  get announce(): SpeechType;
  set announceContext(announce: SpeechType): void;
  get announceContext(): SpeechType;
}
