import { SvgIconProps } from '@mui/material';
import { VideoClip16Filled as VideoClipIcon } from '@fluentui/react-icons';
import { IconButton } from '../buttons';
import { IconfontSizeSwitch } from '../../utils';


export const NowPlaying = ({ ...rest }: SvgIconProps & { disabled?: boolean }) => (
  <IconButton size="large" disabled={rest?.disabled}>
    <VideoClipIcon
      sx={{
        fontSize: IconfontSizeSwitch(rest?.fontSize),
      }}
      {...rest}
    />
  </IconButton>
);
