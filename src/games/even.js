import myOneGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const randomInteger = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };

  const getQuestionAdAnswer = () => {
    const question = randomInteger(1, 9);
    const currectAnswer = isEven(question) ? 'yes' : 'no';
    return [question, currectAnswer];
  };

  export default () => {
  myOneGame(description, getQuestionAdAnswer)
  };