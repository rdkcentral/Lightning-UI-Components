export type SpeechType =
  | string
  | Array<SpeechType>
  | Promise<SpeechType>
  | (() => SpeechType);

export type SpeakFunction = (toSpeak: SpeechType) => any;

export interface WithAnnouncerOptions {
  voiceOutDelay: number;
}

export interface AnnounceOptions {
  append: boolean;
  notification: boolean;
}

export interface WithAnnouncer {
  announcerEnabled: boolean;
  announcerTimeout: number;

  set announcerEnabled(val: boolean): void;
  get announcerEnabled(): boolean;

  _voiceOut(toAnnounce: string): void;
  _focusChange(): void;
  _announceFocusChanges(): void;

  $announce: (announcement: SpeechType, options?: AnnounceOptions) => void;
  $announcerCancel: () => void;
  $announcerRefresh: () => void;
}

export interface WithAnnouncerConstructor {
  new (...args: any[]): WithAnnouncer;
}

export default function withAnnouncer<T>(
  base: T,
  speak?: SpeakFunction,
  options?: WithAnnouncerOptions
): T & WithAnnouncerConstructor;
