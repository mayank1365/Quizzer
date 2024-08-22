import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const quizzes = [
    {
      name: 'General Knowledge',
      questions: [
        {
          text: 'What is the capital of France?',
          options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
          correctAnswer: 0,
        },
      ],
    },
  ];

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleSelectQuiz = (quiz) => {
    setSelectedQuiz(quiz);
  };

  const handleRestart = () => {
    setSelectedQuiz(null);
  };

  return (
    <div className="app">
      <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
      {selectedQuiz ? (
        <QuizPage quiz={selectedQuiz} onRestart={handleRestart} />
      ) : (
        <HomePage quizzes={quizzes} onSelectQuiz={handleSelectQuiz} />
      )}
    </div>
  );
};

export default App;
