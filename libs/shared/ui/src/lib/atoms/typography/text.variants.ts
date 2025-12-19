
export const TypographyValues = {
  textMedium: {
    variant: 'body1',
  } as const,
  textMediumBold: {
    variant: 'body1',
    fontWeight: 'bold',
  } as const,
  textMediumItalic: {
    variant: 'body1',
    fontStyle: 'italic',
  } as const,
  textSmall: {
    variant: 'body2',
  } as const,
  textXSmall: {
    variant: 'caption',
    fontWeight: '100',
  } as const,
  headingLarge: {
    variant: 'h1',
    // fontWeight: 'bold',
    // fontSize: '2rem',
  } as const,
  headingMedium: {
    variant: 'h4',
    // fontWeight: 'bold',
    // fontSize: '1.5rem',
  } as const,
  headingSmall: {
    variant: 'h6',
    // fontWeight: 'bold',
    // fontSize: '1.25rem',
  } as const,
};