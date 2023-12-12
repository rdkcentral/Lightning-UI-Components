import React, { useState } from 'react';
import { ColorControl } from '@storybook/blocks';
import { updateGlobalTheme } from '../../utils/themeUtils';
import { TableRow } from '../components';

// TODO: move to universal location, used for both Number and Color component
const updateComponentValue = (
  componentName,
  styleProp,
  value,
  updateGlobals
) => {
  updateGlobalTheme(
    {
      componentConfig: {
        [componentName]: {
          style: { [styleProp]: value }
        }
      }
    },
    updateGlobals
  );
};

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
