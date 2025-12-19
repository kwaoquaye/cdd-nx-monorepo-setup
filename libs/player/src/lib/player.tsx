import { PlayerControls } from './feature/controls';


export const PertunesPlayer = () => {
  return (
    <>
      <PlayerControls
        className=""
        // controls={{
        //   next: () => {},
        //   pause: () => {},
        //   play: () => {},
        //   previous: () => {},
        //   seek: () => {},
        //   setVolume: () => {},
        //   toggleRepeat: () => {},
        //   toggleShuffle: () => {},
        // }}
        playbackState={{
          currentTrack: {
            artist: 'Sample Artist',
            duration: 180000,
            id: 'track1',
            title: 'Sample Track',
          },
          duration: 180000,
          isPlaying: false,
          position: 30000,
          repeat: 'off',
          shuffle: false,
          volume: 50,
        }}
        showVolumeControl
      />
    </>
  );
};

export default PertunesPlayer;
