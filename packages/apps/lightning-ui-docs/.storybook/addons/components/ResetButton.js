import React from 'react';
import { useGlobals } from '@storybook/manager-api';
import { Button } from '@storybook/components';

// TODO: add style to button to properly align in table
// NOTE: New Feature to mimic controls panel reset button
/**
 * @returns a reset button that when clicked will reset component style panel back to default style props of component base on theme
 */

export default function ResetButton() {
  const [{ LUITheme }, updateGlobals] = useGlobals();

  const resetPanel = rows => {
    //TODO: create logic to reset styles in rows
    //NOTE: this resets just the name
    return updateGlobals({ LUITheme: 'base' });
  };
  return (
    <>
      <Button small outline label="reset-panel" onClick={resetPanel}>
        Reset Styles
      </Button>
    </>
  );
}
