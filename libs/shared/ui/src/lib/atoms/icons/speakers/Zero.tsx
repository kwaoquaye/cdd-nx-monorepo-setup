import { SvgIconProps } from '@mui/material';
import { Speaker016Filled } from '@fluentui/react-icons';
import { IconButton } from '../../buttons';
import { IconfontSizeSwitch } from '../../../utils';


export const LowVolumeIcon = ({ ...rest }: SvgIconProps & { disabled?: boolean }) => (
  <IconButton size="large" disabled={rest?.disabled}>
    <Speaker016Filled
      sx={{
        fontSize: IconfontSizeSwitch(rest?.fontSize),
      }}
      {...rest}
    />
  </IconButton>
);
