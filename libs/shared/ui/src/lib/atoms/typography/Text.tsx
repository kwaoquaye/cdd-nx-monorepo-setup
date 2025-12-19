import React from 'react';
import { Typography } from './Typography';
import { TypographyProps as MuiTypographyProps } from '@mui/material';
import { TypographyValues } from './text.variants';

type TypographyType = keyof typeof TypographyValues;

type TextProps = {
  type?: TypographyType;
  children?: React.ReactNode | string;
  color?: MuiTypographyProps['color'];
};

export const Text: React.FC<TextProps> = ({
  type = 'textMedium',
  children,
  color,
  ...rest
}) => {
  const styleProps = TypographyValues[type];
  return (
    <Typography {...styleProps} color={color} {...rest}>
      {children}
    </Typography>
  );
};
