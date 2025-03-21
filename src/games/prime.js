import prime from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) return 'no';
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return 'no';
  }
  return 'yes';
};

const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const getQuestionAdAnswer = () => {
  const question = randomInteger(1, 100);
  const currectAnswer = isPrime(question);
  return [question, currectAnswer];
};

export default () => {
  prime(description, getQuestionAdAnswer);
};
