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

import React from 'react';
import { Icons, IconButton } from '@storybook/components';
import { convertNumToHexAlphaArray } from '../../utils/helpers';
import { utils } from '@lightningjs/ui-components';
import { DOWNLOAD_ID } from '../constants';

export default () => {
  const download = () => {
    console.log('Downloading LUI-Theme.json...');
    const context = document.querySelector('iframe').contentWindow.CONTEXT;
    const formattedTheme = JSON.parse(
      JSON.stringify(context.theme, (key, value) => {
        if (
          typeof value === 'number' &&
          /^[0-9]{10}$/g.test(value.toString())
        ) {
          return convertNumToHexAlphaArray(value);
        }
        return value;
      })
    );
    utils.downloadFile(
      formattedTheme,
      `LUI-Theme-${formattedTheme.name}.json`,
      'json'
    );
  };

  return (
    <IconButton
      key={DOWNLOAD_ID}
      title="Download LUI Theme JSON"
      onClick={download}
    >
      <Icons icon="download" />
    </IconButton>
  );
};
