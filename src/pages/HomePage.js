import React from 'react';
import QuizSelection from '../components/QuizSelection';

const HomePage = ({ quizzes, onSelectQuiz }) => {
  return (
    <div className="home-page">
      <QuizSelection quizzes={quizzes} onSelect={onSelectQuiz} />
    </div>
  );
};

export default HomePage;
