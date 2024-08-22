import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import QuizQuestion from '../components/QuizQuestion';
import QuizSummary from '../components/QuizSummary';
import ProgressBar from '../components/ProgressBar';

const quizzes = {
    1: [ // General Knowledge
      { text: 'What is the capital of Italy?', answers: ['Rome', 'Paris', 'Berlin', 'Madrid'], correct: 'Rome' },
      { text: 'Which color do you get by mixing red and white?', answers: ['Pink', 'Purple', 'Orange', 'Brown'], correct: 'Pink' },
      { text: 'What is the largest continent by land area?', answers: ['Asia', 'Africa', 'Europe', 'North America'], correct: 'Asia' },
      { text: 'Which planet is known as the Blue Planet?', answers: ['Earth', 'Mars', 'Neptune', 'Uranus'], correct: 'Earth' },
      { text: 'What is the main ingredient in guacamole?', answers: ['Avocado', 'Tomato', 'Pepper', 'Onion'], correct: 'Avocado' }
    ],
    2: [ // Science
      { text: 'What gas do plants use for photosynthesis?', answers: ['Carbon Dioxide', 'Oxygen', 'Nitrogen', 'Hydrogen'], correct: 'Carbon Dioxide' },
      { text: 'How many bones are there in the human body?', answers: ['206', '195', '210', '220'], correct: '206' },
      { text: 'What is the boiling point of water?', answers: ['100°C', '90°C', '110°C', '80°C'], correct: '100°C' },
      { text: 'What planet is known for its rings?', answers: ['Saturn', 'Jupiter', 'Mars', 'Venus'], correct: 'Saturn' },
      { text: 'What is the chemical symbol for gold?', answers: ['Au', 'Ag', 'Fe', 'Pb'], correct: 'Au' }
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
