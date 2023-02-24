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
import MetadataBase, { MetadataBaseStyle } from '../MetadataBase';
import Provider, { ProviderStyle } from '../Provider';
import { TextBoxStyle } from '../TextBox';
import type { StylePartial } from '../../types/lui';

export type MetadataCardContentStyle = MetadataBaseStyle & {
  detailsTextStyle: TextBoxStyle;
  providerStyle: ProviderStyle;
};

export default class MetadataCardContent extends MetadataBase {
  details?: string;
  provider?: Provider;
  get style(): MetadataCardContentStyle;
  set style(v: StylePartial<MetadataCardContentStyle>);

  // tags
  get _Text(): lng.Component;
  get _Title(): lng.Component;
  get _Description(): lng.Component;
  get _DetailsWrapper(): lng.Component;
  get _DetailsFader(): lng.Component;
  get _Details(): lng.Component;
  get _Provider(): lng.Component;
}
