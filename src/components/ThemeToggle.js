import React from 'react';

const ThemeToggle = ({ toggleTheme, theme }) => {
  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
};

export default ThemeToggle;
