import readlineSync from 'readline-sync';

const ROUNDS_COUNT = 3;

export const run = ({ rules, genQuestionAndAnswerPair }, player) => {
  console.log(rules);

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const [question, expectedAnswer] = genQuestionAndAnswerPair();

    console.log(`Question: ${question}`);
    const actualAnswer = readlineSync.question('Your answer: ');

    if (actualAnswer === expectedAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${actualAnswer}" is wrong answer; (. Correct answer was "${expectedAnswer}"\nLet's try again, ${player}!`);
      return;
    }
  }

  console.log(`Congratulations, ${player}!`);
};
