import readlineSync from 'readline-sync';

const countRound = 3; 
export default (description, getQuestionAdAnswer) => {
console.log ('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name?: ');

console.log(`Hello, ${name}!`);

console.log(description);

for (let i = 0; i < countRound; i++) {
    const [question, currectAnswer] = getQuestionAdAnswer();
    console.log(`Question: ${question}`); 

    const answer = readlineSync.question('Your answer: '); 
        if (answer === currectAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was ${currectAnswer}.`);
            console.log(`Let's try again, ${name}!`);
            return;
        };
    };
    console.log(`Congratulations, ${name}!`);
};