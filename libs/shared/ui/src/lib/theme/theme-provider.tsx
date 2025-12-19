import type { ThemeProviderProps as MuiThemeProviderProps } from '@mui/material/styles';

import CssBaseline from '@mui/material/CssBaseline';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import { ThemeProvider as ThemeVarsProvider } from '@mui/material/styles';

import { ThemeOptions } from './types';
import { createTheme } from '@mui/material/styles';

// ----------------------------------------------------------------------

const baseTheme = {
  palette: {
    primary: {
      main: '#1DB954', // Spotify green
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#191414', // Dark background
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#121212', // Spotify dark mode background
      paper: '#181818',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B3B3B3',
    },
  },
  typography: {
    fontFamily: 'Circular, Helvetica, Arial, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
};

export type ThemeProviderProps = Omit<MuiThemeProviderProps, 'theme'> & {
  /**
   * Optional theme overrides to customize the default theme.
   */
  themeOverrides?: ThemeOptions;

  /**
   * Optionally scope CSS normalization tool `<CssBaseline />` to a container rather than the document.
   * This is useful for preventing style collisions in a microfrontend environment.
   *
   * Note: The background color of the container is set to transparent in this case.
   *
   * @see [ScopedCssBaseline](https://mui.com/material-ui/react-css-baseline/#scoping-on-children)
   */
  scopeCssBaseline?: boolean;
};



export function ThemeProvider({
  children,
  themeOverrides,
  scopeCssBaseline,
  ...other
}: ThemeProviderProps) {
  const theme = createTheme(baseTheme, { themeOverrides });

  return (
    <ThemeVarsProvider defaultMode="dark" theme={theme} {...other}>
      {scopeCssBaseline ? (
        <ScopedCssBaseline sx={{ bgcolor: 'transparent' }}>
          {children}
        </ScopedCssBaseline>
      ) : (
        <>
          <CssBaseline />
          {children}
        </>
      )}
    </ThemeVarsProvider>
  );
}
