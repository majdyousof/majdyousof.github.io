import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import '../styling/NavBar.css';

const NavBar: React.FC = () => {
  return (
    <AppBar position="sticky" className="navbar">
      <Toolbar className="toolbar">
        <Typography variant='h4' className="navbar-brand">
          Majd Yousof
        </Typography>
        <div className="navbar-buttons">
          <Button color="inherit" href="#home">Home</Button>
          <Button color="inherit" href="#about">About</Button>
          <Button color="inherit" href="#services">Services</Button>
          <Button color="inherit" href="#contact">Contact</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
