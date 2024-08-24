import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../styling/NavBar.css';

// Create a custom theme to override default Material UI styles
const theme = createTheme({
  typography: {
    fontFamily: 'cmu_serifroman, serif',
    button: {
      textTransform: 'none', // Remove the default uppercase transformation
      fontWeight: 'bold',
    },
  },
  palette: {
    primary: {
      main: '#f5f5f5', // Background color similar to LaTeX documents
    },
    text: {
      primary: '#333', // Darker text color for readability
    },
  },
});

const NavBar: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="primary" className="navbar">
        <Toolbar>
          <Button color="inherit" href="#home">Home</Button>
          <Button color="inherit" href="#about">About</Button>
          <Button color="inherit" href="#services">Services</Button>
          <Button color="inherit" href="#contact">Contact</Button>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default NavBar;

