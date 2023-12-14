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

import React, { useState } from 'react';
import { NumberControl } from '@storybook/blocks';
import { updateComponentValue } from './componentUtils';
import TableRow from './TableRow';

/**
 * @returns a style row with a number control
 */

export default function NumberRow({
  version,
  styleProp,
  defaultValue,
  componentName,
  updateGlobals
}) {
  const [fieldValue, setValueState] = useState(defaultValue);

  return (
    <TableRow
      label={styleProp}
      control={
        <NumberControl
          name={styleProp}
          value={fieldValue}
          onChange={val => {
            setValueState(val);
            updateComponentValue(componentName, styleProp, val, updateGlobals);
          }}
        />
      }
    />
  );
}
