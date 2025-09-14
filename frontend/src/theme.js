import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50', // Green
      light: '#7CC47F',
      dark: '#3B873E',
      contrastText: '#fff',
    },
    secondary: {
      main: '#FF8F00', // Orange
      light: '#FFB347',
      dark: '#C67000',
      contrastText: '#fff',
    },
    error: {
      main: '#F44336',
    },
    background: {
      default: '#FAFAFA',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
        },
        containedPrimary: {
          '&:hover': {
            backgroundColor: '#3B873E',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.08)',
        },
      },
    },
  },
});

export default theme;
