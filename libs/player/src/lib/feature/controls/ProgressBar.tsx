import React from 'react';
import {  Slider, TimeTrack } from '@pertunes/ui';
import { usePlayback } from './PlaybackContext';
import { Box } from '@mui/material';

export const ProgressBar: React.FC = () => {
  const { playbackState, controls } = usePlayback();
  const { volume, currentTrack } = playbackState;

  return (
    <Box sx={{ width: '100%' }}>
      <TimeTrack startTime="00:00" endTime="01:00">
        <Slider
          value={volume}
          onChange={controls.setVolume}
          isDisabled={false}
          showThumb={false}
        />
      </TimeTrack>
    </Box>
  );
};
