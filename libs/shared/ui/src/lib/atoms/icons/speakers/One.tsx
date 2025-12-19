import { SvgIconProps } from '@mui/material';
import { Speaker116Filled } from '@fluentui/react-icons';
import { IconButton } from '../../buttons';
import { IconfontSizeSwitch } from '../../../utils';


export const MediumVolumeIcon = ({ ...rest }: SvgIconProps & { disabled?: boolean }) => (
  <IconButton size="large" disabled={rest?.disabled}>
    <Speaker116Filled
      sx={{
        fontSize: IconfontSizeSwitch(rest?.fontSize),
      }}
      {...rest}
    />
  </IconButton>
);
