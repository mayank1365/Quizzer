import React, { useState } from 'react';
import ProgressBar from '../components/ProgressBar';
import './QuizPage.css';

const QuizPage = ({ quiz, onRestart }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const isMultipleChoice = Array.isArray(currentQuestion.correctAnswer);

  const handleOptionChange = (index) => {
    if (isMultipleChoice) {
      setSelectedOptions(prev => {
        const newSelections = prev.includes(index)
          ? prev.filter(selectedIndex => selectedIndex !== index)
          : [...prev, index];

        if (newSelections.length === currentQuestion.correctAnswer.length) {
          const isCorrect = currentQuestion.correctAnswer.every(answer => newSelections.includes(answer));
          setIsAnswerCorrect(isCorrect);
        } else {
          setIsAnswerCorrect(null); // Reset correctness while selecting
        }

        return newSelections;
      });
    } else {
      setSelectedOptions([index]);
      setIsAnswerCorrect(currentQuestion.correctAnswer === index);
    }
  };

  const handleNext = () => {
    // Update score if the answer is correct
    if (isAnswerCorrect) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < quiz.questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
      setSelectedOptions([]); // Clear selections for the next question
      setIsAnswerCorrect(null); // Reset correctness for the next question
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOptions([]); // Clear selections when navigating back
      setIsAnswerCorrect(null); // Reset correctness when navigating back
    }
  };

  const handleRestartClick = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setIsCompleted(false);
    setSelectedOptions([]);
    setIsAnswerCorrect(null);
    onRestart();
  };

  return (
    <div className="quiz-page">
      {!isCompleted ? (
        <>
          <ProgressBar current={currentQuestionIndex + 1} total={quiz.questions.length} />
          <div className="question-container">
            <h2 className="question-text">{currentQuestion.text}</h2>
            <div className="options">
              {currentQuestion.options.map((option, index) => (
                <div key={index} className="option-container">
                  <label className={`option-label ${selectedOptions.includes(index) ? 'selected' : ''}`}>
                    <input
                      type={isMultipleChoice ? 'checkbox' : 'radio'}
                      name={`question-${currentQuestionIndex}`}
                      checked={selectedOptions.includes(index)}
                      onChange={() => handleOptionChange(index)}
                      disabled={isCompleted}
                    />
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="navigation-buttons">
            <button
              className="prev-button"
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </button>
            <button
              className="next-button"
              onClick={handleNext}
              disabled={isMultipleChoice && isAnswerCorrect === null}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <div className="score-display">
          <h2>Your score: {score} / {quiz.questions.length}</h2>
          <button className="restart-button" onClick={handleRestartClick}>
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
