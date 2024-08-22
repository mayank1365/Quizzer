import React, { useState } from 'react';

const QuizQuestion = ({ question, onAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleSubmit = () => {
    onAnswer(selectedAnswer);
  };

  return (
    <div>
      <h2>{question.text}</h2>
      <form>
        {question.answers.map((answer, index) => (
          <div key={index}>
            <input
              type="radio"
              name="answer"
              value={answer}
              checked={selectedAnswer === answer}
              onChange={handleAnswerChange}
            />
            <label>{answer}</label>
          </div>
        ))}
      </form>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default QuizQuestion;
