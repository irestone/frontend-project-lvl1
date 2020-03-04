import _ from 'lodash';

import { findGCD } from '../utils/math.js';

const MIN_NUMBER = 2;
const MAX_NUMBER = 99;

const genQuestionAndAnswerPair = () => {
  const a = _.random(MIN_NUMBER, MAX_NUMBER);
  const b = _.random(MIN_NUMBER, MAX_NUMBER);

  const question = `${a} ${b}`;
  const answer = findGCD(a, b).toString();

  return [question, answer];
};

const game = {
  rules: 'Find the greatest common divisor of given numbers.',
  genQuestionAndAnswerPair,
};

export default game;
