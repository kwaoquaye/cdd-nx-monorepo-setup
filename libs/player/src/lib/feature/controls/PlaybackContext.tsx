import React, { createContext, useContext, useState } from 'react';
import { PlaybackState, PlaybackControls, Track } from './types';

interface PlaybackContextType {
  playbackState: PlaybackState;
  controls: PlaybackControls;
}

const PlaybackContext = createContext<PlaybackContextType | undefined>(undefined);

export const PlaybackProvider: React.FC<{ children: React.ReactNode; initialState?: Partial<PlaybackState> }> = ({
  children,
  initialState
}) => {
  const [playbackState, setPlaybackState] = useState<PlaybackState>({
    isPlaying: false,
    currentTrack: null,
    position: 0,
    duration: 0,
    volume: 50,
    shuffle: false,
    repeat: 'off',
    ...initialState
  });

  const controls: PlaybackControls = {
    play: () => {
      if (playbackState.currentTrack) {
        setPlaybackState((prev) => ({ ...prev, isPlaying: true }));
      }
    },
    pause: () => setPlaybackState((prev) => ({ ...prev, isPlaying: false })),
    next: () => {
      if (playbackState.currentTrack) {
        // Simulate next track
        setPlaybackState((prev) => ({
          ...prev,
          currentTrack: { ...prev.currentTrack!, id: 'next-track', title: 'Next Track' }
        }));
      }
    },
    previous: () => {
      if (playbackState.currentTrack) {
        // Simulate previous track
        setPlaybackState((prev) => ({
          ...prev,
          currentTrack: { ...prev.currentTrack!, id: 'prev-track', title: 'Previous Track' }
        }));
      }
    },
    toggleShuffle: () => setPlaybackState((prev) => ({ ...prev, shuffle: !prev.shuffle })),
    toggleRepeat: () => {
      const nextRepeat = playbackState.repeat === 'off' ? 'context' : playbackState.repeat === 'context' ? 'track' : 'off';
      setPlaybackState((prev) => ({ ...prev, repeat: nextRepeat }));
    },
    seek: (position: number) => {
      if (position >= 0 && position <= playbackState.duration) {
        setPlaybackState((prev) => ({ ...prev, position }));
      }
    },
    setVolume: (volume: number) => {
      const clampedVolume = Math.max(0, Math.min(100, volume)); // Business rule: clamp volume
      setPlaybackState((prev) => ({ ...prev, volume: clampedVolume }));
    }
  };

  return (
    <PlaybackContext.Provider value={{ playbackState, controls }}>
      {children}
    </PlaybackContext.Provider>
  );
};

export const usePlayback = (): PlaybackContextType => {
  const context = useContext(PlaybackContext);
  if (!context) {
    throw new Error('usePlayback must be used within a PlaybackProvider');
  }
  return context;
};