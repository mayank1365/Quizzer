import React from 'react';

const QuizSummary = ({ score, total }) => {
  return (
    <div>
      <h2>Quiz Completed!</h2>
      <p>Your Score: {score} / {total}</p>
    </div>
  );
};

export default QuizSummary;
