import readlineSync from 'readline-sync';

const run = ({ description, genRound }) => {
  console.log('Welcome to the Brain Games!');

  const playerName = readlineSync.question('May I have your name? ') || 'guest';
  console.log(`Hello, ${playerName}!`);

  console.log(description);

  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, expectedAnswer] = genRound();

    console.log(`Question: ${question}`);
    const actualAnswer = readlineSync.question('Your answer: ');

    if (actualAnswer !== expectedAnswer) {
      console.log(`"${actualAnswer}" is wrong answer; (. Correct answer was "${expectedAnswer}"`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${playerName}!`);
};

export default run;
