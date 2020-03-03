import readlineSync from 'readline-sync';

export const greet = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ') || 'guest';
  console.log(`Hello, ${name}!`);
  return name;
};

export const play = (game, player) => {
  const NUMBER_OF_ROUNDS = 3;

  const { rules, genQuestionAndAnswerPair } = game;

  console.log(rules);

  for (let i = 1; i <= NUMBER_OF_ROUNDS; i += 1) {
    const [question, expectedAnswer] = genQuestionAndAnswerPair();

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === expectedAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer; (. Correct answer was "${expectedAnswer}"\nLet's try again, ${player}!`);
      return;
    }
  }

  console.log(`Congratulations, ${player}!`);
};
