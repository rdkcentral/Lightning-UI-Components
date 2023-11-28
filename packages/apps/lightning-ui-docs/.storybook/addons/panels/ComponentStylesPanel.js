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

import React, { useState, useEffect } from 'react';
import { useGlobals } from '@storybook/manager-api';
import { AddonPanel } from '@storybook/components';
import { OptionsControl, ColorControl, NumberControl } from '@storybook/blocks';
import { Table, TableRow, NumberRow } from '../components';
import { utils } from '@lightningjs/ui-components/src';
import debounce from 'debounce';

import {
  globalApp,
  globalContext,
  globalTheme,
  updateGlobalTheme
} from '../../utils/themeUtils';

const StyleFieldRows = () => {
  const defaultValue = 3;
  return (
    <TableRow
      label="prop"
      key="prop-1"
      control={
        <NumberControl
          name="testProp"
          value={defaultValue}
          onChange={val => console.log(val)}
        />
      }
    />
  );
};

const ToneRow = () => {
  let tone = 'neutral';
  return (
    <TableRow
      label="tone"
      key="Row-tones"
      control={
        <OptionsControl
          name="tones"
          key="Tones-one"
          type="inline-radio"
          value={tone}
          argType={{ options: ['neutral', 'inverse', 'brand'] }}
          onChange={val => {
            console.log(val);
          }}
        />
      }
    />
  );
};

const ComponentStyleTable = () => {
  return (
    <Table
      title="Component Level Theme Styles"
      rows={((<ToneRow />), (<StyleFieldRows />))}
    />
  );
};

export default params => {
  return (
    <AddonPanel {...params}>
      <div className="component-styles-panel-wrapper">
        <h1>Current Theme</h1>
        <ComponentStyleTable />
      </div>
    </AddonPanel>
  );
};
