import { SvgIconProps } from '@mui/material';
import { SpeakerMute16Filled } from '@fluentui/react-icons';
import { IconButton } from '../../buttons';
import { IconfontSizeSwitch } from '../../../utils';


export const MuteIcon = ({ ...rest }: SvgIconProps & { disabled?: boolean }) => (
  <IconButton size="large" disabled={rest?.disabled}>
    <SpeakerMute16Filled
      sx={{
        fontSize: IconfontSizeSwitch(rest?.fontSize),
      }}
      {...rest}
    />
  </IconButton>
);
