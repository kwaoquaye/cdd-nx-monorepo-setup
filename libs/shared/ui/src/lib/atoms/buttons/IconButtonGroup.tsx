import React from 'react';
import { Box } from '../Box';

interface IconButtonConfig {
  Icon: any;
  onClick?: () => void;
  isActive?: boolean;
  isDisabled?: boolean;
  color?: 'default' | 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  sx?: Record<string, any>;
}

export interface IconButtonGroupProps {
  buttons: IconButtonConfig[];
  gap?: number;
  isDisabled?: boolean;
}

export const IconButtonGroup: React.FC<IconButtonGroupProps> = ({ buttons, gap = 1, isDisabled }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap }}>
      {buttons.map(({Icon, ...rest}, index) => (
        // <IconButton
        //   key={index}
        //   onClick={button.onClick}
        //   color={button.isActive ? 'primary' : button.color || 'default'}
        //   size={button.size || 'medium'}
        //   sx={button.sx}
        //   disabled={isDisabled || button.isDisabled}
        // >
        //   {button.icon}
        // </IconButton>
        <Icon {...rest} />
      ))}
    </Box>
  );
};