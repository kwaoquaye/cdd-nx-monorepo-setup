import { SvgIconProps } from '@mui/material';
import { ArrowRepeatAll16Filled } from '@fluentui/react-icons';
import { IconButton } from '../buttons';
import { IconfontSizeSwitch } from '../../utils';


export const Repeat = ({ ...rest }: SvgIconProps & { disabled?: boolean }) => (
  <IconButton size="large" disabled={rest?.disabled}>
    <ArrowRepeatAll16Filled
      sx={{
        fontSize: IconfontSizeSwitch(rest?.fontSize),
      }}
      {...rest}
    />
  </IconButton>
);
