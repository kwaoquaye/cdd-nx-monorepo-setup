import React from 'react';
import {
  LoudVolumeIcon,
  NowPlaying,
  SingAlong,
  Slider,
} from '@pertunes/ui';
import { usePlayback } from './PlaybackContext';
import Stack from '@mui/material/Stack';

export const NowPlayingControls: React.FC<any> = () => {
  const { playbackState, controls } = usePlayback();
  const { volume, currentTrack } = playbackState;

  const noTrackSelected = false; //!currentTrack;

  return (
    <Stack direction={'row'} alignItems={'center'} gap={0}>
      <NowPlaying />
      <SingAlong />
      <LoudVolumeIcon />
      <Slider
        value={volume}
        onChange={controls.setVolume}
        isDisabled={noTrackSelected}
        sx={{
          width: '120px',
        }}
      />
    </Stack>
  );
};
