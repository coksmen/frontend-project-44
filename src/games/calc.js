import twoGames from '../index.js';

const description = 'What is the result of the expression?';

const getRandomOperators = () => {
const operators = ['*' , '+', '-'];
const randomIndex = Math.floor(Math.random() * operators.length);
return operators[randomIndex];
};

const randomInteger = (min, max) => {
    let rang = min + Math.random() * (max + 1 - min);
    return Math.floor(rang);
};

const calculate = (num1, num2, operator) => {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        default:
            return null;
    };
};

const getQuestionAdAnswer = () => {
    const get1Integer = randomInteger(1, 100);
    const get2Integer = randomInteger(1, 100);
    const operator = getRandomOperators ();
    const question = `${get1Integer} ${operator} ${get2Integer}`;
    const currectAnswer = calculate(get1Integer, get2Integer, operator).toString();
    return [question, currectAnswer];
};

export default () => {
twoGames(description, getQuestionAdAnswer);
};
