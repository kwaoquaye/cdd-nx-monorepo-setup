import React from 'react';
import { Box, Typography, Paper, IconButton } from '@mui/material';
import { Close, OpenInFull } from '@mui/icons-material';
import { PlaybackState, PlaybackControls } from '@libs/player/data-access/playback';
import { PlayerControls } from '@libs/player/feature/controls';
import { TrackInfo } from '@pertunes/ui/molecules';

export interface MiniPlayerProps {
  playbackState: PlaybackState;
  controls: PlaybackControls;
  onExpand?: () => void;
  onClose?: () => void;
  position?: 'fixed' | 'relative';
  className?: string;
}

export const MiniPlayer: React.FC<MiniPlayerProps> = ({
  playbackState,
  controls,
  onExpand,
  onClose,
  position = 'fixed',
  className
}) => {
  const { currentTrack } = playbackState;

  if (!currentTrack) {
    return null;
  }

  return (
    <Paper
      elevation={8}
      className={className}
      sx={{
        position,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1200,
        display: 'flex',
        alignItems: 'center',
        padding: 2,
        backgroundColor: 'background.paper',
        borderRadius: position === 'fixed' ? 0 : 1,
        borderTop: '1px solid',
        borderColor: 'divider'
      }}
    >
      {/* Track Info */}
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <TrackInfo
          track={currentTrack}
          showArtwork={true}
          artworkSize={56}
          showAlbum={false}
        />
      </Box>

      {/* Player Controls */}
      <Box sx={{ flex: 2, display: 'flex', justifyContent: 'center' }}>
        <PlayerControls
          playbackState={playbackState}
          controls={controls}
          compact={true}
          showVolumeControl={false}
        />
      </Box>

      {/* Actions */}
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
        {onExpand && (
          <IconButton onClick={onExpand} size="small">
            <OpenInFull />
          </IconButton>
        )}
        {onClose && (
          <IconButton onClick={onClose} size="small">
            <Close />
          </IconButton>
        )}
      </Box>
    </Paper>
  );
};