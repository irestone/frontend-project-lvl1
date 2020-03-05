import _ from 'lodash';

import { isPrime } from '../math.js';

const TRUE_ANSWER = 'yes';
const FALSE_ANSWER = 'no';

const genQuestionAndAnswerPair = () => {
  const randomNumber = _.random(2, 200);

  const question = randomNumber.toString();
  const answer = isPrime(randomNumber) ? TRUE_ANSWER : FALSE_ANSWER;

  return [question, answer];
};

const game = {
  rules: `Answer "${TRUE_ANSWER}" if given number is prime. Otherwise answer "${FALSE_ANSWER}".`,
  genQuestionAndAnswerPair,
};

export default game;
