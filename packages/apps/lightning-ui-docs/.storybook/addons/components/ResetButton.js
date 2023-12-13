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

  /**
   * when Reset Styles button is clicked should reset panel back to base/original? theme props
   */
  const handleReset = () => {
    //TODO: create logic to reset styles in rows
    //FIXME: this resets just the name, needs to reset component prop values too
    return updateGlobals({ LUITheme: 'base' });
  };

  return (
    <>
      <Button small outline label="reset-panel" onClick={handleReset}>
        Reset Styles
      </Button>
    </>
  );
}
