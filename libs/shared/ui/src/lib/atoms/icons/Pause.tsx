import { SvgIconProps } from '@mui/material';
import { PauseCircle16Filled } from '@fluentui/react-icons';

import { IconButton } from '../buttons';
import { IconfontSizeSwitch } from '../../utils';


export const Pause = ({ ...rest }: SvgIconProps & { disabled?: boolean }) => (
  <IconButton size="large" disabled={rest?.disabled}>
    <PauseCircle16Filled
      sx={{
        fontSize: IconfontSizeSwitch(rest?.fontSize),
      }}
      {...rest}
    />
  </IconButton>
);
