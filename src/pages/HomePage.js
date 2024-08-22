import React, { useState } from 'react';
import QuizSelection from '../components/QuizSelection';
import ThemeToggle from '../components/ThemeToggle';
import { lightTheme, darkTheme } from '../theme';
import styled, { ThemeProvider } from 'styled-components';

const HomePageContainer = styled.div`
  padding: 20px;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.color};
`;

const HomePage = () => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <HomePageContainer>
        <ThemeToggle toggleTheme={toggleTheme} />
        <QuizSelection />
      </HomePageContainer>
    </ThemeProvider>
  );
};

export default HomePage;
