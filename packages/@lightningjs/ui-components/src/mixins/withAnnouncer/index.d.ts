/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

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
