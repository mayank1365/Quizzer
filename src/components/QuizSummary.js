import React from 'react';

const QuizSummary = ({ score, totalQuestions, onRestart }) => {
  return (
    <div className="quiz-summary">
      <h2>Quiz Completed</h2>
      <p>{`Your score is ${score} out of ${totalQuestions}`}</p>
      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  );
};

export default QuizSummary;
