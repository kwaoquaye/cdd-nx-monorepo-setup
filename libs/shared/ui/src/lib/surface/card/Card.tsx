import MuiCard, { CardProps } from '@mui/material/Card';

export const Card = ({ ...rest }: CardProps) => (
  <MuiCard {...rest} />
);