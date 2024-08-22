import React from 'react';
import { Link } from 'react-router-dom';

const quizzes = [
  { id: 1, name: 'General Knowledge' },
  { id: 2, name: 'Science' },
  
];

const QuizSelection = () => {
  return (
    <div>
      <h1>Select a Quiz</h1>
      <ul>
        {quizzes.map(quiz => (
          <li key={quiz.id}>
            <Link to={`/quiz/${quiz.id}`}>{quiz.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizSelection;
