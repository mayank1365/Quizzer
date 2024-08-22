import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import QuizQuestion from '../components/QuizQuestion';
import QuizSummary from '../components/QuizSummary';
import ProgressBar from '../components/ProgressBar';

// Sample quiz data
const quizzes = {
  1: [
    { text: 'What is the capital of France?', answers: ['Paris', 'London', 'Berlin', 'Madrid'], correct: 'Paris' },
    { text: 'What is 2 + 2?', answers: ['3', '4', '5', '6'], correct: '4' }
  ],
  2: [
    { text: 'What planet is known as the Red Planet?', answers: ['Earth', 'Mars', 'Jupiter', 'Saturn'], correct: 'Mars' },
    { text: 'What is the chemical symbol for water?', answers: ['H2O', 'CO2', 'O2', 'NaCl'], correct: 'H2O' }
  ]
};

const QuizPage = () => {
  const { quizId } = useParams();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const questions = quizzes[quizId];
  const totalQuestions = questions.length;

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestionIndex].correct) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <div>
      {finished ? (
        <QuizSummary score={score} total={totalQuestions} />
      ) : (
        <div>
          <ProgressBar progress={((currentQuestionIndex + 1) / totalQuestions) * 100} />
          <QuizQuestion question={questions[currentQuestionIndex]} onAnswer={handleAnswer} />
        </div>
      )}
    </div>
  );
};

export default QuizPage;
