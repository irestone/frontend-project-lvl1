import readlineSync from 'readline-sync';

const run = ({ rules, genQuestionAndAnswerPair }) => {
  console.log('Welcome to the Brain Games!');

  const playerName = readlineSync.question('May I have your name? ') || 'guest';
  console.log(`Hello, ${playerName}!`);

  console.log(rules);

  for (let i = 0; i < 3; i += 1) {
    const [question, expectedAnswer] = genQuestionAndAnswerPair();

    console.log(`Question: ${question}`);
    const actualAnswer = readlineSync.question('Your answer: ');

    if (actualAnswer === expectedAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${actualAnswer}" is wrong answer; (. Correct answer was "${expectedAnswer}"\nLet's try again, ${playerName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
};

export default run;
