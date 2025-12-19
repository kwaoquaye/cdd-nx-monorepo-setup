import { SvgIconProps } from '@mui/material';
import { PlayCircle16Filled } from '@fluentui/react-icons';
import { IconButton } from '../buttons';
import { IconfontSizeSwitch } from '../../utils';


export const PlayArrow = ({ ...rest }: SvgIconProps & { disabled?: boolean }) => (
  <IconButton size="large" disabled={rest?.disabled}>
    <PlayCircle16Filled
      sx={{
        fontSize: IconfontSizeSwitch(rest?.fontSize),
      }}
      {...rest}
    />
  </IconButton>
);
