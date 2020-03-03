import _ from 'lodash';

const TRUE_ANSWER = 'yes';
const FALSE_ANSWER = 'no';

const MIN_NUMBER = -999;
const MAX_NUMBER = 999;

const isEven = (n) => n % 2 === 0;

const genQuestionAndAnswerPair = () => {
  const randomNumber = _.random(MIN_NUMBER, MAX_NUMBER);

  const question = randomNumber.toString();
  const answer = isEven(randomNumber) ? TRUE_ANSWER : FALSE_ANSWER;

  return [question, answer];
};

const game = {
  rules: `Answer "${TRUE_ANSWER}" if the number is even, otherwise answer "${FALSE_ANSWER}".`,
  genQuestionAndAnswerPair,
};

export default game;
