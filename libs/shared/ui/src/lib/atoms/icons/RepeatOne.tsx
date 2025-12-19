import { SvgIconProps } from '@mui/material';
import { ArrowRepeat116Filled } from '@fluentui/react-icons';
import { IconButton } from '../buttons';
import { IconfontSizeSwitch } from '../../utils';

export const RepeatOne = ({
  ...rest
}: SvgIconProps & { disabled?: boolean }) => (
  <IconButton size="large" disabled={rest?.disabled}>
    <ArrowRepeat116Filled
      sx={{
        fontSize: IconfontSizeSwitch(rest?.fontSize),
      }}
      {...rest}
    />
  </IconButton>
);
