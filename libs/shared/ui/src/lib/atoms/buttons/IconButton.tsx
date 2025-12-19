import MuiIconButton, { IconButtonProps } from '@mui/material/IconButton';

export interface IconButtonConfig extends IconButtonProps {
  icon?: React.ReactNode;
  onClick?: () => void;
  isActive?: boolean;
  isDisabled?: boolean;
  color?: 'default' | 'primary' | 'secondary' | 'inherit';
  size?: 'small' | 'medium' | 'large';
}

export const IconButton = ({ children, ...rest }: IconButtonConfig) => (
  <MuiIconButton
    sx={{
      '&.Mui-disabled': {
        opacity: 0.5,
        pointerEvents: 'initial',
        cursor: 'not-allowed',
      },
      '& .MuiSvgIcon-fontSizeLarge': {
        width: '1em',
        height: '1em',
      },
      backgroundColor: 'gray',
      marginInline: '2px',
      '&:hover': {
        backgroundColor: 'darkgray',
      },
    }}
    {...rest}
  >
    {children}
  </MuiIconButton>
);
