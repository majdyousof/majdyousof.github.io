import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styling/NavBar.css';

const NavBar: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const nextTheme = theme === 'light' ? 'dark' : 'light';

  return (
    <header className="site-header">
      <Link className="site-name" to="/">
        Majd Yousof
      </Link>
      <div className="header-actions">
        <nav aria-label="Main navigation">
          <NavLink end to="/">
            Home
          </NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/articles">Articles</NavLink>
          <a href="https://github.com/majdyousof/">GitHub</a>
          <a href="https://www.linkedin.com/in/majdyousof/">LinkedIn</a>
        </nav>
        <button
          className="theme-toggle"
          type="button"
          onClick={() => setTheme(nextTheme)}
          aria-label={`Switch to ${nextTheme} mode`}
          title={`Switch to ${nextTheme} mode`}
        >
          <span aria-hidden="true">{theme === 'light' ? '☾' : '☀'}</span>
        </button>
      </div>
    </header>
  );
};

export default NavBar;
