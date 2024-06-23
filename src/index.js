import readlineSync from 'readline-sync';

const countRound = 3; 
export default (description, getQuestionAdAnswer) => {
console.log ('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name?: ');

console.log(`Hello, ${name}!`);

console.log (description);

for (let i = 0; i < countRound; i++) {
    const [question, currectAnswer] = getQuestionAdAnswer();
    console.log(`Question: ${question}`); //15

    const answer = readlineSync.question('Your answer: '); //no
        if (answer === currectAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was ${currectAnswer}.`);
            console.log(`Let's try again, ${name}`);
        }
    }
    console.log(`Congratulations, ${name}!`);
};


// Welcome to the Brain Games!
// May I have your name? Sam
// Hello, Sam!
// Answer "yes" if the number is even, otherwise answer "no".
// Question: 15
// Your answer: no
// Correct!
// Question: 6
// Your answer: yes
// Correct!
// Question: 7
// Your answer: no
// Correct!
// Congratulations, Sam!