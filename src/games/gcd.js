import _ from 'lodash';

import { gcd } from '../math.js';

const genRoundData = () => {
  const a = _.random(2, 99);
  const b = _.random(2, 99);

  const question = `${a} ${b}`;
  const answer = gcd(a, b).toString();

  return [question, answer];
};

const game = {
  description: 'Find the greatest common divisor of given numbers.',
  genRoundData,
};

export default game;
