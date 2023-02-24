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
import { GRIDOVERLAY_ID } from '../constants';
import { BooleanControl, RangeControl } from '@storybook/components';
import { useGlobals } from '@storybook/api';
import { Table, TableRow } from '../components';

function Controls() {
  const [globalProps, updateGlobals] = useGlobals();
  if (!globalProps) {
    return <></>;
  }

  const gridName = 'GridOverlay-';
  const prefix = `${gridName}toggle-`;
  const propList = Object.keys(globalProps).filter(prop => {
    return prop.startsWith(prefix);
  });
  if (!propList) {
    return <></>;
  }

  let rows = [];
  const alpha = 'alpha';
  const alphaProp = gridName+alpha;
  if (globalProps[alphaProp]) {
    rows.push(
      <TableRow
        key={alpha}
        label={alpha}
        control={
          <RangeControl
            key={alphaProp}
            name={alpha}
            value={parseFloat(globalProps[alphaProp])}
            min={0}
            max={1}
            step={0.1}
            onChange={val => updateGlobals({ [alphaProp]: val.toString() })}
          />
        }
      />
    );
  }
  rows.push(...propList.map(prop => {
    const propName = prop.replace(prefix, '');
    return (
      <TableRow
        key={prop}
        label={propName}
        control={
          <BooleanControl
            key={prop}
            name={propName}
            value={globalProps[prop] === 'true'}
            onChange={val => updateGlobals({ [prop]: val.toString() })}
          />
        }
      />
    );
  }));
  return <>{rows}</>;
}

const GridOverlayPanel = ({ active }) => {
  return (
    <div
      className="grid-overlay-panel-wrapper"
      style={active ? {} : { display: 'none' }}
    >
      <div key={GRIDOVERLAY_ID} className="grid-overal-panel-controls">
        <Table
          title="Grid Overlay Controls"
          key={'controls'}
          rows={<Controls />}
        />
      </div>
    </div>
  );
};

export default params => {
  return <GridOverlayPanel key="GridOverlayPanel" active={params.active} />;
};
