import React, { useState } from 'react';
import QuizQuestion from '../components/QuizQuestion';
import QuizSummary from '../components/QuizSummary';
import ProgressBar from '../components/ProgressBar';

const QuizPage = ({ quiz, onRestart }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === quiz.questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentQuestion(null);
    }
  };

  return (
    <div className="quiz-page">
      <ProgressBar current={currentQuestion + 1} total={quiz.questions.length} />
      {currentQuestion !== null ? (
        <QuizQuestion
          question={quiz.questions[currentQuestion]}
          onAnswer={handleAnswer}
          currentQuestion={currentQuestion}
          totalQuestions={quiz.questions.length}
        />
      ) : (
        <QuizSummary
          score={score}
          totalQuestions={quiz.questions.length}
          onRestart={onRestart}
        />
      )}
    </div>
  );
};

export default QuizPage;
