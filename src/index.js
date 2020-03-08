import readlineSync from 'readline-sync';

const run = ({ description, genRoundData }) => {
  console.log('Welcome to the Brain Games!');

  const playerName = readlineSync.question('May I have your name? ') || 'guest';
  console.log(`Hello, ${playerName}!`);

  console.log(description);

  for (let i = 0; i < 3; i += 1) {
    const [question, expectedAnswer] = genRoundData();

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
