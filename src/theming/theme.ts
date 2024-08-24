import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#f5f5f5', // Light background, similar to LaTeX document pages
    },
    text: {
      primary: '#333', // Darker text color for readability
    },
  }
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#333', // Dark background for dark mode
    },
    text: {
      primary: '#f5f5f5', // Light text color for readability
    },
  }
});

export { lightTheme, darkTheme };
