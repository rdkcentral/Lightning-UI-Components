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
import { AddonPanel, Button } from '@storybook/components';
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

// Components Style Panel should update styles via controls
// The updates should update the theme and carry over to other panels
// controls should not reset unless refresh of SB or rest controls button?

/**
 *
 * @returns rows of component styles controls
 */
const StyleFieldRows = () => {
  const defaultValue = 3;

  // TODO: map all styles to either Color or Number control
  return (
    <TableRow
      label="prop"
      key="prop-1"
      control={
        <NumberControl
          name="testProp"
          value={defaultValue}
          onChange={val =>
            // TODO: update prop value in control and in theme
            console.log(val)
          }
        />
      }
    />
  );
};

/**
 *
 * @returns row containing tone control
 */
const ToneRow = () => {
  let defaultvalue = 'neutral';
  return (
    <TableRow
      label="tone"
      key="Row-tones"
      control={
        <OptionsControl
          name="tones"
          key="Tones-one"
          type="inline-radio"
          value={defaultvalue}
          argType={{ options: ['neutral', 'inverse', 'brand'] }}
          onChange={val => {
            // TODO: update tone value in control and in theme
            console.log(val);
          }}
        />
      }
    />
  );
};

/**
 *
 * @returns table of component style props
 */

const ComponentStyleTable = () => {
  // TODO: make this one table
  return (
    <>
      <Table title="Component Level Theme Styles" rows={<StyleFieldRows />} />
      <Table title="Tone" rows={<ToneRow />} />
    </>
  );
};

const ResetButton = () => {
  return (
    <>
      <Button small outline label="buttonLabel" onClick={resetPanel}>
        Reset Panel
      </Button>
    </>
  );
};

// reset panel style to default
const resetPanel = () => {
  //TODO: create logic to reset styles
  return console.log('reset panel');
};

/**
 * @returns the full Component Style Panel add-on
 */
export default params => {
  return (
    <AddonPanel {...params}>
      <div className="component-styles-panel-wrapper">
        <h1>Current Theme</h1>
        <ResetButton />
        <ComponentStyleTable />
      </div>
    </AddonPanel>
  );
};
