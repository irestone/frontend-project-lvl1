import _ from 'lodash';

import { isPrime } from '../utils/math.js';

const TRUE_ANSWER = 'yes';
const FALSE_ANSWER = 'no';
const MIN_NUMBER = 2;
const MAX_NUMBER = 200;

const genQuestionAndAnswerPair = () => {
  const randomNumber = _.random(MIN_NUMBER, MAX_NUMBER);

  const question = randomNumber.toString();
  const answer = isPrime(randomNumber) ? TRUE_ANSWER : FALSE_ANSWER;

  return [question, answer];
};

const game = {
  rules: `Answer "${TRUE_ANSWER}" if given number is prime. Otherwise answer "${FALSE_ANSWER}".`,
  genQuestionAndAnswerPair,
};

export default game;
