import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import '../styling/NavBar.css';

const NavBar: React.FC = () => {
  const [animatedLetters, setAnimatedLetters] = useState<Set<number>>(
    new Set()
  );
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMouseEnter = (index: number) => {
    setAnimatedLetters((prev) => new Set(prev).add(index));
  };

  const handleAnimationEnd = (index: number) => {
    setAnimatedLetters((prev) => {
      const updated = new Set(prev);
      updated.delete(index);
      return updated;
    });
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar className="navbar">
      <Toolbar className="toolbar">
        <Typography variant="h4" className="navbar-brand">
          {Array.from('Majd Yousof').map((char, index) => (
            <span
              key={index}
              className={`jumping-letter ${animatedLetters.has(index) ? 'jump' : ''}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onAnimationEnd={() => handleAnimationEnd(index)}
            >
              {char === ' ' ? '\u00A0' : char}{' '}
              {/* Preserve space between words */}
            </span>
          ))}
          <span className="brand-dot">.</span>
        </Typography>
        <div className="navbar-buttons">
          <div className="desktop-buttons">
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/articles">
              Articles
            </Button>
            <Button color="inherit" href="https://github.com/majdyousof/">
              Github
            </Button>
            <Button
              color="inherit"
              href="https://www.linkedin.com/in/majdyousof/"
            >
              LinkedIn
            </Button>
            <Button color="inherit" href="#contact">
              Contact
            </Button>
          </div>
          <IconButton
            className="menu-button"
            edge="start"
            color="inherit"
            aria-label="menu"
            aria-controls="navbar-menu"
            aria-haspopup="true"
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="navbar-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            classes={{ paper: 'menu-paper' }}
          >
            <MenuItem
              onClick={handleMenuClose}
              component={Link}
              to="/"
              className="menu-item"
            >
              Home
            </MenuItem>
            <MenuItem
              onClick={handleMenuClose}
              component={Link}
              to="/articles"
              className="menu-item"
            >
              Articles
            </MenuItem>
            <MenuItem
              onClick={handleMenuClose}
              component="a"
              href="https://github.com/majdyousof/"
              className="menu-item"
            >
              Github
            </MenuItem>
            <MenuItem
              onClick={handleMenuClose}
              component="a"
              href="https://www.linkedin.com/in/majdyousof/"
              className="menu-item"
            >
              LinkedIn
            </MenuItem>
            <MenuItem
              onClick={handleMenuClose}
              component="a"
              href="#contact"
              className="menu-item"
            >
              Contact
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
