import _ from 'lodash';

import { gcd } from '../math.js';

const genQuestionAndAnswerPair = () => {
  const a = _.random(2, 99);
  const b = _.random(2, 99);

  const question = `${a} ${b}`;
  const answer = gcd(a, b).toString();

  return [question, answer];
};

const game = {
  rules: 'Find the greatest common divisor of given numbers.',
  genQuestionAndAnswerPair,
};

export default game;
