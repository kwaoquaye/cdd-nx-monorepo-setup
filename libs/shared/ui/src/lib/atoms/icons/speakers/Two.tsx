import { SvgIconProps } from '@mui/material';
import { Speaker216Filled } from '@fluentui/react-icons';
import { IconButton } from '../../buttons';
import { IconfontSizeSwitch } from '../../../utils';


export const LoudVolumeIcon = ({ ...rest }: SvgIconProps & { disabled?: boolean }) => (
  <IconButton size="large" disabled={rest?.disabled}>
    <Speaker216Filled
      sx={{
        fontSize: IconfontSizeSwitch(rest?.fontSize),
      }}
      {...rest}
    />
  </IconButton>
);
