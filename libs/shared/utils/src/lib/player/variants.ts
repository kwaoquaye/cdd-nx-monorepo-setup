export const playerControlsVariants = {
  default: {
    playbackState: {
      isPlaying: false,
      currentTrack: {
        id: 'track1',
        title: 'Sample Track',
        artist: 'Sample Artist',
        duration: 180000
      },
      position: 30000,
      duration: 180000,
      volume: 50,
      shuffle: false,
      repeat: 'off' as 'off' | 'track' | 'context'
    },
    controls: {
      play: () => console.log('Play'),
      pause: () => console.log('Pause'),
      next: () => console.log('Next'),
      previous: () => console.log('Previous'),
      toggleShuffle: () => console.log('Toggle Shuffle'),
      toggleRepeat: () => console.log('Toggle Repeat'),
      seek: (position: number) => console.log(`Seek to ${position}`),
      setVolume: (volume: number) => console.log(`Set volume to ${volume}`)
    },
    compact: false,
    showVolumeControl: true,
    className: ''
  },
  compact: {
    playbackState: {
      isPlaying: true,
      currentTrack: {
        id: 'track2',
        title: 'Another Track',
        artist: 'Another Artist',
        duration: 240000
      },
      position: 60000,
      duration: 240000,
      volume: 75,
      shuffle: true,
      repeat: 'track' as 'off' | 'track' | 'context'
    },
    controls: {
      play: () => console.log('Play'),
      pause: () => console.log('Pause'),
      next: () => console.log('Next'),
      previous: () => console.log('Previous'),
      toggleShuffle: () => console.log('Toggle Shuffle'),
      toggleRepeat: () => console.log('Toggle Repeat'),
      seek: (position: number) => console.log(`Seek to ${position}`),
      setVolume: (volume: number) => console.log(`Set volume to ${volume}`)
    },
    compact: true,
    showVolumeControl: false,
    className: 'compact-player'
  },
  noTrack: {
    playbackState: {
      isPlaying: false,
      currentTrack: null,
      position: 0,
      duration: 0,
      volume: 0,
      shuffle: false,
      repeat: 'off' as 'off' | 'track' | 'context'
    },
    controls: {
      play: () => console.log('Play'),
      pause: () => console.log('Pause'),
      next: () => console.log('Next'),
      previous: () => console.log('Previous'),
      toggleShuffle: () => console.log('Toggle Shuffle'),
      toggleRepeat: () => console.log('Toggle Repeat'),
      seek: (position: number) => console.log(`Seek to ${position}`),
      setVolume: (volume: number) => console.log(`Set volume to ${volume}`)
    },
    compact: false,
    showVolumeControl: true,
    className: ''
  }
};