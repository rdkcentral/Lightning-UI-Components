import React, { useState } from 'react';
import { ColorControl } from '@storybook/blocks';
import { updateComponentValue } from './componentUtils';
import { TableRow } from '../components';

/**
 *
 * @returns component style row with color control
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
          key="prop-2"
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
