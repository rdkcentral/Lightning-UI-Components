import React, { useState } from 'react';
import { TableRow } from '../components';
import { OptionsControl } from '@storybook/blocks';
import { updateGlobalTheme } from '../../utils/themeUtils';

// used for Tone component
const updateToneValue = (componentName, value, updateGlobals) => {
  updateGlobalTheme(
    {
      componentConfig: {
        [componentName]: {
          tone: value
        }
      }
    },
    updateGlobals
  );
};

/**
 *
 * @returns row containing tone control
 */
export default function ToneRow({ defaultTone, componentName, updateGlobals }) {
  const [toneState, setToneState] = useState(defaultTone);

  return (
    <TableRow
      label="tone"
      control={
        <OptionsControl
          name="tones"
          key="Tones-one"
          type="inline-radio"
          value={toneState}
          argType={{ options: ['neutral', 'inverse', 'brand'] }}
          onChange={val => {
            setToneState(val);
            updateToneValue(componentName, val, updateGlobals);
          }}
        />
      }
    />
  );
}
