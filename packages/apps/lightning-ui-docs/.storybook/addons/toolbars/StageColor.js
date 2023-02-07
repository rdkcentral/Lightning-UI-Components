import React, { useCallback } from 'react';
import { useGlobals } from '@storybook/api';
import { Icons, IconButton } from '@storybook/components';
import { STAGECOLOR_ID } from '../../constants';

export default () => {
  const [{ stageColor }, updateGlobals] = useGlobals();

  const toggleStage = useCallback(
    () =>
      updateGlobals({
        stageColor: !stageColor
      }),
    [stageColor]
  );

  return (
    <IconButton
      key={STAGECOLOR_ID}
      active={stageColor}
      title="Swich stage color"
      onClick={toggleStage}
    >
      <Icons icon="paintbrush" />
    </IconButton>
  );
};
