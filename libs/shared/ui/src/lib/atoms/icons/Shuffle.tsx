import { SvgIconProps } from '@mui/material';
import { ArrowShuffle16Filled } from '@fluentui/react-icons';
import { IconButton } from '../buttons';
import { IconfontSizeSwitch } from '../../utils';


export const Shuffle = ({ ...rest }: SvgIconProps & { disabled?: boolean }) => (
  <IconButton size="large" disabled={rest?.disabled}>
    <ArrowShuffle16Filled
      sx={{
        fontSize: IconfontSizeSwitch(rest?.fontSize),
      }}
      {...rest}
    />
  </IconButton>
);
