import React, { useState } from 'react';
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import '../styling/NavBar.css';

const NavBar: React.FC = () => {
  const [animatedLetters, setAnimatedLetters] = useState<Set<number>>(
    new Set()
  );
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMouseEnter = (index: number) => {
    setAnimatedLetters((prev) => new Set(prev).add(index));
  };

  const handleTouchStart = (index: number) => {
    setAnimatedLetters((prev) => new Set(prev).add(index));
  };

  const handleTouchMove = (index: number) => {
    // Keep track of touch movement to trigger animation
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

  const onDownloadCV = () => {
    const link = document.createElement('a');
    link.download = `majdyousofcv.pdf`;
    link.href = './majdyousofcv.pdf';
    link.click();
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
              onTouchStart={() => handleTouchStart(index)}
              onTouchMove={() => handleTouchMove(index)}
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
            <Button color='inherit' onClick={onDownloadCV}>
              Download CV
            </Button>
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
            <MenuItem onClick={onDownloadCV} className="menu-item">
              Download CV
            </MenuItem>
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
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
