import React, { useState } from 'react';

const QuizQuestion = ({ question, onAnswer, currentQuestion, totalQuestions }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      onAnswer(selectedAnswer);
    } else {
      alert('Please select an answer before proceeding.');
    }
  };

  return (
    <div className="quiz-question">
      <h3>{`Question ${currentQuestion + 1} of ${totalQuestions}`}</h3>
      <p>{question.text}</p>
      {question.options.map((option, index) => (
        <label key={index}>
          <input
            type="radio"
            name="answer"
            value={index}
            onChange={() => setSelectedAnswer(index)}
            checked={selectedAnswer === index}
          />
          {option}
        </label>
      ))}
      <div className="navigation-buttons">
        <button onClick={handleSubmit}>Next</button>
      </div>
    </div>
  );
};

export default QuizQuestion;

