import React from 'react';

const QuizSelection = ({ quizzes, onSelect }) => {
  return (
    <div className="quiz-selection">
      <h2>Select a Quiz</h2>
      {quizzes.map((quiz, index) => (
        <button key={index} onClick={() => onSelect(quiz)}>
          {quiz.name}
        </button>
      ))}
    </div>
  );
};

export default QuizSelection;

