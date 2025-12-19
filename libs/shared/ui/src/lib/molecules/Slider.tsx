import React from 'react';
import { Slider as MuiSlider } from '@mui/material';
// import { VolumeDown, VolumeUp } from 'libs/shared/ui/icons';

export interface SliderProps {
  value: number;
  max?: number;
  onChange?: (newValue: number) => void;
  size?: 'small' | 'medium';
  isDisabled?: boolean;
  showThumb?: boolean;
  sx?: Record<string, any>;
}

/**
 * A presentational slider for volume control, with optional thumb visibility.
 * Defaults to showing thumb. Extensible via `sx` for styling.
 * Domain-specific variations (e.g., paid/free user features) should be handled
 * in the domain layer with new components or logic.
 */
export const Slider: React.FC<SliderProps> = ({
  value,
  max = 100,
  onChange,
  size = 'small',
  isDisabled,
  showThumb = false,
  sx,
}) => {
  const handleChange = (event: Event, newValue: number | number[]) => {
    onChange?.(newValue as number);
  };

  return (
    <MuiSlider
      value={value}
      max={max}
      onChange={handleChange}
      size={size}
      // color=""
      sx={{
        height: '1px',
        '&:hover  .MuiSlider-track': {
          color: 'primary.main',
        },
        '&:hover  .MuiSlider-thumb': {
          display: 'block',
        },
        '& .MuiSlider-thumb': { display: showThumb ? 'block' : 'none' },
        ...sx,
      }}
      disabled={isDisabled}
    />
  );
};
