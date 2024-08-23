import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleSelectQuiz = (quiz) => {
    setSelectedQuiz(quiz);
  };

  const handleRestart = () => {
    setSelectedQuiz(null);
  };

  const quizzes = [
    {
      name: 'General Knowledge',
      questions: [
        { text: 'What is the capital of France?', options: ['Paris', 'Berlin', 'Madrid', 'Rome'], correctAnswer: 0 },
        { text: 'Which planet is known as the Red Planet?', options: ['Mars', 'Venus', 'Jupiter', 'Saturn'], correctAnswer: 0 },
        { text: 'Who wrote "Hamlet"?', options: ['Shakespeare', 'Dickens', 'Hemingway', 'Orwell'], correctAnswer: 0 },
        { text: 'The Great Wall of China is visible from space.', options: ['True', 'False'], correctAnswer: 1 },
        { text: 'Select all European countries from the list.', options: ['Spain', 'Brazil', 'Germany', 'Australia'], correctAnswer: [0, 2] },
        { text: 'What is the boiling point of water?', options: ['100°C', '50°C', '0°C', '150°C'], correctAnswer: 0 },
        { text: 'How many continents are there?', options: ['7', '5', '6', '8'], correctAnswer: 0 },
        { text: 'Which organ pumps blood in the human body?', options: ['Heart', 'Brain', 'Lungs', 'Kidneys'], correctAnswer: 0 },
        { text: 'Who discovered gravity?', options: ['Newton', 'Einstein', 'Tesla', 'Galileo'], correctAnswer: 0 },
        { text: 'What is the hardest natural substance?', options: ['Diamond', 'Gold', 'Iron', 'Copper'], correctAnswer: 0 },
      ],
    },
    {
      name: 'Science',
      questions: [
        { text: 'What is the chemical symbol for water?', options: ['H2O', 'O2', 'CO2', 'N2'], correctAnswer: 0 },
        { text: 'The sun is a planet.', options: ['True', 'False'], correctAnswer: 1 },
        { text: 'Which gas do plants absorb from the atmosphere?', options: ['Carbon dioxide', 'Oxygen', 'Nitrogen', 'Hydrogen'], correctAnswer: 0 },
        { text: 'What is the center of an atom called?', options: ['Nucleus', 'Electron', 'Proton', 'Neutron'], correctAnswer: 0 },
        { text: 'Which planet is known as the gas giant?', options: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'], correctAnswer: 0 },
        { text: 'What is the powerhouse of the cell?', options: ['Mitochondria', 'Nucleus', 'Ribosome', 'Lysosome'], correctAnswer: 0 },
        { text: 'What does DNA stand for?', options: ['Deoxyribonucleic acid', 'Ribonucleic acid', 'Deoxyribose acid', 'Ribonucleotide'], correctAnswer: 0 },
        { text: 'How many bones are in the human body?', options: ['206', '105', '300', '186'], correctAnswer: 0 },
        { text: 'Which of the following are noble gases?', options: ['Neon', 'Helium', 'Carbon', 'Argon'], correctAnswer: [0, 1, 3] },
        { text: 'What element is a diamond made of?', options: ['Carbon', 'Oxygen', 'Hydrogen', 'Nitrogen'], correctAnswer: 0 },
      ],
    },
    {
      name: 'History',
      questions: [
        { text: 'Who was the first President of the United States?', options: ['George Washington', 'Abraham Lincoln', 'John Adams', 'Thomas Jefferson'], correctAnswer: 0 },
        { text: 'In what year did World War II end?', options: ['1945', '1939', '1918', '1965'], correctAnswer: 0 },
        { text: 'Who was the first man to walk on the moon?', options: ['Neil Armstrong', 'Buzz Aldrin', 'Michael Collins', 'Yuri Gagarin'], correctAnswer: 0 },
        { text: 'Which country was known as Persia?', options: ['Iran', 'Iraq', 'Syria', 'Turkey'], correctAnswer: 0 },
        { text: 'True or False: The Titanic sank in 1912.', options: ['True', 'False'], correctAnswer: 0 },
        { text: 'Who was the first woman to fly solo across the Atlantic?', options: ['Amelia Earhart', 'Harriet Quimby', 'Bessie Coleman', 'Eileen Collins'], correctAnswer: 0 },
        { text: 'Who discovered America?', options: ['Christopher Columbus', 'Vasco da Gama', 'Ferdinand Magellan', 'Marco Polo'], correctAnswer: 0 },
        { text: 'Which civilization built the pyramids?', options: ['Egyptians', 'Mayans', 'Romans', 'Chinese'], correctAnswer: 0 },
        { text: 'Select all countries involved in World War II.', options: ['USA', 'Germany', 'Australia', 'Japan'], correctAnswer: [0, 1, 3] },
        { text: 'Who was the first emperor of Rome?', options: ['Augustus', 'Julius Caesar', 'Nero', 'Tiberius'], correctAnswer: 0 },
      ],
    },
    {
      name: 'Sports',
      questions: [
        { text: 'Which country won the first FIFA World Cup?', options: ['Uruguay', 'Brazil', 'Argentina', 'Germany'], correctAnswer: 0 },
        { text: 'How many players are there on a basketball team?', options: ['5', '6', '7', '8'], correctAnswer: 0 },
        { text: 'In tennis, what is the score when a game starts?', options: ['Love-Love', '15-0', '30-0', 'Deuce'], correctAnswer: 0 },
        { text: 'What is the maximum score in a single frame of bowling?', options: ['300', '150', '200', '250'], correctAnswer: 0 },
        { text: 'Which country has the most Olympic gold medals?', options: ['USA', 'China', 'Russia', 'Germany'], correctAnswer: 0 },
        { text: 'Which sport uses the terms “birdie” and “eagle”?', options: ['Golf', 'Tennis', 'Badminton', 'Baseball'], correctAnswer: 0 },
        { text: 'The NFL goalposts are blue.', options: ['True', 'False'], correctAnswer: 1 },
        { text: 'What color are the goalposts in NFL football?', options: ['Yellow', 'White', 'Blue', 'Red'], correctAnswer: 0 },
        { text: 'What is the national sport of Japan?', options: ['Sumo', 'Judo', 'Baseball', 'Soccer'], correctAnswer: 0 },
        { text: 'How many holes are there in a full round of golf?', options: ['18', '9', '12', '15'], correctAnswer: 0 },
      ],
    },
    {
      name: 'Technology',
      questions: [
        { text: 'What does HTTP stand for?', options: ['HyperText Transfer Protocol', 'HyperText Transmission Protocol', 'High Transfer Technology Protocol', 'HyperText Technical Protocol'], correctAnswer: 0 },
        { text: 'Who is the founder of Microsoft?', options: ['Bill Gates', 'Steve Jobs', 'Mark Zuckerberg', 'Elon Musk'], correctAnswer: 0 },
        { text: 'What is the most popular programming language in the world?', options: ['JavaScript', 'Python', 'Java', 'C++'], correctAnswer: 0 },
        { text: 'Which company developed the Android operating system?', options: ['Google', 'Apple', 'Microsoft', 'IBM'], correctAnswer: 0 },
        { text: 'The first iPhone was released in 2007.', options: ['True', 'False'], correctAnswer: 0 },
        { text: 'What does CPU stand for?', options: ['Central Processing Unit', 'Control Processing Unit', 'Computer Processing Unit', 'Central Power Unit'], correctAnswer: 0 },
        { text: 'Who is the CEO of Tesla?', options: ['Elon Musk', 'Jeff Bezos', 'Bill Gates', 'Sundar Pichai'], correctAnswer: 0 },
        { text: 'Which programming language is known as the backbone of web development?', options: ['JavaScript', 'Ruby', 'PHP', 'Swift'], correctAnswer: 0 },
        { text: 'What does GPU stand for?', options: ['Graphics Processing Unit', 'Graphical Processing Unit', 'General Processing Unit', 'Graphical Power Unit'], correctAnswer: 0 },
        { text: 'Select all companies that developed popular web browsers.', options: ['Google', 'Mozilla', 'Apple', 'Facebook'], correctAnswer: [0, 1, 2] },
      ],
    },
    {
      name: 'Movies',
      questions: [
        { text: 'Who directed "Inception"?', options: ['Christopher Nolan', 'Steven Spielberg', 'James Cameron', 'Quentin Tarantino'], correctAnswer: 0 },
        { text: 'What is the highest-grossing film of all time?', options: ['Avatar', 'Avengers: Endgame', 'Titanic', 'Star Wars'], correctAnswer: 1 },
        { text: 'Who won the Best Actor Oscar in 2020?', options: ['Joaquin Phoenix', 'Leonardo DiCaprio', 'Brad Pitt', 'Tom Hanks'], correctAnswer: 0 },
        { text: 'In which year was the original "Jurassic Park" released?', options: ['1993', '1995', '1997', '2000'], correctAnswer: 0 },
        { text: 'Frozen" is a Pixar movie.', options: ['True', 'False'], correctAnswer: 1 },
        { text: 'Which movie features the character Jack Dawson?', options: ['Titanic', 'Avatar', 'Gladiator', 'The Matrix'], correctAnswer: 0 },
        { text: 'Who played Iron Man in the Marvel Cinematic Universe?', options: ['Robert Downey Jr.', 'Chris Evans', 'Mark Ruffalo', 'Chris Hemsworth'], correctAnswer: 0 },
        { text: 'Which movie won the Best Picture Oscar in 2021?', options: ['Nomadland', 'The Father', 'Promising Young Woman', 'Judas and the Black Messiah'], correctAnswer: 0 },
        { text: 'Who directed "The Lord of the Rings" trilogy?', options: ['Peter Jackson', 'George Lucas', 'Ridley Scott', 'James Cameron'], correctAnswer: 0 },
        { text: 'Which of these are Pixar movies?', options: ['Toy Story', 'Monsters, Inc.', 'Shrek', 'Finding Nemo'], correctAnswer: [0, 1, 3] },
      ],
    },
  ];

  return (
    <div className="app">
      <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
      {selectedQuiz ? (
        <QuizPage quiz={selectedQuiz} onRestart={handleRestart} />
      ) : (
        <HomePage quizzes={quizzes} onSelectQuiz={handleSelectQuiz} />
      )}
    </div>
  );
};

export default App;
