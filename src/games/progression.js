import progressionGame from '../index.js';

const description = 'What number is missing in the progression?';

const generateArithmeticProgression = (length, start, step) => {
  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }
  return progression;
};

const getQuestionAdAnswer = () => {
  const minLength = 5;
  const length = Math.floor(Math.random() * 6) + minLength;
  const start = Math.floor(Math.random() * 10);
  const step = Math.floor(Math.random() * 10);
  const progression = generateArithmeticProgression(length, start, step);
  const missingIndex = Math.floor(Math.random() * length);
  const preliminaryCurrectAnswer = progression[missingIndex];
  const currectAnswer = preliminaryCurrectAnswer.toString();
  progression[missingIndex] = '..';
  const question = progression.join(' ');
  return [question, currectAnswer];
};

export default () => {
  progressionGame(description, getQuestionAdAnswer);
};
