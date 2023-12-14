import React, { useState } from 'react';
import { ColorControl } from '@storybook/blocks';
import { updateComponentValue } from './componentUtils';
import { TableRow } from '../components';

/**
 *  @returns a component style row with a Color control
 */
export default function ColorRow({
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
        <ColorControl
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
