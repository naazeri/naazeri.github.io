'use client';

import { createTheme, CustomBreakpoints } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF7BA9',
    },
    secondary: {
      main: '#FFC6C6',
    },

    text: {
      primary: '#000000',
      disabled: '#4C4C4C',
    },
    background: {
      default: '#EFF8FF',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  breakpoints: {
    values: {
      xs: 0,
      xsm: 375,
      sm: 600,
      md: 900,
      lg: 1280,
      xl: 1536,
    },
  },
});

export default theme;
