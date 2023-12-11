import React, { useState } from 'react';
import { ColorControl } from '@storybook/blocks';
import { updateGlobalTheme } from '../../utils/themeUtils';
import { TableRow } from '../components';

// REVIEW: these two update functions are doing similar things, can they combined into one?
// used for both Number and Color component
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
 * @returns style row with color control
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
            // TODO: update prop value in control and in theme
            setValueState(val);
            updateComponentValue(componentName, styleProp, val, updateGlobals);
          }}
        />
      }
    />
  );
}
