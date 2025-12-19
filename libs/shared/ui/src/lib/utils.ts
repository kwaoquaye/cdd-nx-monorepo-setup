
export const IconfontSizeSwitch = (
  size: 'inherit' | 'small' | 'medium' | 'large' | undefined
) => {    
  switch (size) {
    case 'small':
      return '16px';
    case 'medium':
      return '40px';
    case 'large':
      return '64px';
    default:
      return '16px';
  }
};