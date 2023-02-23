import lng from '@lightningjs/core';
import { AbbreviationConfig } from './abbreviations';
export { generateAbbrevConfig, defaultAbbrevConfig } from './abbreviations';

export type SpeechType =
  | string
  | undefined
  | Array<SpeechType>
  | Promise<SpeechType>
  | (() => SpeechType);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SpeakFunction = (toSpeak: SpeechType) => any;

export interface WithAnnouncerOptions {
  voiceOutDelay?: number;
  abbreviationsConfig?: AbbreviationConfig;
}

export interface AnnounceOptions {
  append: boolean;
  notification: boolean;
}

export interface WithAnnouncer {
  announcerTimeout: number;

  set announcerEnabled(val: boolean);
  get announcerEnabled(): boolean;

  _voiceOut(toAnnounce: SpeechType): void;
  _focusChange(): void;
  _announceFocusChanges(): void;

  $announce: (announcement: SpeechType, options?: AnnounceOptions) => void;
  $announcerCancel: () => void;
  $announcerRefresh: () => void;
}

export interface WithAnnouncerConstructor {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  new (...args: any[]): WithAnnouncer;
}

export default function withAnnouncer<T extends typeof lng.Component>(
  base: T,
  speak?: SpeakFunction,
  options?: WithAnnouncerOptions
): T & WithAnnouncerConstructor;
