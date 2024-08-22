import React, { useState } from 'react';
import { lightTheme, darkTheme } from '../theme';
import styled, { ThemeProvider } from 'styled-components';

const ToggleButton = styled.button`
  margin: 10px;
`;

const ThemeToggle = ({ toggleTheme }) => {
  return (
    <ToggleButton onClick={toggleTheme}>
      Toggle Theme
    </ToggleButton>
  );
};

export default ThemeToggle;
