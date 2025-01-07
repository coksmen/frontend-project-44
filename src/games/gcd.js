import gcdGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.'

const randomInteger = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };

const nod = (a, b) => {
    while (b !=0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
};

const getQuestionAdAnswer = () => {
    const get1Integer = randomInteger(1, 100);
    const get2Integer = randomInteger(1, 100);
    const question = `${get1Integer} ${get2Integer}`
    const currectAnswer = nod(get1Integer, get2Integer).toString();
    return [question, currectAnswer];
}


export default () => {
    gcdGame (description, getQuestionAdAnswer)
};