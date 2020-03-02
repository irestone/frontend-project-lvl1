import readlineSync from 'readline-sync';


export const greet = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ') || 'guest';
  console.log(`Hello, ${name}!`);
  return name;
};

export const playEven = (playerName) => {
  const numberOfQuestionsToWin = 3;

  const trueAnswer = 'yes';
  const falseAnswer = 'no';

  const genRandomNumber = () => Math.round(Math.random() * 999);
  const isEven = (n) => n % 2 === 0;

  console.log(`Answer "${trueAnswer}" if the number is even, otherwise answer "${falseAnswer}".`);

  for (let i = 1; i <= numberOfQuestionsToWin; i += 1) {
    const randomNumber = genRandomNumber();
    const expectedAnswer = isEven(randomNumber) ? trueAnswer : falseAnswer;

    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === expectedAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer; (. Correct answer was "${expectedAnswer}"\nLet's try dagain, ${playerName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
};
