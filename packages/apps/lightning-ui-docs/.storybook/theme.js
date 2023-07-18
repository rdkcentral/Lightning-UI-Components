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

import { create, themes } from '@storybook/theming/create';
import brand from './brand.png';
import { version } from '../../../@lightningjs/ui-components/package.json'; // TODO: follow up on this temp fix to get the import to work

export default create({
  ...themes.dark,
  base: 'dark',
  brandTitle: `Lightning UI Components v${version}`,
  brandUrl: 'https://github.com/rdkcentral/Lightning-UI-Components',
  brandImage: brand
});
